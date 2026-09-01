# Arkvyn

Persönliche Website von Arkvyn gebaut mit **React + TypeScript + Vite** (Frontend) und **Node.js + Express** (Backend/Mail-Service).

---

## Tech-Stack

| Bereich | Technologie |
|---|---|
| Frontend | React 19, TypeScript, Vite, React Router |
| Backend | Node.js, Express, Nodemailer |
| Prozess-Manager | PM2 |
| Webserver | Nginx (Reverse Proxy) |
| Hosting | Hetzner VPS (178.104.24.155) |
| Domain | arkvyn.de |

---

## Projektstruktur

```
/
├── src/                  # React-Frontend
│   └── components/       # Einzelne Seiten (Home, UeberMich, Preise, …)
├── backend/
│   └── MailService.js    # Express-API für das Kontaktformular
├── public/               # Statische Assets
├── dist/                 # Build-Output (wird von Nginx ausgeliefert)
├── ecosystem.config.cjs  # PM2-Konfiguration
├── nginx.conf            # Nginx-Konfiguration (Referenz)
├── deploy.sh             # Deployment-Skript
└── vite.config.ts
```

---

## Wie die Seite funktioniert

### Frontend
- Single-Page-Application (SPA) mit React Router.
- Vite baut die App in den Ordner `dist/`.
- Nginx liefert den `dist/`-Ordner statisch aus. Alle unbekannten Routen werden auf `index.html` weitergeleitet (SPA-Routing).

### Backend (Mail-Service)
- Ein schlanker Express-Server läuft auf Port **3001**.
- Nginx leitet alle Anfragen unter `/api/` per Reverse Proxy an den Express-Server weiter.
- Das Kontaktformular (`/api/contact`) sendet E-Mails über Gmail SMTP (Nodemailer).
- Der Health-Check-Endpunkt `/api/health` gibt `{ ok: true }` zurück.
- Der Prozess wird von **PM2** als `arkvyn-backend` überwacht und automatisch neugestartet.

### Umgebungsvariablen (Backend)
Die Datei `backend/.env` muss auf dem Server manuell angelegt werden und **darf nicht ins Repository**:

```
GMAIL_USER=deine@gmail.com
GMAIL_APP_PASSWORD=dein-app-passwort
```

---

## Lokale Entwicklung

```bash
# 1. Abhängigkeiten installieren
npm install
cd backend && npm install && cd ..

# 2. Backend starten (Port 3001)
cd backend && node MailService.js

# 3. Frontend-Dev-Server starten (Port 5173)
npm run dev
```

Der Frontend-Dev-Server erwartet das Backend unter `http://localhost:5173` CORS ist dafür bereits konfiguriert.

---

## Deployment auf dem Server

### Voraussetzungen (einmalig)
Auf dem Hetzner-VPS müssen folgende Dinge vorhanden sein:
- Node.js & npm
- PM2 (`npm install -g pm2`)
- Nginx
- Git & SSH-Schlüssel für den GitHub-Zugriff
- `backend/.env` mit den Gmail-Credentials

### Änderungen deployen

**1. Änderungen lokal committen und pushen:**

```bash
git add .
git commit -m "Beschreibung der Änderung"
git push origin main
```

**2. Auf dem Server deployen:**

Per SSH auf den Server verbinden und das Deploy-Skript ausführen:

```bash
ssh root@178.104.24.155
cd /var/www/arkvyn
bash deploy.sh
```

Das Skript führt automatisch folgende Schritte aus:
1. `git pull` aktuellen Code vom Repository holen
2. `npm ci` Frontend-Abhängigkeiten installieren
3. `npm run build` TypeScript kompilieren & Vite-Build erstellen
4. `npm ci --omit=dev` Backend-Abhängigkeiten installieren
5. PM2 Backend neustarten (`pm2 startOrRestart`)
6. `sudo systemctl reload nginx` Nginx neu laden

### Nützliche Server-Befehle

```bash
# PM2 Status & Logs
pm2 list
pm2 logs arkvyn-backend
pm2 restart arkvyn-backend

# Nginx Status
sudo systemctl status nginx
sudo nginx -t          # Konfiguration testen

# Backend Health-Check
curl http://127.0.0.1:3001/api/health
```
