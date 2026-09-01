import Box from '@mui/material/Box'
import ServicePage from './ServicePage'

export default function KiIntegration() {
  return (
    <ServicePage
      metaTitle="KI-Integration & LLM-Entwicklung für Unternehmen | Arkvyn"
      metaDescription="KI-Integration vom Entwickler: LLMs in bestehende Systeme integrieren, Workflows automatisieren, Dokumente auswerten. Von der Beratung über den Prototyp bis zum fertigen KI-Produkt deutschlandweit."
      canonical="https://arkvyn.de/ki-integration"
      eyebrow="KI & Automatisierung"
      h1={<>KI-Integration, die im Alltag <Box component="span" sx={{ color: 'primary.main' }}>wirklich arbeitet</Box></>}
      intro="Sprachmodelle wie GPT oder Claude können Texte verstehen, Daten extrahieren und Routineaufgaben übernehmen wenn man sie richtig in Ihre Systeme integriert. Genau das ist mein Spezialgebiet: KI-Funktionen, die in Ihren bestehenden Abläufen echten Nutzen stiften, statt als Spielerei zu enden."
      serviceName="KI-Integration & LLM-Entwicklung"
      serviceDescription="Integration von Large Language Models (LLMs) in Unternehmens-Software: Workflow-Automatisierung, Dokumentenanalyse, Chatbots und KI-Produktentwicklung von der Architektur bis zum MVP. Deutschlandweit."
      priceText="KI- und LLM-Projekte kalkuliere ich ab 110 €/Std. Für den Einstieg empfehle ich einen kompakten Proof of Concept: ein klar umrissener Anwendungsfall, umgesetzt in wenigen Tagen so sehen Sie den Nutzen, bevor Sie groß investieren."
      relatedLinks={[
        { to: '/webdesign', label: 'Webdesign & Webentwicklung' },
        { to: '/homepage-erstellen-lassen', label: 'Homepage erstellen lassen' },
      ]}
      sections={[
        {
          h2: 'Was KI-Integration konkret bedeutet',
          paragraphs: [
            'KI-Integration heißt: Ein Sprachmodell wird über Schnittstellen (APIs) mit Ihren vorhandenen Systemen verbunden Ihrem CRM, Ihrer Warenwirtschaft, Ihrem E-Mail-Postfach oder Ihrer Dokumentenablage. Das Modell bekommt Ihre Daten und Ihre Regeln, nicht umgekehrt.',
            'Typische Bausteine sind die Anbindung von LLM-APIs an Backend-Systeme, Wissensdatenbanken mit eigenen Firmendaten (RAG), automatisierte Workflows und die strukturierte Extraktion von Informationen aus Dokumenten wie Rechnungen, Verträgen oder Bewerbungen.',
          ],
        },
        {
          h2: 'Typische Anwendungsfälle im Mittelstand',
          paragraphs: [
            'Die wertvollsten KI-Projekte sind selten spektakulär sie sparen schlicht jede Woche Stunden an Routinearbeit:',
          ],
          bullets: [
            'Dokumentenanalyse: Rechnungen, Verträge oder Formulare automatisch auslesen und in Ihre Systeme übertragen',
            'E-Mail- und Support-Automatisierung: Anfragen kategorisieren, vorqualifizieren und Antwortentwürfe erstellen',
            'Interne Assistenten: Mitarbeiter fragen in normaler Sprache, die KI antwortet aus Ihren Firmendokumenten',
            'Intelligente Matching-Systeme: Produkte, Kandidaten oder Anfragen automatisch dem richtigen Ziel zuordnen',
            'Content-Pipelines: Produktbeschreibungen, Berichte oder Zusammenfassungen automatisiert erzeugen und prüfen',
          ],
        },
        {
          h2: 'Referenz: KI-Produkt von der Architektur bis zum MVP',
          paragraphs: [
            'Aktuell verantworte ich als Senior Developer für ein Hamburger IT-Beratungsunternehmen die Entwicklung eines LLM-basierten KI-Produkts von der Konzeption der Softwarearchitektur über die Kernfunktionalitäten bis zu Code-Reviews und Qualitätssicherung unter realen Lastbedingungen.',
            'Diese Produkterfahrung fließt direkt in Kundenprojekte ein: Ich weiß nicht nur, was mit LLMs möglich ist, sondern auch, wo die Fallstricke liegen von Halluzinationen über Kostenkontrolle bis zur Frage, wann klassische Software die bessere Lösung ist.',
          ],
        },
        {
          h2: 'Technologie, Datenschutz und Kostenkontrolle',
          paragraphs: [
            'Nicht jedes Modell passt zu jedem Anwendungsfall. Ich wähle Modell und Anbieter nach Ihren Anforderungen aus Leistungsfähigkeit, Kosten pro Anfrage und Datenschutz inklusive. Auf Wunsch mit EU-Hosting oder selbst betriebenen Open-Source-Modellen, damit sensible Daten Ihr Haus nicht verlassen.',
            'Jedes Projekt startet mit einer ehrlichen Machbarkeitseinschätzung: Was automatisierbar ist, automatisiere ich. Wo KI keinen Mehrwert bringt, sage ich Ihnen das bevor Budget fließt.',
          ],
        },
      ]}
    />
  )
}
