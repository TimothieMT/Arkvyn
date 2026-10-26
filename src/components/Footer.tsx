import { Link, useNavigate, useLocation } from 'react-router-dom'
import BrandMark from './ui/BrandMark'
import LinkedInIcon from './ui/LinkedInIcon'

interface FooterProps {
  scrollTo: (id: string) => void
}

const navItems = [
  { id: 'home', label: 'Startseite' },
  { id: 'angebot', label: 'Leistungen' },
  { id: 'preise', label: 'Preise' },
  { id: 'referenzen', label: 'Referenzen' },
  { id: 'ueber-mich', label: 'Über mich' },
  { id: 'kontakt', label: 'Kontakt' },
]

const serviceLinks = [
  { to: '/webdesign', label: 'Webdesign & Webentwicklung' },
  { to: '/homepage-erstellen-lassen', label: 'Homepage erstellen lassen' },
  { to: '/ki-integration', label: 'KI-Integration & LLM' },
  { to: '/full-stack-entwicklung', label: 'Full-Stack-Entwicklung' },
  { to: '/it-beratung', label: 'IT-Beratung' },
]

export default function Footer({ scrollTo }: FooterProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNav = (e: React.MouseEvent, id: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollTo(id), 100)
    } else {
      scrollTo(id)
    }
  }

  return (
    <footer className="site-footer" data-surface="dark">
      <div className="container">
        <div className="site-footer__grid">
          <p className="site-footer__tagline" data-reveal="blur">
            Think. Build. Deliver.
            <br />
            <span>Webentwicklung aus Lübeck, remote in ganz Deutschland.</span>
          </p>

          <nav className="site-footer__group" aria-labelledby="footer-nav">
            <h2 id="footer-nav">Navigation</h2>
            {navItems.map(item => (
              <a key={item.id} href={`/#${item.id}`} onClick={e => handleNav(e, item.id)}>
                {item.label}
              </a>
            ))}
          </nav>

          <nav className="site-footer__group" aria-labelledby="footer-services">
            <h2 id="footer-services">Leistungen</h2>
            {serviceLinks.map(link => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="site-footer__group">
            <h2>Kontakt</h2>
            <address>
              <a href="tel:+4915567829726">+49 (0) 155 67829726</a>
              <a href="mailto:arkvyn.solutions@proton.me">arkvyn.solutions@proton.me</a>
              <a href="https://www.linkedin.com/in/tim-tolk-2091a7258" target="_blank" rel="noopener noreferrer" className="icon-link">
                <LinkedInIcon />
                LinkedIn-Profil<span className="sr-only"> (öffnet in neuem Tab)</span>
              </a>
            </address>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} Arkvyn. Alle Rechte vorbehalten.</p>
          <nav aria-label="Rechtliches">
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
          </nav>
          <a href="/#home" onClick={e => handleNav(e, 'home')} className="site-footer__mark" aria-label="Arkvyn Startseite">
            <BrandMark width="44" height="32" />
          </a>
        </div>
      </div>
    </footer>
  )
}
