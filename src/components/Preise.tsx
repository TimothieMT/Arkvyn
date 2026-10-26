import Section from './ui/Section'

const packages = [
  {
    name: 'Landingpage',
    price: 'ab 1.200 €',
    unit: 'Festpreis',
    desc: 'Eine professionelle einseitige Webpräsenz ideal für Selbstständige, Start-ups und Produktlaunches.',
    features: ['Eine responsive Seite', 'Kontaktformular', 'Mobile-optimiert', 'SEO-Grundlagen', '2 Revisionsrunden'],
  },
  {
    name: 'Business-Website',
    price: 'ab 2.800 €',
    unit: 'Festpreis',
    badge: 'Beliebt',
    desc: 'Vollwertige Unternehmenswebsite mit mehreren Seiten und Content-Management für Ihre langfristige Online-Präsenz.',
    features: ['3-5 responsive Seiten', 'CMS-Anbindung', 'SEO-Grundlagen', 'Kontaktformular', 'Für Webanalyse vorbereitet', '3 Revisionsrunden'],
  },
  {
    name: 'Individuelle Projekte & Beratung',
    price: 'ab 90 €',
    unit: 'pro Stunde',
    desc: 'Webanwendungen, Backends, Integrationen und IT-Beratung. Je nach Umfang und Komplexität erstelle ich ein individuelles Angebot.',
  },
  {
    name: 'KI- & LLM-Projekte',
    price: 'ab 110 €',
    unit: 'pro Stunde',
    desc: 'Integration von Sprachmodellen, Automatisierung und Datenextraktion in Ihre bestehenden Anwendungen.',
  },
]

export default function Preise() {
  return (
    <Section id="preise" surface="light" aria-labelledby="preise-heading">
      <div className="split">
        <header className="split__side">
          <p className="eyebrow" data-reveal="fade">Preise &amp; Pakete</p>
          <h2 id="preise-heading" data-reveal="blur">Website erstellen lassen zum Festpreis</h2>
          <p className="split__lead" data-reveal="fade">
            Klare Pakete für Websites transparent kalkuliert und ohne versteckte Kosten.
          </p>
        </header>

        <div className="split__main">
          <div data-reveal="lift">
            <table className="price-table">
              <caption className="sr-only">Preise und Pakete in Euro</caption>
              <thead>
                <tr>
                  <th scope="col">Leistung</th>
                  <th scope="col" className="price-table__price">Preis</th>
                </tr>
              </thead>
              <tbody>
                {packages.map(pkg => (
                  <tr key={pkg.name}>
                    <th scope="row">
                      <span className="price-table__name">
                        {pkg.name}
                        {pkg.badge ? <span className="badge">{pkg.badge}</span> : null}
                      </span>
                      <p>{pkg.desc}</p>
                      {pkg.features ? (
                        <ul className="tag-list" aria-label={`Enthalten in ${pkg.name}`}>
                          {pkg.features.map(f => (
                            <li key={f}>{f}</li>
                          ))}
                        </ul>
                      ) : null}
                    </th>
                    <td className="price-table__price">
                      {pkg.price}
                      <span>{pkg.unit}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="footnote">
            * Nicht enthalten: Texte, Bilder und Hosting. Änderungen nach Abnahme werden separat berechnet.
          </p>

          <div className="btn-row price-actions">
            <a href="#kontakt" className="btn btn--primary">Kostenloses Erstgespräch</a>
            <a href="#kontakt" className="btn btn--ghost">Angebot anfragen</a>
          </div>
        </div>
      </div>
    </Section>
  )
}
