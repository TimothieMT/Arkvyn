import { Link, useNavigate, useLocation } from 'react-router-dom'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import logo from '../assets/noBgColor.svg'

interface FooterProps {
  scrollTo: (id: string) => void
}

const navItems = [
  { id: 'home', label: 'Startseite' },
  { id: 'angebot', label: 'Leistungen' },
  { id: 'ueber-mich', label: 'Über mich' },
  { id: 'kontakt', label: 'Kontakt' },
]

export default function Footer({ scrollTo }: FooterProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNav = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollTo(id), 100)
    } else {
      scrollTo(id)
    }
  }

  return (
    <Box component="footer" sx={{ bgcolor: '#ffffff', borderTop: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '2fr 1fr 1fr' },
            gap: { xs: 4, md: 5 },
            pt: { xs: 6, md: 8 },
            pb: { xs: 5, md: 6 },
          }}
        >
          {/* Brand */}
          <Box sx={{ gridColumn: { sm: '1 / -1', md: '1' } }}>
            <a
              href="/#home"
              onClick={e => handleNav(e, 'home')}
              style={{ display: 'inline-flex', marginBottom: 16 }}
              aria-label="Arkvyn – Startseite"
            >
              <img src={logo} alt="Arkvyn Logo" width={135} height={36} style={{ height: 36, width: 'auto', opacity: 0.6 }} />
            </a>
            <Typography
              sx={{ fontSize: '0.8rem', color: 'text.disabled', letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              Think / Build / Deliver
            </Typography>
            <Typography sx={{ fontSize: '0.8rem', color: 'text.disabled', mt: 1 }}>
              Webentwickler &amp; IT Freelancer aus Lübeck –<br />
              remote in ganz Deutschland tätig
            </Typography>
          </Box>

          {/* Navigation */}
          <Box>
            <Typography
              sx={{ fontSize: '0.6875rem', fontWeight: 600, color: 'text.disabled', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 2.5 }}
            >
              Navigation
            </Typography>
            <Stack spacing={1} component="ul" sx={{ p: 0 }}>
              {navItems.map(item => (
                <Box component="li" key={item.id}>
                  <Button
                    variant="text"
                    component="a"
                    href={`/#${item.id}`}
                    onClick={(e: React.MouseEvent) => handleNav(e, item.id)}
                    sx={{ fontSize: '0.875rem', p: 0, minWidth: 0, height: 'auto', '&:hover': { background: 'none', color: 'text.primary' } }}
                  >
                    {item.label}
                  </Button>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Contact */}
          <Box>
            <Typography
              sx={{ fontSize: '0.6875rem', fontWeight: 600, color: 'text.disabled', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 2.5 }}
            >
              Kontakt
            </Typography>
            <Box component="address">
              <Typography sx={{ fontSize: '0.875rem', mb: 0.75, overflowWrap: 'break-word' }}>
                <Box component="a" href="tel:+4917646143387" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                  +49 (0) 176 46143387
                </Box>
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
                <Box component="a" href="mailto:arkvyn.solutions@proton.me" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                  arkvyn.solutions@proton.me
                </Box>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            py: 2.5,
            gap: 1.5,
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          <Typography sx={{ fontSize: '0.8rem', color: 'text.disabled' }}>
            © {new Date().getFullYear()} Arkvyn. Alle Rechte vorbehalten.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link to="/impressum" style={{ color: '#aeaeb2', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.2s' }}>
              Impressum
            </Link>
            <Link to="/datenschutz" style={{ color: '#aeaeb2', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.2s' }}>
              Datenschutz
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
