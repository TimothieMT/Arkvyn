import Box from '@mui/material/Box'
import ServicePage from './ServicePage'

export default function DevopsInfrastruktur() {
  return (
    <ServicePage
      metaTitle="DevOps & Infrastruktur – Docker, Kubernetes, CI/CD | Arkvyn"
      metaDescription="DevOps und Infrastruktur vom Freelancer: Docker, Kubernetes, CI/CD-Pipelines mit GitLab und Hetzner-Hosting. Zuverlässige Deployments und automatisierte Workflows für Entwicklungsteams – deutschlandweit."
      canonical="https://arkvyn.de/devops-infrastruktur"
      eyebrow="DevOps & Infrastruktur"
      h1={<>DevOps & Infrastruktur – <Box component="span" sx={{ color: 'primary.main' }}>zuverlässige Deployments</Box>, automatisierte Pipelines</>}
      intro="Code, der nie deployed wird, schafft keinen Wert. Ich sorge dafür, dass Ihre Software zuverlässig, wiederholbar und sicher in Betrieb geht – mit Docker-Containern, automatisierten CI/CD-Pipelines und einer Infrastruktur, die unter Last stabil bleibt."
      serviceName="DevOps & Infrastruktur"
      serviceDescription="DevOps-Beratung und Umsetzung: Docker, Kubernetes, CI/CD-Pipelines mit GitLab und TeamCity, Hosting auf Hetzner und AWS – für Entwicklungsteams und Unternehmen deutschlandweit."
      relatedLinks={[
        { to: '/backend-entwicklung', label: 'Backend & Datenarchitektur' },
        { to: '/full-stack-entwicklung', label: 'Full-Stack Entwicklung' },
      ]}
      sections={[
        {
          h2: 'Von manuellen Deployments zur automatisierten Pipeline',
          paragraphs: [
            'Viele Entwicklungsteams deployen manuell: Code per SSH auf den Server kopieren, Dienste manuell neustart, Finger kreuzen. Das funktioniert – bis es nicht mehr funktioniert. Ein Deployment schlägt fehl, niemand weiß warum, die letzte Backup-Version ist unklar.',
            'Mit einer CI/CD-Pipeline läuft jede Code-Änderung automatisch durch Tests, Build und Deployment. Fehler werden sofort sichtbar, Rollbacks sind in Sekunden durchgeführt, und das Team kann sich auf Entwicklung konzentrieren statt auf Betrieb.',
          ],
        },
        {
          h2: 'Leistungen im DevOps-Bereich',
          bullets: [
            'Docker-Containerisierung bestehender Anwendungen',
            'Kubernetes-Setup und Orchestrierung für skalierbare Services',
            'CI/CD-Pipelines mit GitLab CI, TeamCity oder Bitbucket Pipelines',
            'Infrastruktur auf Hetzner Cloud – kosteneffizient, DSGVO-konform, deutsches Rechenzentrum',
            'Nginx-Konfiguration: Reverse Proxy, SSL, HTTP/2, Caching',
            'Monitoring und Alerting: Logs, Uptime und Performance im Blick',
            'Automatisierte Backups und Disaster-Recovery-Konzepte',
          ],
          paragraphs: [],
        },
        {
          h2: 'Hosting in Deutschland – DSGVO-konform und kosteneffizient',
          paragraphs: [
            'Ich empfehle und betreibe primär Infrastruktur auf Hetzner Cloud – einem deutschen Anbieter mit Rechenzentren in Nürnberg, Falkenstein und Helsinki. Das bedeutet: niedrige Latenz für deutsche Nutzer, DSGVO-konforme Datenhaltung innerhalb der EU und ein Bruchteil der Kosten im Vergleich zu AWS oder Azure bei vergleichbarer Leistung.',
            'Für Projekte mit internationaler Nutzung oder spezifischen Cloud-Anforderungen (S3, CDN, Serverless) integriere ich entsprechende AWS- oder Cloudflare-Dienste gezielt.',
          ],
        },
        {
          h2: 'Praxisbeispiel: Deployment dieser Website',
          paragraphs: [
            'Diese Website selbst läuft auf einem Hetzner VPS: Nginx als Reverse Proxy, PM2 für den Node.js-Backend-Prozess, automatisiertes Deployment per Shell-Script aus dem Git-Repository. Klein, aber ein gutes Beispiel dafür, wie auch einfache Setups sauber und reproduzierbar sein können.',
            'Für komplexere Systeme – mehrere Services, mehrere Umgebungen (Dev/Staging/Prod), Skalierungsanforderungen – baue ich entsprechend robustere Infrastrukturen auf Basis von Kubernetes oder Docker Compose.',
          ],
        },
      ]}
    />
  )
}
