#!/bin/bash
# deploy.sh – Wird auf dem Hetzner Server ausgeführt
# Einmalig ausführbar machen: chmod +x deploy.sh

set -e

APP_DIR="/var/www/arkvyn"
REPO="git@github.com:TimothieMT/Arkvyn.git"

echo "==> Repo klonen / aktualisieren..."
if [ -d "$APP_DIR/.git" ]; then
  cd "$APP_DIR" && git pull
else
  git clone "$REPO" "$APP_DIR"
  cd "$APP_DIR"
fi

echo "==> Frontend-Abhängigkeiten installieren & bauen..."
npm ci
npm run build

echo "==> Backend-Abhängigkeiten installieren..."
cd "$APP_DIR/backend"
npm ci --omit=dev

echo "==> Nginx-Konfiguration aktualisieren..."
cp "$APP_DIR/nginx.conf" /etc/nginx/sites-enabled/arkvyn
nginx -t

echo "==> .env Datei prüfen..."
if [ ! -f "$APP_DIR/backend/.env" ]; then
  echo "⚠️  WARNUNG: $APP_DIR/backend/.env fehlt! GMAIL_USER und GMAIL_APP_PASSWORD müssen gesetzt sein."
  echo "   Erstelle die Datei manuell: nano $APP_DIR/backend/.env"
fi

echo "==> PM2 Backend starten / neustarten..."
cd "$APP_DIR"
pm2 startOrRestart ecosystem.config.cjs --env production
pm2 save

echo "==> PM2 Status:"
pm2 list

echo "==> Backend Health-Check..."
sleep 2
curl -sf http://127.0.0.1:3001/api/health && echo " ✅ Backend erreichbar" || echo " ❌ Backend NICHT erreichbar – prüfe: pm2 logs arkvyn-backend"

echo "==> Nginx neu laden..."
sudo systemctl reload nginx

echo ""
echo "✅ Deployment abgeschlossen!"
