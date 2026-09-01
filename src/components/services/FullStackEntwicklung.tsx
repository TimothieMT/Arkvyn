import Box from '@mui/material/Box'
import ServicePage from './ServicePage'

export default function FullStackEntwicklung() {
  return (
    <ServicePage
      metaTitle="Full-Stack-Entwicklung mit React & Node.js | Arkvyn"
      metaDescription="Full-Stack-Webentwicklung mit React-Frontends, Node.js-APIs und skalierbaren Backends für Start-ups und Unternehmen in ganz Deutschland."
      canonical="https://arkvyn.de/full-stack-entwicklung"
      eyebrow="Full-Stack-Entwicklung"
      h1={<>Full-Stack-Entwicklung: Frontend, Backend und API <Box component="span" sx={{ color: 'primary.main' }}>aus einer Hand</Box></>}
      intro="Viele Projekte scheitern nicht an der Idee, sondern an der Schnittstelle: zwischen Design und Technik, zwischen Frontend und Backend, zwischen Anforderung und Umsetzung. Als Full-Stack Entwickler schließe ich diese Lücken von der React-Oberfläche bis zur Datenbankabfrage, alles aus einer Hand."
      serviceName="Full-Stack Webentwicklung"
      serviceDescription="Full-Stack-Entwicklung mit React, TypeScript und Node.js skalierbare Webanwendungen von der UI bis zur Datenbank, REST-APIs und Backend-Services für Start-ups und Unternehmen deutschlandweit."
      priceText="Full-Stack-Projekte kalkuliere ich transparent nach Aufwand ab 90 €/Std. Für klar umrissene Webanwendungen erstelle ich gerne ein Festpreisangebot nach einem kostenlosen Erstgespräch."
      relatedLinks={[
        { to: '/webdesign', label: 'Webdesign & Webentwicklung' },
        { to: '/backend-entwicklung', label: 'Backend & Datenarchitektur' },
      ]}
      sections={[
        {
          h2: 'Was Full-Stack-Entwicklung konkret bedeutet',
          paragraphs: [
            'Full-Stack bedeutet: Eine Person oder ein kleines Team beherrscht den gesamten technischen Stapel von der Benutzeroberfläche im Browser bis zur Datenbank auf dem Server. Das verkürzt Abstimmungswege, erhöht die Konsistenz und macht Ihre Anwendung wartbarer.',
            'In der Praxis umfasst das: responsives Frontend mit React und TypeScript, RESTful oder GraphQL-APIs mit Node.js oder Go, Datenbankanbindung (PostgreSQL, MongoDB), Authentifizierung, Deployment und Monitoring. Kein Übergabeproblem zwischen Frontend- und Backend-Teams weil es ein Team gibt.',
          ],
        },
        {
          h2: 'Technologie-Stack im Überblick',
          paragraphs: [
            'Ich wähle Technologien nach Anforderung, nicht nach Gewohnheit. Der folgende Stack hat sich in Produktionsprojekten bewährt:',
          ],
          bullets: [
            'Frontend: React 18/19, TypeScript, Vite, MUI, TailwindCSS, React Router',
            'Backend: Node.js, Express, Go, Java (Spring Boot) je nach Anforderung',
            'Datenbanken: PostgreSQL, MongoDB, Redis für Caching',
            'APIs: RESTful, GraphQL, WebSockets für Echtzeit-Funktionen',
            'Authentifizierung: JWT, OAuth2, Keycloak, Session-Management',
            'Testing: Unit-Tests, Integrationstests, E2E mit Playwright',
          ],
        },
        {
          h2: 'Von der Anforderung zur produktionsreifen Anwendung',
          paragraphs: [
            'Ich begleite Projekte von der ersten Konzeptskizze bis zum Go-live und darüber hinaus. Das bedeutet: Anforderungsanalyse und Architekturentscheidungen zu Beginn, iterative Entwicklung mit frühen Demo-Versionen, Code-Reviews und automatisierte Tests als Standard, kein Wegwerfcode.',
            'Das Ergebnis ist eine Anwendung, die nicht nur beim Launch funktioniert, sondern auch in sechs Monaten noch wartbar und erweiterbar ist von Ihrem Team oder von mir.',
          ],
        },
        {
          h2: 'Referenz: Produkterfahrung aus echten Projekten',
          paragraphs: [
            'Meine Full-Stack-Erfahrung kommt nicht nur aus Freelance-Projekten. Als Entwickler einer großen Full-Service-Internetagentur (über 750 Kunden) habe ich Frontends nach Design-Vorgaben umgesetzt, API-Schnittstellen zu Drittsystemen angebunden und eigene Backendsysteme entwickelt.',
            'Dazu kommt die Entwicklung eines cloudbasierten Logistiksystems mit Java-Backend und React-Frontend sowie aktuelle Produkterfahrung in der KI-Entwicklung. Diese Breite kommt Ihrem Projekt zugute: Ich kenne die Fallstricke auf jeder Ebene des Stacks.',
          ],
        },
      ]}
    />
  )
}
