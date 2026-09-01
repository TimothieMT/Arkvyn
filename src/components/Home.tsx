import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'

const stats = [
  { num: '6+', label: 'Jahre Erfahrung' },
  { num: '20+', label: 'Projekte' },
  { num: '12+', label: 'Technologien' },
]

export default function Home() {
  return (
    <Box
      component="section"
      id="home"
      className="section section--home"
      aria-label="Startseite Arkvyn Softwareentwicklung"
      sx={{ minHeight: 'min(calc(100vh - 72px), 860px)', display: 'flex', alignItems: 'center' }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: { xs: 6, md: 10 } }}>

          {/* Ein gemeinsames H1 verbindet Seitenzweck und visuelle Hauptbotschaft. */}
          <Typography
            variant="h1"
            component="h1"
            sx={{ fontSize: { xs: '3rem', sm: '4.5rem', md: '6.5rem' }, textAlign: 'center', color: 'text.primary', mb: 3 }}
          >
            <Box
              component="span"
              sx={{ typography: 'overline', color: 'primary.main', mb: 3, display: 'block', textAlign: 'center' }}
            >
              Webentwickler & Webdesign deutschlandweit
            </Box>
            <Box component="span" sx={{ display: 'block' }}>
              Think. Build.
              <Box component="br" />
              <Box component="span" sx={{ color: 'primary.main' }}>Deliver.</Box>
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', textAlign: 'center', maxWidth: 520, mb: 5, fontSize: '1.125rem' }}
          >
            Sie haben eine Idee oder ein konkretes Problem? Ich entwickle die
            passende Website oder Anwendung remote in ganz Deutschland oder
            persönlich in Lübeck und Hamburg.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} mb={8} sx={{ width: { xs: '100%', sm: 'auto' } }}>
            <Button variant="contained" component="a" href="#angebot" sx={{ width: { xs: '100%', sm: 'auto' } }}>
              Meine Leistungen
            </Button>
            <Button variant="outlined" component="a" href="#kontakt" sx={{ width: { xs: '100%', sm: 'auto' } }}>
              Kontakt aufnehmen
            </Button>
          </Stack>

          {/* Stats — floats as a white card */}
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              maxWidth: 520,
              bgcolor: 'background.paper',
              border: '1px solid #c7c7cc',
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 6px 20px rgba(0,0,0,0.08)',
            }}
          >
            {stats.map((stat, i) => (
              <Box
                key={stat.num}
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  py: 2.5,
                  borderLeft: i > 0 ? '1px solid #e5e5ea' : 'none',
                }}
              >
                <Typography
                  sx={{ fontSize: '2rem', fontWeight: 700, color: 'primary.main', letterSpacing: '-0.03em', lineHeight: 1, mb: 0.5 }}
                >
                  {stat.num}
                </Typography>
                <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', letterSpacing: '0.03em' }}>
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      <Divider sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />
    </Box>
  )
}
