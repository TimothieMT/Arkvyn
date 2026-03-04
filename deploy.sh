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

echo "==> Frontend-Build nach /var/www/arkvyn/dist bereitstellen..."
# Nginx zeigt auf /var/www/arkvyn/dist (oder passe den Nginx-Root an)

echo "==> PM2 Backend starten / neustarten..."
cd "$APP_DIR"
pm2 startOrRestart ecosystem.config.cjs --env production
pm2 save

echo "==> Nginx neu laden..."
sudo systemctl reload nginx

echo ""
echo "✅ Deployment abgeschlossen!"
