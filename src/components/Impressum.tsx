import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

export default function Impressum() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
    <Helmet>
      <title>Impressum – Arkvyn | Tim Tolk, Lübeck</title>
      <meta name="description" content="Impressum von Arkvyn – Angaben gemäß § 5 TMG. Inhaber: Tim Tolk, Softwareentwickler aus Lübeck." />
      <meta name="robots" content="noindex, follow" />
      <link rel="canonical" href="https://arkvyn.de/impressum" />
    </Helmet>
    <main id="main" className="legal-page">
      <div className="legal-page__inner">
        <h1>Impressum</h1>

        <section className="legal-section">
          <h2>Angaben gemäß § 5 TMG</h2>
          <address>
            <p><strong>Tim Tolk</strong></p>
            <p>Arkvyn – Softwareentwicklung</p>
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

          <h3>Haftung für Inhalte</h3>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
            allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
            erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
            entfernen.
          </p>

          <h3>Haftung für Links</h3>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
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
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
      </div>
    </main>
    </>
  )
}
