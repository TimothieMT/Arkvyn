import Box from '@mui/material/Box'
import ServicePage from './ServicePage'

export default function ApiIntegration() {
  return (
    <ServicePage
      metaTitle="API-Integration & Drittanbieter-Anbindung | Arkvyn Tim Tolk"
      metaDescription="API-Integration vom Entwickler: Shopify, Weclapp, Billbee, Keycloak, Mailjet, Google und mehr. Zuverlässige Anbindung komplexer Drittsysteme für Unternehmen deutschlandweit remote."
      canonical="https://arkvyn.de/api-integration"
      eyebrow="API-Integration"
      h1={<>API-Integration - Ihre Systeme <Box component="span" sx={{ color: 'primary.main' }}>sprechen miteinander</Box></>}
      intro="Moderne Unternehmens-IT besteht aus Dutzenden von Diensten: ein Shopsystem hier, eine Warenwirtschaft dort, ein CRM, eine Buchhaltung. Ich verbinde diese Systeme über Schnittstellen so dass Daten automatisch fließen, statt manuell übertragen zu werden."
      serviceName="API-Integration & Drittanbieter-Anbindung"
      serviceDescription="API-Integration für Unternehmen: Anbindung von Shopify, Weclapp, Billbee, Keycloak, Mailjet, Google und weiteren Drittsystemen zuverlässig, wartbar und dokumentiert. Deutschlandweit."
      relatedLinks={[
        { to: '/backend-entwicklung', label: 'Backend & Datenarchitektur' },
        { to: '/full-stack-entwicklung', label: 'Full-Stack-Entwicklung' },
      ]}
      sections={[
        {
          h2: 'Warum API-Integrationen scheitern und wie ich es besser mache',
          paragraphs: [
            'API-Integrationen klingen nach Standardarbeit, sind in der Praxis aber oft knifflig: undokumentierte Eigenheiten des Anbieters, Rate-Limits, Versionierungsbrüche, fehlerhafte Datenformate oder Authentifizierungsabläufe, die sich je nach Umgebung anders verhalten.',
            'Ich bringe Erfahrung aus einer Vielzahl von Drittanbieter-Anbindungen mit aus der Agenturarbeit, aus Produktentwicklung und aus Freelance-Projekten. Das bedeutet: weniger Trial-and-Error, sauberere Fehlerbehandlung und eine Integration, die auch dann noch zuverlässig läuft, wenn der Anbieter seine API leise ändert.',
          ],
        },
        {
          h2: 'Systeme, mit denen ich gearbeitet habe',
          paragraphs: [
            'Unter anderem habe ich folgende Systeme angebunden, teils bidirektional, teils als Datenpipeline oder als Event-basierte Webhooks:',
          ],
          bullets: [
            'E-Commerce: Shopify, WooCommerce, Billbee (Order-Management, Lagerbestand)',
            'ERP & Warenwirtschaft: Weclapp, Lexoffice',
            'Authentifizierung: Keycloak (SSO, OAuth2, OIDC), JWT-basierte Eigenentwicklungen',
            'Kommunikation: Mailjet, SendGrid, Twilio',
            'Google: Maps API, Places API, Sheets API, Drive API',
            'Zahlungen: Stripe, PayPal',
            'Interne Systeme: REST-APIs, GraphQL-Endpunkte, SOAP-Schnittstellen',
          ],
        },
        {
          h2: 'Vom Proof of Concept zur stabilen Integration',
          paragraphs: [
            'Ich liefere keine Wegwerf-Integrationen. Jede Anbindung bekommt eine saubere Fehlerbehandlung, Logging und, wo sinnvoll, eine Retry-Logik für temporäre Ausfälle. Die Integration wird dokumentiert nicht für die Schublade, sondern so, dass Ihr Team sie später nachvollziehen und erweitern kann.',
            'Bei größeren Integrationsvorhaben empfehle ich einen strukturierten Ansatz: Zuerst Datenflüsse und Grenzfälle definieren, dann einen Prototyp mit einem System, dann schrittweise erweitern. So entstehen keine Überraschungen kurz vor dem Launch.',
          ],
        },
        {
          h2: 'Eigene APIs entwerfen und dokumentieren',
          paragraphs: [
            'Neben der Anbindung fremder Systeme entwerfe ich auch eigene APIs: REST-Schnittstellen nach OpenAPI-Standard, mit Authentifizierung, Versionierung und einer Dokumentation, die Ihren Kunden oder Partnern die Integration erleichtert. Eine gut entworfene API ist ein Produkt und sollte wie eines behandelt werden.',
          ],
        },
      ]}
    />
  )
}
