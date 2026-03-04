module.exports = {
  apps: [
    {
      name: 'arkvyn-backend',
      script: './backend/MailService.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '200M',
      env_file: './backend/.env',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
        // GMAIL_USER und GMAIL_APP_PASSWORD werden aus backend/.env geladen
        // Falls env_file nicht greift: Werte hier eintragen (nur auf dem Server!)
      },
    },
  ],
};
