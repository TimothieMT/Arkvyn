export default function Angebot() {
  return (
    <section id="angebot" className="section section--angebot" aria-label="Leistungen">
      <div className="section__header">
        <span className="section__label">Leistungen</span>
        <h2>Was ich für Sie <span className="accent">entwickle</span></h2>
        <p>Individuelle Lösungen für Ihre digitalen Herausforderungen – von der Idee bis zur Umsetzung.</p>
      </div>
      <div className="grid grid--3">
        <div className="card">
          <span className="card__num">01</span>
          <span className="card__icon">⚙️</span>
          <h3>Full-Stack Entwicklung</h3>
          <p>
            Moderne Webanwendungen mit React, TypeScript und Node.js –
            von responsiven Frontends bis zu skalierbaren REST-APIs und Backend-Services.
          </p>
        </div>
        <div className="card">
          <span className="card__num">02</span>
          <span className="card__icon">🗄️</span>
          <h3>Backend & Datenarchitektur</h3>
          <p>
            Robuste Backend-Systeme mit Java, Go, Python oder Node.js –
            inklusive Datenbankdesign (PostgreSQL, MongoDB) und ETL-Pipelines.
          </p>
        </div>
        <div className="card">
          <span className="card__num">03</span>
          <span className="card__icon">🤖</span>
          <h3>AI & Automatisierung</h3>
          <p>
            Integration von LLMs in Backend und Frontend,
            automatisierte Workflows, Datenextraktion und intelligente Matching-Systeme.
          </p>
        </div>
        <div className="card">
          <span className="card__num">04</span>
          <span className="card__icon">🔌</span>
          <h3>API-Integration</h3>
          <p>
            Anbindung komplexer Drittanbieter-Systeme wie Shopify, Weclapp, Billbee,
            Keycloak, Mailjet, Google und mehr.
          </p>
        </div>
        <div className="card">
          <span className="card__num">05</span>
          <span className="card__icon">🐳</span>
          <h3>DevOps & Infrastruktur</h3>
          <p>
            Deployment und Hosting mit Docker, Kubernetes und Hetzner –
            CI/CD mit GitLab, TeamCity und Bitbucket.
          </p>
        </div>
        <div className="card">
          <span className="card__num">06</span>
          <span className="card__icon">🔧</span>
          <h3>IT-Beratung</h3>
          <p>
            Strategische Beratung für Digitalisierungsprojekte –
            von der Konzeption bis zur erfolgreichen Umsetzung.
          </p>
        </div>
      </div>
    </section>
  )
}
