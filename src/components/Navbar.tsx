import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Stack from '@mui/material/Stack'
import logo from '../assets/noBgColor.svg'

interface NavbarProps {
  scrollTo: (id: string) => void
}

const navItems = [
  { id: 'angebot', label: 'Leistungen' },
  { id: 'preise', label: 'Preise' },
  { id: 'ueber-mich', label: 'Über mich' },
]

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
    <>
      <AppBar position="fixed" component="header">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: 0 }}
            aria-label="Arkvyn – Startseite"
          >
            <img src={logo} alt="Arkvyn Logo" style={{ height: 52, width: 'auto' }} />
          </button>

          {/* Desktop navigation */}
          <Box
            component="nav"
            aria-label="Hauptnavigation"
            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.25 }}
          >
            {navItems.map(item => (
              <Button key={item.id} variant="text" onClick={() => handleNav(item.id)}>
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              size="small"
              onClick={() => handleNav('kontakt')}
              sx={{ ml: 1.5 }}
            >
              Kontakt
            </Button>
          </Box>

          {/* Mobile hamburger */}
          <button
            className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Menü öffnen"
          >
            <span />
            <span />
            <span />
          </button>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="top"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        sx={{ display: { md: 'none' } }}
        PaperProps={{
          sx: {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            pt: 0,
          },
        }}
      >
        <Stack spacing={0.5} alignItems="center" width="100%" px={4}>
          {navItems.map(item => (
            <Button
              key={item.id}
              variant="text"
              onClick={() => handleNav(item.id)}
              sx={{ fontSize: '1.25rem', width: 280, color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
            >
              {item.label}
            </Button>
          ))}
          <Button
            variant="contained"
            onClick={() => handleNav('kontakt')}
            sx={{ mt: 1.5, width: 280 }}
          >
            Kontakt aufnehmen
          </Button>
        </Stack>
      </Drawer>
    </>
  )
}
