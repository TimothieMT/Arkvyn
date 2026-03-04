export default function UeberMich() {
  return (
    <section id="ueber-mich" className="section section--ueber-mich" aria-label="Über Tim Tolk – Arkvyn">
      <div className="grid grid--12">
        <div className="about__inner">
          <div className="about__text">
            <h2>Über <span className="accent">mich</span></h2>
            <p>
              Ich bin Tim Tolk, Full-Stack Softwareentwickler aus Lübeck mit Erfahrung
              in der Entwicklung datengetriebener Web- und Plattformapplikationen.
            </p>
            <p>
              Mit <strong>Arkvyn</strong> verfolge ich eine klare Mission:
              komplexe technische Herausforderungen in einfache, elegante Lösungen
              zu verwandeln – von der Datenarchitektur über APIs bis zur UI.
            </p>
            <p>
              Mein Stack reicht von React & TypeScript im Frontend über Node.js,
              Java, Go und Python im Backend bis zu PostgreSQL, MongoDB und
              Cloud-Infrastruktur mit Docker & Hetzner.
            </p>
            <ul className="about__highlights">
              <li>✓ Full-Stack & Backend Entwicklung</li>
              <li>✓ AI/LLM-Integration & Datenarchitektur</li>
              <li>✓ REST-APIs, Microservices & DevOps</li>
              <li>✓ Agile Arbeitsweise mit Kanban & GitLab</li>
            </ul>
          </div>
          <div className="about__visual">
            <div className="about__terminal">
              <div className="terminal__bar">
                <span className="dot dot--red" />
                <span className="dot dot--yellow" />
                <span className="dot dot--green" />
              </div>
              <div className="terminal__body">
                <p><span className="t-green">$</span> whoami</p>
                <p className="t-white">Tim Tolk – Software Developer</p>
                <p><span className="t-green">$</span> skills</p>
                <p className="t-white">React · TypeScript · Node.js</p>
                <p className="t-white">Go · Java · Python · Docker</p>
                <p className="t-white">PostgreSQL · MongoDB · AI/LLM</p>
                <p><span className="t-green">$</span> mission</p>
                <p className="t-white">Think / Build / Deliver<span className="blink">_</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
