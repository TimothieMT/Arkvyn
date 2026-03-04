import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../assets/Logo.png'

interface NavbarProps {
  scrollTo: (id: string) => void
}

export default function Navbar({ scrollTo }: NavbarProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = (id: string) => {
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollTo(id), 100)
    } else {
      scrollTo(id)
    }
  }

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <button className="navbar__logo" onClick={() => handleNav('home')}>
          <img src={logo} alt="Arkvyn Logo" />
        </button>
        <nav className={`navbar__links${menuOpen ? ' open' : ''}`}>
          <button onClick={() => handleNav('home')}>Startseite</button>
          <button onClick={() => handleNav('angebot')}>Leistungen</button>
          <button onClick={() => handleNav('preise')}>Preise</button>
          <button onClick={() => handleNav('ueber-mich')}>Über mich</button>
          <button onClick={() => handleNav('kontakt')}>Kontakt</button>
        </nav>
        <button
          className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Menü öffnen"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
