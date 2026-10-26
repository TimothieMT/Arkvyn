import { useEffect, useRef, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import BrandMark from './ui/BrandMark'

interface NavbarProps {
  scrollTo: (id: string) => void
}

const navItems = [
  { id: 'angebot', label: 'Leistungen' },
  { id: 'preise', label: 'Preise' },
  { id: 'ueber-mich', label: 'Über mich' },
  { id: 'referenzen', label: 'Referenzen' },
  { id: 'faq', label: 'FAQ' },
]

export default function Navbar({ scrollTo }: NavbarProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const panel = useRef<HTMLDivElement>(null)

  // Die schwebende Leiste passt sich der Sektion an, über der sie gerade liegt.
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const bounds = panel.current?.getBoundingClientRect()
      if (!bounds) return
      const y = bounds.top + 24
      const section = Array.from(document.querySelectorAll<HTMLElement>('[data-surface]')).find(el => {
        const rect = el.getBoundingClientRect()
        return rect.top <= y && rect.bottom > y
      })
      const surface = section?.dataset.surface
      setDark(surface === 'dark' || surface === 'deep')
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    schedule()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  // Auf der Startseite sanft scrollen (SPA), von anderen Routen zuerst zurück navigieren.
  // Als echte <a href="/#…">-Links bleiben die Sektionen crawlbar und per Middle-Click öffenbar.
  const handleNav = (e: React.MouseEvent, id: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollTo(id), 100)
    } else {
      scrollTo(id)
    }
  }

  return (
    <header className="site-header">
      <div ref={panel} className="site-header__panel" data-theme={dark ? 'dark' : 'light'} data-open={menuOpen || undefined}>
        <div className="site-header__row">
          <a href="/#home" onClick={e => handleNav(e, 'home')} className="brand" aria-label="Arkvyn Startseite">
            <BrandMark className="brand__mark" />
            <span className="brand__name">
              <span>Arkvyn</span>
              <span>Softwareentwicklung</span>
            </span>
          </a>

          <nav className="site-header__nav" aria-label="Hauptnavigation">
            {navItems.map(item => (
              <a key={item.id} href={`/#${item.id}`} onClick={e => handleNav(e, item.id)}>
                {item.label}
              </a>
            ))}
          </nav>

          <a href="/#kontakt" onClick={e => handleNav(e, 'kontakt')} className="btn btn--primary site-header__cta">
            Kontakt
          </a>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
          </button>
        </div>

        <div id="mobile-menu" className="mobile-menu" hidden={!menuOpen}>
          <nav aria-label="Mobile Navigation">
            {navItems.map(item => (
              <a key={item.id} href={`/#${item.id}`} onClick={e => handleNav(e, item.id)}>
                {item.label}
              </a>
            ))}
          </nav>
          <a href="/#kontakt" onClick={e => handleNav(e, 'kontakt')} className="btn btn--primary btn--block">
            Kontakt aufnehmen
          </a>
        </div>
      </div>
    </header>
  )
}
