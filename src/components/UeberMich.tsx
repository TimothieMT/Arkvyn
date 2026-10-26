import Section from './ui/Section'

const highlights = [
  'Webentwicklung & Webdesign',
  'Full-Stack- & Backend-Entwicklung',
  'KI-/LLM-Integration',
  'REST-APIs & Microservices',
  'DevOps & Infrastruktur',
]

const credentials = [
  { label: 'Standort', value: 'Lübeck, remote deutschlandweit' },
  { label: 'Erfahrung', value: '6+ Jahre' },
  { label: 'Frontend', value: 'React, TypeScript' },
  { label: 'Backend', value: 'Node.js, Go, Java, Python' },
  { label: 'Datenbanken', value: 'PostgreSQL, MongoDB' },
  { label: 'Infrastruktur', value: 'Docker, Kubernetes, Hetzner' },
  { label: 'Spezialisierung', value: 'KI/LLM, Automatisierung' },
]

export default function UeberMich() {
  return (
    <Section id="ueber-mich" surface="dark" aria-labelledby="ueber-mich-heading">
      <div className="about">
        <div className="about__text">
          <p className="eyebrow" data-reveal="fade">Über mich</p>
          <h2 id="ueber-mich-heading" data-reveal="blur">
            Softwareentwickler aus Lübeck: Wer steckt hinter Arkvyn
          </h2>
          <div className="prose" data-reveal="lift">
            <p>
              Ich bin Tim Tolk, Web- und Softwareentwickler aus Lübeck. Mein Schwerpunkt liegt auf
              datengetriebenen Webanwendungen und digitalen Plattformen.
            </p>
            <p>
              Mit <strong>Arkvyn</strong> verfolge ich ein klares Ziel:
              komplexe technische Herausforderungen in einfache, elegante Lösungen
              zu verwandeln von der Architektur über APIs bis zur Benutzeroberfläche.
            </p>
            <p>
              Mein Stack reicht von React &amp; TypeScript im Frontend über Node.js,
              Java, Go und Python im Backend bis zu PostgreSQL, MongoDB und
              Cloud-Infrastruktur mit Docker &amp; Hetzner. Ich unterstütze Start-ups und Unternehmen
              bei Entwicklung, Automatisierung und IT-Beratung remote in ganz Deutschland sowie
              auf Wunsch vor Ort in Lübeck, Hamburg und Kiel.
            </p>
          </div>
          <ul className="numbered-list">
            {highlights.map((item, i) => (
              <li key={item} data-reveal="lift">
                <span aria-hidden="true">{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <aside className="profile" aria-labelledby="profil-heading" data-reveal="lift">
          <div className="profile__head">
            <span className="profile__avatar" aria-hidden="true">TT</span>
            <div>
              <h3 id="profil-heading">Tim Tolk</h3>
              <p>Full-Stack-Softwareentwickler</p>
            </div>
          </div>
          <dl className="profile__list">
            {credentials.map(cred => (
              <div key={cred.label}>
                <dt>{cred.label}</dt>
                <dd>{cred.value}</dd>
              </div>
            ))}
          </dl>
          <p className="profile__foot">
            <span className="status-dot" aria-hidden="true" />
            Verfügbar für neue Projekte, kostenloses Erstgespräch auf Anfrage.
          </p>
        </aside>
      </div>
    </Section>
  )
}
