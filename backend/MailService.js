const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();
app.set('trust proxy', 'loopback');
app.use(cors({
  origin: ['http://localhost:5173', 'https://arkvyn.de', 'https://www.arkvyn.de'],
  methods: ['POST', 'GET', 'OPTIONS'],
}));
app.use(express.json({ limit: '200kb' }));

const REQUIRED_ENV = ['GMAIL_USER', 'GMAIL_APP_PASSWORD'];
const missing = REQUIRED_ENV.filter((k) => !process.env[k]);
if (missing.length) {
  console.error(`[startup] Fehlende ENV Variablen: ${missing.join(', ')}`);
  process.exit(1);
}

const DEBUG_EMAIL = (process.env.DEBUG_EMAIL || '').toLowerCase() === 'true';
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  family: 4,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
  logger: DEBUG_EMAIL,
});

let smtpReady = false;
transporter
  .verify()
  .then(() => {
    smtpReady = true;
    console.log('[startup] SMTP Verbindung erfolgreich verifiziert');
  })
  .catch((err) => console.error('[startup] SMTP Verify fehlgeschlagen:', err?.message || err));

app.get('/api/health', (req, res) => {
  res.status(smtpReady ? 200 : 503).json({ ok: smtpReady, service: 'mail', time: new Date().toISOString() });
});

const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX_REQUESTS = 5;
const contactAttempts = new Map();

function contactRateLimit(req, res, next) {
  const now = Date.now();
  const key = req.ip;
  const current = contactAttempts.get(key);

  if (!current || now - current.startedAt >= RATE_WINDOW_MS) {
    contactAttempts.set(key, { startedAt: now, count: 1 });
    return next();
  }

  if (current.count >= RATE_MAX_REQUESTS) {
    const retryAfter = Math.ceil((RATE_WINDOW_MS - (now - current.startedAt)) / 1000);
    res.set('Retry-After', String(retryAfter));
    return res.status(429).json({
      success: false,
      message: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.',
    });
  }

  current.count += 1;
  return next();
}

const cleanupTimer = setInterval(() => {
  const cutoff = Date.now() - RATE_WINDOW_MS;
  for (const [key, value] of contactAttempts.entries()) {
    if (value.startedAt < cutoff) contactAttempts.delete(key);
  }
}, RATE_WINDOW_MS);
cleanupTimer.unref();

const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

app.post('/api/contact', contactRateLimit, async (req, res) => {
  const { name, email, betreff, message, website } = req.body || {};

  const clean = (v) => (typeof v === 'string' ? v.trim() : '');
  // Header-Felder dürfen keine Zeilenumbrüche enthalten (Schutz vor Header-Injection).
  const cleanHeader = (v) => clean(v).replace(/[\r\n]+/g, ' ');
  const cName = cleanHeader(name);
  const cEmail = clean(email);
  const cBetreff = cleanHeader(betreff);
  const cMessage = clean(message);

  // Für echte Nutzer unsichtbares Honeypot-Feld: Bots erhalten absichtlich Erfolg.
  if (clean(website)) {
    return res.status(200).json({ success: true, message: 'Nachricht erfolgreich gesendet.' });
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validationErrors = [];
  if (!cName) validationErrors.push('Name ist erforderlich.');
  if (cName.length > 100) validationErrors.push('Name ist zu lang.');
  if (!emailRe.test(cEmail)) validationErrors.push('E-Mail-Adresse ist ungültig.');
  if (cEmail.length > 254) validationErrors.push('E-Mail-Adresse ist zu lang.');
  if (!cBetreff) validationErrors.push('Betreff ist erforderlich.');
  if (cBetreff.length > 200) validationErrors.push('Betreff ist zu lang.');
  if (!cMessage || cMessage.length < 20) validationErrors.push('Nachricht muss mindestens 20 Zeichen enthalten.');
  if (cMessage.length > 5000) validationErrors.push('Nachricht ist zu lang.');
  if (validationErrors.length) {
    return res.status(400).json({ success: false, message: validationErrors.join(' ') });
  }

  if (DEBUG_EMAIL) {
    console.log('[contact] incoming body:', req.body);
  }

  const mailOptions = {
    from: `Arkvyn Kontakt <${process.env.GMAIL_USER}>`,
    replyTo: cEmail,
    to: 'arkvyn.solutions@proton.me',
    subject: `[Arkvyn] ${cBetreff} von ${cName}`,
    text: `Name: ${cName}\nEmail: ${cEmail}\nBetreff: ${cBetreff}\n\nNachricht:\n${cMessage}`,
    html: `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height: 1.5;">
        <h2 style="margin-bottom: 16px;">Neue Kontaktanfrage über Arkvyn</h2>
        <p><strong>Name:</strong> ${escapeHtml(cName)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(cEmail)}">${escapeHtml(cEmail)}</a></p>
        <p><strong>Betreff:</strong> ${escapeHtml(cBetreff)}</p>
        <hr style="margin: 16px 0;" />
        <p><strong>Nachricht:</strong></p>
        <p>${escapeHtml(cMessage).replace(/\n/g, '<br/>')}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    smtpReady = true;
    res.status(200).json({ success: true, message: 'E-Mail erfolgreich gesendet!' });
  } catch (error) {
    console.error('Mailfehler:', {
      message: error?.message,
      code: error?.code,
      response: error?.response,
      responseCode: error?.responseCode,
      command: error?.command,
    });
    const base = { success: false, message: 'Fehler beim Senden der E-Mail.' };
    if (DEBUG_EMAIL) {
      base.error = {
        message: error?.message,
        code: error?.code,
        response: error?.response,
        responseCode: error?.responseCode,
        command: error?.command,
      };
    }
    res.status(500).json(base);
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend läuft auf Port ${PORT}`);
});
