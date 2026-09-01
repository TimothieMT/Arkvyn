import Box from '@mui/material/Box'
import ServicePage from './ServicePage'

export default function ItBeratung() {
  return (
    <ServicePage
      metaTitle="IT-Beratung & Digitalisierung für Unternehmen | Arkvyn – Tim Tolk"
      metaDescription="IT-Beratung vom erfahrenen Entwickler: Technologieauswahl, Architekturentscheidungen, Digitalisierungsstrategie und Make-or-Buy-Analysen. Ohne Buzzwords, mit konkreten Empfehlungen – deutschlandweit."
      canonical="https://arkvyn.de/it-beratung"
      eyebrow="IT-Beratung"
      h1={<>IT-Beratung von jemandem, der <Box component="span" sx={{ color: 'primary.main' }}>selbst baut</Box></>}
      intro="Viele IT-Berater empfehlen Lösungen, die sie selbst nie umgesetzt haben. Ich berate aus der Praxis: Als Entwickler mit über sechs Jahren Erfahrung in Agentur, Produktentwicklung und KI-Projekten weiß ich, was Empfehlungen in der Realität bedeuten – technisch, zeitlich und finanziell."
      serviceName="IT-Beratung & Digitalisierungsstrategie"
      serviceDescription="IT-Beratung für Unternehmen: Technologieauswahl, Softwarearchitektur, Digitalisierungsstrategie und Make-or-Buy-Analyse – praxisnah, von einem Entwickler der selbst umsetzt. Deutschlandweit."
      relatedLinks={[
        { to: '/full-stack-entwicklung', label: 'Full-Stack-Entwicklung' },
        { to: '/ki-integration', label: 'KI-Integration & Automatisierung' },
      ]}
      sections={[
        {
          h2: 'Beratung, die zur Umsetzung führt',
          paragraphs: [
            'IT-Beratung ist dann wertvoll, wenn sie konkret ist: nicht „Sie brauchen eine Cloud-Strategie", sondern „für Ihren Anwendungsfall empfehle ich X statt Y, weil Z – und so würde die Migration in drei Schritten aussehen". Genau diese Art von Beratung biete ich.',
            'Ich unterstütze Unternehmen dabei, die richtigen technischen Entscheidungen zu treffen – bevor teure Fehler passieren: falsche Technologiewahl, unnötige Eigenentwicklung, überdimensionierte Infrastruktur oder unterschätzte Integrationskomplexität.',
          ],
        },
        {
          h2: 'Typische Beratungsthemen',
          paragraphs: [],
          bullets: [
            'Make-or-Buy: Wann lohnt sich eine Eigenentwicklung – wann ist ein fertiges SaaS-Tool die bessere Wahl?',
            'Technologieauswahl: Welches Framework, welche Datenbank, welcher Cloud-Anbieter passt zu Ihren Anforderungen?',
            'Architekturreview: Wo sind die Schwachstellen Ihres bestehenden Systems und wie behebt man sie pragmatisch?',
            'Digitalisierungsstrategie: Welche Prozesse lassen sich automatisieren – und welche sollten es besser nicht?',
            'KI-Readiness: Welche Ihrer Aufgaben eignen sich für KI-Unterstützung, was ist unrealistisch?',
            'Team- und Prozessberatung: Wie strukturiere ich ein kleines Entwicklungsteam, welche Tools helfen wirklich?',
          ],
        },
        {
          h2: 'Beratung ohne Interessenkonflikt',
          paragraphs: [
            'Als unabhängiger Freelancer habe ich keinen Anreiz, eine bestimmte Technologie oder einen bestimmten Anbieter zu empfehlen. Meine Empfehlung basiert auf Ihren Anforderungen – nicht auf Herstellerpartnerschaften oder vorkonfigurierten Slide-Decks.',
            'Wenn die beste Lösung für Ihr Problem ein bestehendes Tool ist, sage ich das. Wenn eine Eigenentwicklung sinnvoller ist, sage ich das ebenfalls – und kann die Umsetzung auf Wunsch direkt übernehmen.',
          ],
        },
        {
          h2: 'Formate: von der Stunde bis zum laufenden Mandat',
          paragraphs: [
            'IT-Beratung muss nicht aufwändig sein. Oft reicht ein gezieltes Gespräch von zwei Stunden, um die wichtigsten Weichen richtig zu stellen. Für laufende Projekte biete ich auch ein retainer-basiertes Modell an: feste Stunden pro Monat, flexibel abrufbar für Fragen, Reviews und Entscheidungsunterstützung.',
          ],
        },
      ]}
    />
  )
}
