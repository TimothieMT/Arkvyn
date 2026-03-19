export default function Preise() {
  return (
    <section id="preise" className="section section--preise" aria-label="Preise & Pakete">
      <div className="section__header">
        <span className="section__label">Preise & Pakete</span>
        <h2>Webseiten zum <span className="accent">Festpreis</span></h2>
        <p>
          Professionelle, responsive Webpräsenz die überzeugt –
          transparent kalkuliert, ohne versteckte Kosten.
        </p>
      </div>

      <div className="grid grid--2 preise__cards">
        <div className="card preise__card">
          <div className="preise__card-header">
            <span className="card__icon">🖥️</span>
            <h3>Landing Page</h3>
            <p className="preise__price">ab 1.200 €</p>
            <p className="preise__price-sub">Einmalig · inkl. Einrichtung</p>
          </div>
          <p className="preise__desc">
            Eine professionelle einseitige Webpräsenz – ideal für Selbstständige,
            Startups und Produktlaunches.
          </p>
          <ul className="preise__features">
            <li className="preise__feature">Eine responsive Seite</li>
            <li className="preise__feature">Kontaktformular</li>
            <li className="preise__feature">Mobile-optimiert</li>
            <li className="preise__feature">SEO-Grundlagen</li>
            <li className="preise__feature">2 Revisionsrunden</li>
          </ul>
          <a href="#kontakt" className="btn btn--outline btn--full" onClick={(e) => {
            e.preventDefault()
            const el = document.getElementById('kontakt')
            if (el) {
              const top = el.getBoundingClientRect().top + window.scrollY - 64
              window.scrollTo({ top, behavior: 'smooth' })
            }
          }}>
            Angebot anfragen
          </a>
        </div>

        <div className="card preise__card preise__card--popular">
          <span className="preise__popular-badge">Beliebt</span>
          <div className="preise__card-header">
            <span className="card__icon">🌐</span>
            <h3>Business Website</h3>
            <p className="preise__price">ab 2.800 €</p>
            <p className="preise__price-sub">Einmalig · inkl. Einrichtung</p>
          </div>
          <p className="preise__desc">
            Vollwertige Unternehmenswebsite mit mehreren Seiten und
            Content-Management für Ihre langfristige Online-Präsenz.
          </p>
          <ul className="preise__features">
            <li className="preise__feature">3–5 responsive Seiten</li>
            <li className="preise__feature">CMS-Anbindung</li>
            <li className="preise__feature">SEO-Grundlagen</li>
            <li className="preise__feature">Kontaktformular</li>
            <li className="preise__feature">Google Analytics ready</li>
            <li className="preise__feature">3 Revisionsrunden</li>
          </ul>
          <a href="#kontakt" className="btn btn--primary btn--full" onClick={(e) => {
            e.preventDefault()
            const el = document.getElementById('kontakt')
            if (el) {
              const top = el.getBoundingClientRect().top + window.scrollY - 64
              window.scrollTo({ top, behavior: 'smooth' })
            }
          }}>
            Angebot anfragen
          </a>
        </div>
      </div>

      <p className="preise__hinweis">
        * Nicht enthalten: Texte, Bilder und Hosting. Änderungen nach Abnahme werden separat berechnet.
      </p>

      <div className="preise__divider" />

      <div className="preise__individuell">
        <div className="preise__individuell-text">
          <h2>Individuelle Projekte &amp; <span className="accent">Beratung</span></h2>
          <p>
            Mein Stundensatz beginnt bei <strong>90 €/Std.</strong> – je nach Projektumfang und
            Komplexität erstelle ich dir ein individuelles Angebot. AI- und LLM-Projekte werden
            ab <strong>110 €/Std.</strong> kalkuliert.
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
              const top = el.getBoundingClientRect().top + window.scrollY - 64
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
