import Box from '@mui/material/Box'
import ServicePage from './ServicePage'

export default function BackendEntwicklung() {
  return (
    <ServicePage
      metaTitle="Backend-Entwicklung & Datenarchitektur | Arkvyn – Tim Tolk"
      metaDescription="Robuste Backend-Systeme mit Java, Go und Node.js – Datenbankdesign, REST-APIs, ETL-Pipelines und skalierbare Architekturen vom Freelancer. Deutschlandweit remote, vor Ort in Lübeck & Hamburg."
      canonical="https://arkvyn.de/backend-entwicklung"
      eyebrow="Backend & Datenarchitektur"
      h1={<>Backend-Entwicklung, die <Box component="span" sx={{ color: 'primary.main' }}>skaliert</Box> – von der API bis zur Datenbank</>}
      intro="Die beste Benutzeroberfläche ist nutzlos, wenn das Backend dahinter schwächelt. Ich entwickle robuste Server-Systeme, saubere Datenbankstrukturen und zuverlässige APIs – mit dem Fokus auf Wartbarkeit, Leistung und langfristige Erweiterbarkeit."
      serviceName="Backend-Entwicklung & Datenarchitektur"
      serviceDescription="Backend-Entwicklung mit Java, Go, Python und Node.js – REST-APIs, Datenbankdesign (PostgreSQL, MongoDB), ETL-Pipelines und skalierbare Architekturen für Unternehmen deutschlandweit."
      priceText="Backend-Projekte kalkuliere ich nach Aufwand ab 90 €/Std. Für klar abgegrenzte Backend-Komponenten (z. B. eine API oder ein Datenbankmodell) erstelle ich gerne ein Festpreisangebot."
      relatedLinks={[
        { to: '/full-stack-entwicklung', label: 'Full-Stack-Entwicklung' },
        { to: '/api-integration', label: 'API-Integration' },
      ]}
      sections={[
        {
          h2: 'Warum Backend-Qualität über den Projekterfolg entscheidet',
          paragraphs: [
            'Ein schlecht entworfenes Backend ist wie ein schlechtes Fundament: Anfangs fällt es kaum auf, aber mit jeder Erweiterung wird es teurer. Fehler in der Datenmodellierung, fehlende Indizes, unnötige Datenbankabfragen oder monolithische Strukturen, die jede Änderung zur Großbaustelle machen – das sind Probleme, die ich aus echten Projekten kenne und gezielt vermeide.',
            'Ich entwerfe Backend-Systeme mit Blick auf den Betrieb: Wie sieht das System aus, wenn der Traffic sich verdreifacht? Was passiert, wenn ein Dienst ausfällt? Wie schnell kann ein neues Teammitglied einsteigen? Diese Fragen beantwortet gute Architektur, bevor sie zum Problem werden.',
          ],
        },
        {
          h2: 'Leistungen im Backend-Bereich',
          paragraphs: [
            'Je nach Projektphase und Anforderung unterstütze ich in folgenden Bereichen:',
          ],
          bullets: [
            'REST-API-Design und -Entwicklung mit OpenAPI-Spezifikation',
            'Datenbankdesign und -modellierung (PostgreSQL, MongoDB, Redis)',
            'ETL-Pipelines und Datenimporte aus Drittsystemen',
            'Performance-Optimierung: Query-Analyse, Indizes, Caching-Strategien',
            'Authentifizierung und Autorisierung: JWT, OAuth2, Keycloak',
            'Asynchrone Verarbeitung mit Message Queues und Hintergrundprozessen',
          ],
        },
        {
          h2: 'Technologien und Sprachauswahl',
          paragraphs: [
            'Die Wahl der Backend-Sprache hängt vom Anwendungsfall ab. Für APIs und schnelle Iterationen bevorzuge ich Node.js (TypeScript) oder Go – beide liefern hohe Performance bei überschaubarer Komplexität. Für bestehende Java-Systeme oder enterprise-nahe Anforderungen arbeite ich mit Spring Boot.',
            'Bei Datenbanken setze ich primär auf PostgreSQL – zuverlässig, leistungsstark und gut geeignet für relationale wie semi-relationale Daten. MongoDB kommt dort zum Einsatz, wo flexible Schemas echten Vorteil bringen. Redis ergänze ich für Caching und Session-Verwaltung.',
          ],
        },
        {
          h2: 'Referenz: Backend-Erfahrung aus Produktionssystemen',
          paragraphs: [
            'Ich habe Backend-Systeme in verschiedenen Kontexten entwickelt: als Teil einer großen Agentur mit über 750 Kunden, bei einem cloudbasierten Logistiksystem mit komplexem Datenbankschema und als Senior Developer in der Entwicklung eines LLM-basierten KI-Produkts – von der Architektur bis zur Qualitätssicherung unter realen Lastbedingungen.',
          ],
        },
      ]}
    />
  )
}
