import Section from './ui/Section'

// Anonymisierte Referenzen aus Festanstellungen bewusst ohne Firmennamen
const referenzen = [
  {
    branche: 'Logistik-Software',
    zeitraum: '2025 2026',
    title: 'Cloudbasiertes Lagerverwaltungssystem',
    desc: 'Weiterentwicklung eines cloudbasierten Lagerverwaltungssystems für ein Software-Unternehmen der Logistikbranche: Konzeption neuer Technologie-Anforderungen für den Cloud-Einsatz, Performance-Optimierung, kundenspezifische Erweiterungen und Automatisierung der Deployments.',
    stack: ['Java', 'PHP', 'Cloud', 'CI/CD'],
  },
  {
    branche: 'Online-Marketing & E-Commerce',
    zeitraum: '2023 2024',
    title: 'Softwarelösungen für eine Full-Service-Internetagentur',
    desc: 'Entwicklung eigener Softwarelösungen für eine der großen Internetagenturen im deutschsprachigen Raum (über 200 Mitarbeiter, mehr als 750 Kunden): grafische Frontend-Umsetzungen, API-Schnittstellen zu Drittsystemen sowie Programmierung von Crawlern und Scrapern.',
    stack: ['JavaScript', 'Frontend', 'PHP', 'REST-APIs'],
  },
  {
    branche: 'IT-Beratung · Hamburg',
    zeitraum: 'seit 2026',
    title: 'KI-Produkt von der Architektur bis zum MVP',
    desc: 'Konzeption der Softwarearchitektur und Entwicklung eines LLM-basierten KI-Produkts als Senior Developer für ein Hamburger IT-Beratungsunternehmen von der Systemarchitektur über die Kernfunktionalitäten bis zu Code-Reviews und Qualitätssicherung.',
    stack: ['AI/LLM', 'Softwarearchitektur', 'Full-Stack'],
  },
]

export default function Referenzen() {
  return (
    <Section id="referenzen" surface="deep" aria-labelledby="referenzen-heading">
      <header className="section-head">
        <p className="eyebrow" data-reveal="fade">Referenzen</p>
        <h2 id="referenzen-heading" data-reveal="blur">Projekterfahrung aus der Praxis</h2>
        <p className="section-head__lead" data-reveal="fade">
          Ausgewählte Projekte aus Festanstellungen und freier Arbeit
          aus Vertraulichkeitsgründen ohne Nennung der Unternehmen.
        </p>
      </header>

      <ul className="project-grid">
        {referenzen.map(ref => (
          <li key={ref.title} className="project" data-reveal="lift">
            <p className="project__meta">
              <span>{ref.branche}</span>
              <span>{ref.zeitraum}</span>
            </p>
            <h3>{ref.title}</h3>
            <p>{ref.desc}</p>
            <ul className="tag-list" aria-label="Technologien">
              {ref.stack.map(tech => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}
