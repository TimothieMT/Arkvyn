import Box from '@mui/material/Box'
import ServicePage from './ServicePage'

export default function HomepageErstellen() {
  return (
    <ServicePage
      metaTitle="Homepage erstellen lassen professionell zum Festpreis ab 1.200 € | Arkvyn"
      metaDescription="Homepage erstellen lassen: Festpreis ab 1.200 €, transparente Pakete und voller Quellcode-Besitz für Selbstständige und Unternehmen, deutschlandweit remote."
      canonical="https://arkvyn.de/homepage-erstellen-lassen"
      eyebrow="Homepage erstellen lassen"
      h1={<>Homepage erstellen lassen <Box component="span" sx={{ color: 'primary.main' }}>zum Festpreis</Box>, ohne Überraschungen</>}
      intro="Sie brauchen eine professionelle Homepage, wollen sich aber nicht mit Baukästen, Technik und Kleingedrucktem beschäftigen? Ich übernehme das komplett: von der Struktur über Design und Entwicklung bis zum Livegang zum vorher vereinbarten Festpreis."
      serviceName="Homepage-Erstellung"
      serviceDescription="Professionelle Homepage-Erstellung zum Festpreis Landingpages ab 1.200 €, Business-Websites ab 2.800 €, inklusive responsivem Design, Kontaktformular und SEO-Grundlagen. Deutschlandweit."
      priceText="Die Landingpage (eine Seite, Kontaktformular, SEO-Grundlagen, zwei Revisionsrunden) kostet ab 1.200 € einmalig. Die Business-Website mit 3 5 Seiten, CMS-Anbindung und drei Revisionsrunden gibt es ab 2.800 €. Nicht enthalten sind Texte, Bilder und Hosting dabei berate ich Sie aber gern."
      relatedLinks={[
        { to: '/webdesign', label: 'Webdesign & Webentwicklung' },
        { to: '/ki-integration', label: 'KI-Integration & LLM-Entwicklung' },
      ]}
      sections={[
        {
          h2: 'Was kostet es, eine Homepage erstellen zu lassen?',
          paragraphs: [
            'Die ehrliche Antwort: je nach Anbieter zwischen ein paar hundert und mehreren zehntausend Euro. Damit Sie kalkulieren können, arbeite ich mit transparenten Festpreisen: Eine professionelle Landingpage gibt es bei mir ab 1.200 €, eine vollwertige Unternehmenswebsite mit mehreren Seiten ab 2.800 € einmalig, inklusive Einrichtung, ohne monatliche Baukasten-Gebühren.',
            'Der Preis steht fest, bevor die Arbeit beginnt. Änderungswünsche sind über die enthaltenen Revisionsrunden abgedeckt; was darüber hinausgeht, wird vorher transparent abgestimmt.',
          ],
        },
        {
          h2: 'Das ist in jedem Paket enthalten',
          paragraphs: [
            'Unabhängig vom Paket erhalten Sie eine Website, die technisch auf dem Stand ist, den Google und Ihre Besucher heute erwarten:',
          ],
          bullets: [
            'Responsives Design auf dem Smartphone genauso gut wie am Desktop',
            'Kontaktformular mit Spam-Schutz und DSGVO-bewusster Umsetzung',
            'SEO-Grundlagen: Meta-Tags, strukturierte Daten, Sitemap, schnelle Ladezeiten',
            'Impressum- und Datenschutz-Seiten technisch vorbereitet',
            'Voller Quellcode-Besitz Sie sind nicht an mich oder einen Anbieter gebunden',
          ],
        },
        {
          h2: 'So läuft die Zusammenarbeit ab deutschlandweit remote',
          paragraphs: [
            'Der gesamte Prozess funktioniert ortsunabhängig: Erstgespräch per Video-Call, Abstimmungen per E-Mail oder Telefon, Zwischenstände als Live-Vorschau im Browser. So betreue ich Kunden in ganz Deutschland und treffe Sie auf Wunsch persönlich, wenn Sie in Lübeck, Hamburg oder Umgebung sitzen.',
            'Vom Erstgespräch bis zum Livegang vergehen je nach Umfang und Feedback-Tempo typischerweise zwei bis sechs Wochen. Sie bekommen früh eine klickbare Vorschau und sehen die Website wachsen, statt auf ein Überraschungsergebnis zu warten.',
          ],
        },
        {
          h2: 'Vom Entwickler statt von der Stange',
          paragraphs: [
            'Viele Angebote zum „Homepage erstellen lassen" basieren auf Baukästen oder gekauften Templates. Das sieht anfangs gut aus, rächt sich aber bei Ladezeit, Google-Ranking und jeder späteren Erweiterung.',
            'Bei mir bekommen Sie das Gegenteil: eine von Hand entwickelte Website auf Basis moderner Web-Technologie (React, TypeScript), Erfahrung aus über sechs Jahren Softwareentwicklung darunter Projekte für eine große Internetagentur mit über 750 Kunden und ein cloudbasiertes Logistiksystem und einen direkten Ansprechpartner statt einer Ticket-Warteschlange.',
          ],
        },
      ]}
    />
  )
}
