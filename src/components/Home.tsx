import logo from '../assets/Logo.png'

interface HomeProps {
  scrollTo: (id: string) => void
}

export default function Home({ scrollTo }: HomeProps) {
  function handleNav(id: string): void {
    scrollTo(id)
  }
  return (
    <section id="home" className="section section--home">
      <div className="grid grid--12">
        <div className="home__content">
          <button className="footer__logo" onClick={() => handleNav('home')}>
            <img src={logo} alt="Arkvyn Logo" />
          </button>
          <h1 className="home__headline">Think. Build. <span className="accent">Deliver.</span></h1>
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
      </div>
    </section>
  )
}
