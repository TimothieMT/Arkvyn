import { Link } from 'react-router-dom'
import Seo from './Seo'

export default function NotFound() {
  return (
    <>
      <Seo title="Seite nicht gefunden Arkvyn" robots="noindex, nofollow" social={false} />
      <main id="main" className="page-main not-found surface--light" data-surface="light">
        <div className="container">
          <p className="eyebrow">Fehler 404</p>
          <h1>
            Seite nicht gefunden
            <br />
            <span className="text-soft">Die angeforderte Seite existiert nicht oder wurde verschoben.</span>
          </h1>
          <div className="btn-row">
            <Link to="/" className="btn btn--ink">Zur Startseite</Link>
            <a href="/#kontakt" className="btn btn--ghost">Kontakt aufnehmen</a>
          </div>
        </div>
      </main>
    </>
  )
}
