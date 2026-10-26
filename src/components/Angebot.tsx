import { Link } from 'react-router-dom'
import Section from './ui/Section'

type Tone = 'card' | 'primary' | 'secondary' | 'subtle' | 'ink'

const services: { num: string; title: string; desc: string; to: string; tone: Tone }[] = [
  {
    num: '01',
    title: 'Webdesign & Webentwicklung',
    desc: 'Ich entwickle Websites, die zu Ihrem Angebot passen von der klaren Landingpage bis zur umfangreichen Webanwendung.',
    to: '/webdesign',
    tone: 'card',
  },
  {
    num: '02',
    title: 'Full-Stack-Entwicklung',
    desc: 'Webanwendungen mit React, TypeScript und Node.js vom Frontend bis zur API und zum Backend.',
    to: '/full-stack-entwicklung',
    tone: 'primary',
  },
  {
    num: '03',
    title: 'Backend & Datenarchitektur',
    desc: 'Saubere Backend-Systeme mit Java, Go, Python oder Node.js, inklusive Datenbanken und Datenpipelines.',
    to: '/backend-entwicklung',
    tone: 'secondary',
  },
  {
    num: '04',
    title: 'KI & Automatisierung',
    desc: 'Ich integriere Sprachmodelle in bestehende Anwendungen und automatisiere Abläufe, Datenextraktion und Matching.',
    to: '/ki-integration',
    tone: 'subtle',
  },
  {
    num: '05',
    title: 'API-Integration',
    desc: 'Ich verbinde Ihre Systeme zum Beispiel Shopify, Weclapp, Billbee, Keycloak, Mailjet oder Google.',
    to: '/api-integration',
    tone: 'secondary',
  },
  {
    num: '06',
    title: 'DevOps & Infrastruktur',
    desc: 'Ich kümmere mich um Deployment und Hosting mit Docker, Kubernetes und Hetzner sowie um Ihre CI/CD-Pipeline.',
    to: '/devops-infrastruktur',
    tone: 'subtle',
  },
  {
    num: '07',
    title: 'IT-Beratung',
    desc: 'Praktische IT-Beratung von der ersten Idee bis zur technischen Umsetzung.',
    to: '/it-beratung',
    tone: 'card',
  },
]

export default function Angebot() {
  return (
    <Section id="angebot" surface="grey" aria-labelledby="angebot-heading">
      <header className="section-head">
        <p className="eyebrow" data-reveal="fade">Leistungen</p>
        <h2 id="angebot-heading" data-reveal="blur">
          Webentwicklung, Apps &amp; KI: was ich für Sie entwickle
        </h2>
        <p className="section-head__lead" data-reveal="fade">
          Sie erzählen mir, was Sie vorhaben. Gemeinsam klären wir, was sinnvoll ist und wie ich es umsetze.
        </p>
      </header>

      <ul className="service-grid">
        {services.map(service => (
          <li key={service.num} className={`service-card service-card--${service.tone}`} data-reveal="lift">
            <span className="service-card__num">{service.num}</span>
            <div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <Link to={service.to} className="service-card__link">
                Mehr erfahren<span className="sr-only"> über {service.title}</span>
                <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </li>
        ))}
        <li className="service-card service-card--ink" data-reveal="lift">
          <span className="service-card__num">08</span>
          <div>
            <h3>Etwas anderes im Kopf?</h3>
            <p>Erzählen Sie mir von Ihrem Vorhaben. Im kostenlosen Erstgespräch klären wir, wie ich helfen kann.</p>
            <a href="#kontakt" className="service-card__link">
              Erstgespräch anfragen
              <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </li>
      </ul>
    </Section>
  )
}
