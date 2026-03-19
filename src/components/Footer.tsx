import { Link, useNavigate, useLocation } from 'react-router-dom'
import logo from '../assets/noBgColor.svg'

interface FooterProps {
  scrollTo: (id: string) => void
}

export default function Footer({ scrollTo }: FooterProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNav = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollTo(id), 100)
    } else {
      scrollTo(id)
    }
  }

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <button className="footer__logo" onClick={() => handleNav('home')}>
            <img src={logo} alt="Arkvyn Logo" />
          </button>
          <p className="footer__tagline">Think / Build / Deliver</p>
        </div>

        <div className="footer__nav">
          <h4>Navigation</h4>
          <ul>
            <li><button onClick={() => handleNav('home')}>Startseite</button></li>
            <li><button onClick={() => handleNav('angebot')}>Leistungen</button></li>
            <li><button onClick={() => handleNav('ueber-mich')}>Über mich</button></li>
            <li><button onClick={() => handleNav('kontakt')}>Kontakt</button></li>
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Kontakt</h4>
          <address>
            <p>📞 +49 (0) 176 46143387</p>
            <p>✉️ info@arkvyn.de</p>
          </address>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Arkvyn. Alle Rechte vorbehalten.</p>
        <div className="footer__legal">
          <Link to="/impressum">Impressum</Link>
          <Link to="/datenschutz">Datenschutz</Link>
        </div>
      </div>
    </footer>
  )
}
