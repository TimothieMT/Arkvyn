import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

const scrollToKontakt = (e: React.MouseEvent) => {
  e.preventDefault()
  const el = document.getElementById('kontakt')
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

const landingFeatures = [
  'Eine responsive Seite',
  'Kontaktformular',
  'Mobile-optimiert',
  'SEO-Grundlagen',
  '2 Revisionsrunden',
]

const businessFeatures = [
  '3–5 responsive Seiten',
  'CMS-Anbindung',
  'SEO-Grundlagen',
  'Kontaktformular',
  'Google Analytics ready',
  '3 Revisionsrunden',
]

function FeatureList({ items }: { items: string[] }) {
  return (
    <Box component="ul" sx={{ display: 'flex', flexDirection: 'column', gap: 1.25, mb: 4, flex: 1, p: 0 }}>
      {items.map(item => (
        <Box
          component="li"
          key={item}
          sx={{ display: 'flex', gap: 1.5, fontSize: '0.875rem', color: 'text.secondary', lineHeight: 1.5, alignItems: 'flex-start' }}
        >
          <Box component="span" sx={{ color: 'primary.main', fontWeight: 700, flexShrink: 0, mt: '1px', fontSize: '0.8rem' }}>✓</Box>
          {item}
        </Box>
      ))}
    </Box>
  )
}

export default function Preise() {
  return (
    <Box component="section" id="preise" className="section section--preise" aria-label="Preise & Pakete">
      <Container maxWidth="lg" sx={{ mb: 7, textAlign: 'center' }}>
        <Typography variant="overline" sx={{ color: 'primary.main', display: 'block', mb: 1.5 }}>
          Preise & Pakete
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, color: 'text.primary', mb: 1.5 }}>
          Website zum{' '}
          <Box component="span" sx={{ color: 'primary.main' }}>Festpreis</Box>
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 520, mx: 'auto' }}>
          Homepage erstellen lassen, professionell, responsive, transparent kalkuliert, ohne versteckte Kosten.
        </Typography>
      </Container>

      <Container maxWidth="lg">
        {/* Pricing cards */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            border: '1px solid #c7c7cc',
            borderRadius: 2,
            overflow: 'hidden',
            gap: '1px',
            bgcolor: '#c7c7cc',
            boxShadow: '0 2px 6px rgba(0,0,0,0.05), 0 10px 28px rgba(0,0,0,0.09)',
          }}
        >
          {/* Landing Page */}
          <Card sx={{ borderRadius: 0, bgcolor: 'background.paper', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ p: '2.5rem !important', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Typography variant="h3" sx={{ fontSize: '1.5rem', color: 'text.primary', mb: 0.75, fontWeight: 700 }}>
                Landing Page
              </Typography>
              <Typography sx={{ fontSize: '2.75rem', fontWeight: 700, color: 'text.primary', letterSpacing: '-0.04em', lineHeight: 1, mb: 0.5 }}>
                ab 1.200 €
              </Typography>
              <Typography sx={{ fontSize: '0.8125rem', color: 'text.disabled', mb: 2.5 }}>
                Einmalig · inkl. Einrichtung
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, pb: 3, borderBottom: '1px solid #e5e5ea' }}>
                Eine professionelle einseitige Webpräsenz ideal für Selbstständige,
                Startups und Produktlaunches.
              </Typography>
              <FeatureList items={landingFeatures} />
              <Button variant="outlined" fullWidth onClick={scrollToKontakt} sx={{ mt: 'auto' }}>
                Angebot anfragen
              </Button>
            </CardContent>
          </Card>

          {/* Business Website — highlighted */}
          <Card
            sx={{
              borderRadius: 0,
              bgcolor: '#f0f5ff',
              display: 'flex',
              flexDirection: 'column',
              borderTop: '3px solid #2997ff',
            }}
          >
            <CardContent sx={{ p: '2.5rem !important', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Chip label="Beliebt" color="primary" size="small" sx={{ mb: 2, alignSelf: 'flex-start' }} />
              <Typography variant="h3" sx={{ fontSize: '1.5rem', color: 'text.primary', mb: 0.75, fontWeight: 700 }}>
                Business Website
              </Typography>
              <Typography sx={{ fontSize: '2.75rem', fontWeight: 700, color: 'text.primary', letterSpacing: '-0.04em', lineHeight: 1, mb: 0.5 }}>
                ab 2.800 €
              </Typography>
              <Typography sx={{ fontSize: '0.8125rem', color: 'text.disabled', mb: 2.5 }}>
                Einmalig · inkl. Einrichtung
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, pb: 3, borderBottom: '1px solid #d0d8f0' }}>
                Vollwertige Unternehmenswebsite mit mehreren Seiten und
                Content-Management für Ihre langfristige Online-Präsenz.
              </Typography>
              <FeatureList items={businessFeatures} />
              <Button variant="contained" fullWidth onClick={scrollToKontakt} sx={{ mt: 'auto' }}>
                Angebot anfragen
              </Button>
            </CardContent>
          </Card>
        </Box>

        <Typography sx={{ fontSize: '0.8rem', color: 'text.disabled', textAlign: 'center', mt: 2.5 }}>
          * Nicht enthalten: Texte, Bilder und Hosting. Änderungen nach Abnahme werden separat berechnet.
        </Typography>

        <Divider sx={{ my: 7 }} />

        {/* Individual projects */}
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 6 },
            bgcolor: 'background.paper',
            border: '1px solid #c7c7cc',
            borderRadius: 2,
            p: { xs: 3, md: 4.5 },
            boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 14px rgba(0,0,0,0.06)',
          }}
        >
          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, color: 'text.primary', mb: 2 }}>
              Individuelle Projekte &{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>Beratung</Box>
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1.25, maxWidth: 520 }}>
              Mein Stundensatz beginnt bei{' '}
              <Box component="strong" sx={{ color: 'text.primary', fontWeight: 700 }}>90 €/Std</Box>
              {' '} je nach Projektumfang und Komplexität erstelle ich ein individuelles Angebot. AI- und LLM-Projekte werden ab{' '}
              <Box component="strong" sx={{ color: 'text.primary', fontWeight: 700 }}>110 €/Std</Box>
              {' '}kalkuliert.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Schreiben Sie mir und wir besprechen Ihr Vorhaben in einem{' '}
              <Box component="strong" sx={{ color: 'primary.main', fontWeight: 600 }}>kostenlosen Erstgespräch</Box>.
            </Typography>
          </Box>
          <Button variant="contained" onClick={scrollToKontakt} sx={{ flexShrink: 0, whiteSpace: 'nowrap' }}>
            Kostenloses Erstgespräch →
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
