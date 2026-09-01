import { useEffect } from 'react'
import Seo from './Seo'

export default function Impressum() {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <>
    <Seo
      title="Impressum Arkvyn | Tim Tolk, Lübeck"
      description="Impressum von Arkvyn. Angaben gemäß § 5 DDG. Inhaber: Tim Tolk, Softwareentwickler aus Lübeck."
      canonical="https://arkvyn.de/impressum"
      robots="noindex, follow"
      social={false}
    />
    <main id="main" className="legal-page">
      <div className="legal-page__inner">
        <h1>Impressum</h1>

        <section className="legal-section">
          <h2>Angaben gemäß § 5 DDG</h2>
          <address>
            <p><strong>Tim Tolk</strong></p>
            <p>Arkvyn - Softwareentwicklung</p>
            <p>Krummer Weg 30</p>
            <p>23569 Lübeck</p>
          </address>
        </section>

        <section className="legal-section">
          <h2>Kontakt</h2>
          <p>Telefon: <a href="tel:+4917646143387">+49 (0) 176 46143387</a></p>
          <p>E-Mail: <a href="mailto:arkvyn.solutions@proton.me">arkvyn.solutions@proton.me</a></p>
          <p>Website: <a href="https://arkvyn.de">arkvyn.de</a></p>
        </section>

        <section className="legal-section">
          <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <address>
            <p>Tim Tolk</p>
            <p>Krummer Weg 30</p>
            <p>23569 Lübeck</p>
          </address>
        </section>

        <section className="legal-section">
          <h2>Haftungsausschluss</h2>

          <h3>Haftung für Links</h3>
          <p>
            Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen
            Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr
            übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
            Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
            Zeitpunkt der Verlinkung nicht erkennbar.
          </p>

          <h3>Urheberrecht</h3>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
            der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
            Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
            nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
        </section>

        <section className="legal-section">
          <h2>Streitschlichtung</h2>
          <p>
            Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
      </div>
    </main>
    </>
  )
}
