interface HomeProps {
  scrollTo: (id: string) => void
}

export default function Home({ scrollTo }: HomeProps) {
  return (
    <section id="home" className="section section--home" aria-label="Startseite – Arkvyn Softwareentwicklung">
      <div className="grid grid--12">
        <div className="home__content">
          <span className="home__tag">Full-Stack Softwareentwicklung · Lübeck</span>
          <h1 className="home__headline">
            Think. Build.<br />
            <span className="accent">Deliver.</span>
          </h1>
          <p className="home__sub">
            Maßgeschneiderte Softwarelösungen für Ihr Unternehmen –
            von der Idee bis zur fertigen Anwendung.
          </p>
          <div className="home__cta">
            <button className="btn btn--primary" onClick={() => scrollTo('angebot')}>
              Meine Leistungen
            </button>
            <button className="btn btn--outline" onClick={() => scrollTo('kontakt')}>
              Kontakt aufnehmen
            </button>
          </div>
        </div>

        <div className="home__stats">
          <div className="home__stat">
            <span className="home__stat-num">5+</span>
            <span className="home__stat-label">Jahre Erfahrung</span>
          </div>
          <div className="home__stat">
            <span className="home__stat-num">20+</span>
            <span className="home__stat-label">Projekte</span>
          </div>
          <div className="home__stat">
            <span className="home__stat-num">10+</span>
            <span className="home__stat-label">Technologien</span>
          </div>
        </div>
      </div>
    </section>
  )
}
