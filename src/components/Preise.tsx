export default function Preise() {
  return (
    <section id="preise" className="section section--preise">
      <div className="section__header">
        <h2>Webseiten zum <span className="accent">Festpreis</span></h2>
        <p>
          Ob moderne Landingpage oder klassische Business-Website – ich entwickle dir eine
          professionelle, responsive Webpräsenz die überzeugt.
        </p>
      </div>

      <div className="grid grid--2 preise__cards">
        <div className="card preise__card">
          <div className="preise__card-header">
            <span className="card__icon">🖥️</span>
            <div>
              <h3>Landing Page</h3>
              <p className="preise__price">ab 800 €</p>
            </div>
          </div>
          <p>Eine Seite, responsive, inkl. Kontaktformular</p>
        </div>

        <div className="card preise__card">
          <div className="preise__card-header">
            <span className="card__icon">🌐</span>
            <div>
              <h3>Business Website</h3>
              <p className="preise__price">ab 1.800 €</p>
            </div>
          </div>
          <p>3–5 Seiten, CMS-Anbindung, SEO-Grundlagen</p>
        </div>
      </div>

      <p className="preise__hinweis">
        Nicht enthalten: Texte, Bilder und Hosting. Änderungen nach Abnahme werden separat berechnet.
      </p>

      <div className="preise__divider" />

      <div className="preise__individuell">
        <div className="preise__individuell-text">
          <h2>Individuelle Projekte &amp; <span className="accent">Beratung</span></h2>
          <p>
            Mein Stundensatz beginnt bei <strong>85 €/Std.</strong> – je nach Projektumfang und
            Komplexität erstelle ich dir ein individuelles Angebot. AI- und LLM-Projekte werden
            gesondert kalkuliert.
          </p>
          <p>
            Schreib mir einfach und wir besprechen dein Vorhaben in einem{' '}
            <strong>kostenlosen Erstgespräch</strong>.
          </p>
        </div>
        <div className="preise__individuell-cta">
          <a href="#kontakt" className="btn btn--primary" onClick={(e) => {
            e.preventDefault()
            const el = document.getElementById('kontakt')
            if (el) {
              const top = el.getBoundingClientRect().top + window.scrollY - 72
              window.scrollTo({ top, behavior: 'smooth' })
            }
          }}>
            Kostenloses Erstgespräch →
          </a>
        </div>
      </div>
    </section>
  )
}
