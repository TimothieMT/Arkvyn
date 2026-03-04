const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({
  origin: ['http://localhost:5173', 'https://arkvyn.de', 'https://www.arkvyn.de'],
  methods: ['POST', 'GET', 'OPTIONS'],
  credentials: true,
}));
app.use(express.json({ limit: '200kb' }));

const REQUIRED_ENV = ['GMAIL_USER', 'GMAIL_APP_PASSWORD'];
const missing = REQUIRED_ENV.filter((k) => !process.env[k]);
if (missing.length) {
  console.error(`[startup] Fehlende ENV Variablen: ${missing.join(', ')}`);
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

transporter
  .verify()
  .then(() => console.log('[startup] SMTP Verbindung erfolgreich verifiziert'))
  .catch((err) => console.error('[startup] SMTP Verify fehlgeschlagen:', err?.message || err));

app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'mail', time: new Date().toISOString() });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, betreff, message } = req.body;

  const clean = (v) => (typeof v === 'string' ? v.trim() : '');
  const cName = clean(name);
  const cEmail = clean(email);
  const cBetreff = clean(betreff);
  const cMessage = clean(message);

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validationErrors = [];
  if (!cName) validationErrors.push('Name ist erforderlich.');
  if (!emailRe.test(cEmail)) validationErrors.push('E-Mail-Adresse ist ungültig.');
  if (!cBetreff) validationErrors.push('Betreff ist erforderlich.');
  if (!cMessage || cMessage.length < 20) validationErrors.push('Nachricht muss mindestens 20 Zeichen enthalten.');
  if (validationErrors.length) {
    return res.status(400).json({ success: false, message: validationErrors.join(' ') });
  }

  if (DEBUG_EMAIL) {
    console.log('[contact] incoming body:', req.body);
  }

  const mailOptions = {
    from: `Arkvyn Kontakt <${process.env.GMAIL_USER}>`,
    replyTo: cEmail,
    to: process.env.GMAIL_USER,
    subject: `[Arkvyn] ${cBetreff} – von ${cName}`,
    text: `Name: ${cName}\nEmail: ${cEmail}\nBetreff: ${cBetreff}\n\nNachricht:\n${cMessage}`,
    html: `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height: 1.5;">
        <h2 style="margin-bottom: 16px;">Neue Kontaktanfrage über Arkvyn</h2>
        <p><strong>Name:</strong> ${cName}</p>
        <p><strong>Email:</strong> <a href="mailto:${cEmail}">${cEmail}</a></p>
        <p><strong>Betreff:</strong> ${cBetreff}</p>
        <hr style="margin: 16px 0;" />
        <p><strong>Nachricht:</strong></p>
        <p>${cMessage.replace(/\n/g, '<br/>')}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
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
