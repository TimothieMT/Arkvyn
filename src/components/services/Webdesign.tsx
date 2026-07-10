import Box from '@mui/material/Box'
import ServicePage from './ServicePage'

export default function Webdesign() {
  return (
    <ServicePage
      metaTitle="Webdesign & Webentwicklung – modern, schnell, SEO-stark | Arkvyn"
      metaDescription="Professionelles Webdesign vom Entwickler: individuelle Websites mit React & TypeScript statt Baukasten. Schnelle Ladezeiten, SEO-Grundlagen, responsives Design. Deutschlandweit remote, vor Ort in Lübeck & Hamburg."
      canonical="https://arkvyn.de/webdesign"
      eyebrow="Webdesign & Webentwicklung"
      h1={<>Webdesign, das <Box component="span" sx={{ color: 'primary.main' }}>verkauft</Box> – nicht nur gut aussieht</>}
      intro="Eine Website ist Ihr wichtigster Vertriebsmitarbeiter: rund um die Uhr erreichbar, deutschlandweit sichtbar. Ich entwickle individuelle Websites mit moderner Technik – handgeschrieben statt aus dem Baukasten, mit Fokus auf Ladezeit, Suchmaschinen und Nutzerführung."
      serviceName="Webdesign & Webentwicklung"
      serviceDescription="Individuelles Webdesign und Webentwicklung mit React und TypeScript – responsive Websites mit schnellen Ladezeiten und SEO-Grundlagen für Unternehmen in ganz Deutschland."
      priceText="Eine professionelle Landing Page gibt es ab 1.200 € zum Festpreis, eine vollwertige Business Website ab 2.800 €. Individuelle Webanwendungen kalkuliere ich transparent nach Aufwand ab 90 €/Std."
      relatedLinks={[
        { to: '/homepage-erstellen-lassen', label: 'Homepage erstellen lassen' },
        { to: '/ki-integration', label: 'KI-Integration & LLM-Entwicklung' },
      ]}
      sections={[
        {
          h2: 'Was professionelles Webdesign heute leisten muss',
          paragraphs: [
            'Gutes Webdesign ist mehr als eine hübsche Oberfläche. Ihre Website muss auf dem Smartphone genauso überzeugen wie auf dem Desktop, in unter zwei Sekunden laden und Besucher ohne Umwege zur Kontaktaufnahme führen. Und sie muss von Google verstanden werden – sonst findet sie niemand.',
            'Deshalb denke ich Design und Technik zusammen: Jede Website, die ich entwickle, erfüllt die Core Web Vitals (Googles Messwerte für Ladezeit und Stabilität), ist barrierearm nach gängigen Standards und bringt saubere SEO-Grundlagen mit – von der Überschriften-Struktur über strukturierte Daten bis zur Sitemap.',
          ],
          bullets: [
            'Responsives Design – optimiert für Smartphone, Tablet und Desktop',
            'Schnelle Ladezeiten und gute Core Web Vitals ab dem ersten Tag',
            'SEO-Grundlagen: Meta-Tags, strukturierte Daten, saubere Semantik',
            'Barrierearme Umsetzung mit Tastaturbedienung und Screenreader-Unterstützung',
            'DSGVO-bewusste Umsetzung, Hosting in Deutschland möglich',
          ],
        },
        {
          h2: 'Individuell entwickelt statt Baukasten',
          paragraphs: [
            'Baukasten-Systeme und Massen-Templates sind schnell eingerichtet, stoßen aber genauso schnell an Grenzen: träge Ladezeiten durch überflüssigen Code, austauschbare Optik und laufende Gebühren für eine Website, die Ihnen nie ganz gehört.',
            'Ich entwickle Ihre Website von Hand mit React und TypeScript – denselben Technologien, mit denen auch große Plattformen gebaut werden. Das Ergebnis: Sie erhalten den vollständigen Quellcode, die Seite lädt schnell, lässt sich beliebig erweitern und wächst mit Ihrem Unternehmen mit – vom Onepager bis zur Webanwendung mit eigenem Backend.',
          ],
        },
        {
          h2: 'Erfahrung aus Agentur- und Produktentwicklung',
          paragraphs: [
            'Mein Handwerk habe ich nicht nur in eigenen Projekten gelernt: Als Entwickler einer der großen Full-Service-Internetagenturen im deutschsprachigen Raum (über 750 Kunden aus Online-Marketing und E-Commerce) habe ich Frontends nach Design-Vorgaben umgesetzt, API-Schnittstellen zu Drittsystemen angebunden und eigene Softwarelösungen entwickelt.',
            'Dazu kommt Produkterfahrung aus der Logistik-Software und aktuelle Projektarbeit im KI-Umfeld – Ihr Vorteil: Ihre Website ist bei mir technisch in denselben Händen wie ein Softwareprodukt.',
          ],
        },
        {
          h2: 'So läuft Ihr Webdesign-Projekt ab',
          paragraphs: [
            'Der Ablauf ist bewusst schlank und funktioniert vollständig remote – deutschlandweit. Auf Wunsch treffen wir uns persönlich in Lübeck oder Hamburg.',
          ],
          bullets: [
            'Kostenloses Erstgespräch: Ziele, Zielgruppe und Umfang klären',
            'Konzept & Struktur: Seitenaufbau, Inhalte und Design-Richtung',
            'Design & Entwicklung: Umsetzung mit Zwischenständen zum Mitreden',
            'Feedback & Revisionen: je nach Paket zwei bis drei Runden inklusive',
            'Launch & Übergabe: Deployment, Einweisung und Quellcode-Übergabe',
          ],
        },
      ]}
    />
  )
}
