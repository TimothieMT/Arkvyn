import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'

// Anonymisierte Referenzen aus Festanstellungen – bewusst ohne Firmennamen
const referenzen = [
  {
    branche: 'Logistik-Software',
    zeitraum: '2025 – 2026',
    title: 'Cloudbasiertes Lagerverwaltungssystem',
    desc: 'Weiterentwicklung eines cloudbasierten Lagerverwaltungssystems für ein Software-Unternehmen der Logistikbranche: Konzeption neuer Technologie-Anforderungen für den Cloud-Einsatz, Performance-Optimierung, kundenspezifische Erweiterungen und Automatisierung der Deployments.',
    stack: ['Java', 'PHP', 'Cloud', 'CI/CD'],
  },
  {
    branche: 'Online-Marketing & E-Commerce',
    zeitraum: '2023 – 2024',
    title: 'Softwarelösungen für eine Full-Service-Internetagentur',
    desc: 'Entwicklung eigener Softwarelösungen für eine der großen Internetagenturen im deutschsprachigen Raum (über 200 Mitarbeiter, mehr als 750 Kunden): grafische Frontend-Umsetzungen, API-Schnittstellen zu Drittsystemen sowie Programmierung von Crawlern und Scrapern.',
    stack: ['JavaScript', 'Frontend', 'PHP', 'REST-APIs'],
  },
  {
    branche: 'IT-Beratung · Hamburg',
    zeitraum: 'seit 2026',
    title: 'KI-Produkt von der Architektur bis zum MVP',
    desc: 'Konzeption der Softwarearchitektur und Entwicklung eines LLM-basierten KI-Produkts als Senior Developer für ein Hamburger IT-Beratungsunternehmen – von der Systemarchitektur über die Kernfunktionalitäten bis zu Code-Reviews und Qualitätssicherung.',
    stack: ['AI/LLM', 'Softwarearchitektur', 'Full-Stack'],
  },
]

const zitate = [
  {
    text: '„Die Leistungen von Herrn Tolk haben stets uneingeschränkt unsere volle Anerkennung gefunden."',
    quelle: 'Arbeitszeugnis, Software-Unternehmen für Logistiklösungen',
  },
  {
    text: '„Er arbeitet selbstständig und gestaltet seine Aufgaben effektiv und effizient. Die Qualität seiner Arbeit ist kontinuierlich hoch."',
    quelle: 'Zwischenzeugnis, Full-Service-Internetagentur',
  },
]

export default function Referenzen() {
  return (
    <Box component="section" id="referenzen" className="section section--referenzen" aria-label="Referenzen & Projekterfahrung">
      <Container maxWidth="lg" sx={{ mb: 7, textAlign: 'center' }}>
        <Typography variant="overline" sx={{ color: 'primary.main', display: 'block', mb: 1.5 }}>
          Referenzen
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, color: 'text.primary', mb: 1.5 }}>
          Projekterfahrung aus der{' '}
          <Box component="span" sx={{ color: 'primary.main' }}>Praxis</Box>
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 560, mx: 'auto' }}>
          Ausgewählte Projekte aus Festanstellungen und freier Arbeit –
          aus Vertraulichkeitsgründen ohne Nennung der Unternehmen.
        </Typography>
      </Container>

      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            border: '1px solid #c7c7cc',
            borderRadius: 2,
            overflow: 'hidden',
            gap: '1px',
            bgcolor: '#c7c7cc',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 6px 20px rgba(0,0,0,0.07)',
          }}
        >
          {referenzen.map(ref => (
            <Card key={ref.title} sx={{ borderRadius: 0, bgcolor: 'background.paper' }}>
              <CardContent sx={{ p: '2rem 2.25rem !important', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 1, mb: 2 }}>
                  <Typography
                    sx={{ fontSize: '0.6875rem', fontWeight: 700, color: 'primary.main', letterSpacing: '0.12em', textTransform: 'uppercase' }}
                  >
                    {ref.branche}
                  </Typography>
                  <Typography sx={{ fontSize: '0.75rem', color: 'text.disabled', flexShrink: 0 }}>
                    {ref.zeitraum}
                  </Typography>
                </Box>
                <Typography
                  variant="h3"
                  sx={{ fontSize: '1rem', fontWeight: 700, color: 'text.primary', mb: 1, lineHeight: 1.3 }}
                >
                  {ref.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem', lineHeight: 1.8, mb: 2.5 }}>
                  {ref.desc}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 'auto' }}>
                  {ref.stack.map(tech => (
                    <Chip key={tech} label={tech} size="small" variant="outlined" sx={{ fontSize: '0.7rem' }} />
                  ))}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Zitate aus Arbeitszeugnissen */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 3,
            mt: 4,
          }}
        >
          {zitate.map(z => (
            <Box
              key={z.quelle}
              component="blockquote"
              sx={{
                bgcolor: '#f8f9ff',
                border: '1px solid #e5e5ea',
                borderLeft: '3px solid #2997ff',
                borderRadius: 2,
                p: 3,
                m: 0,
              }}
            >
              <Typography sx={{ fontSize: '0.9375rem', color: 'text.primary', fontStyle: 'italic', lineHeight: 1.7, mb: 1.5 }}>
                {z.text}
              </Typography>
              <Typography component="cite" sx={{ fontSize: '0.8rem', color: 'text.secondary', fontStyle: 'normal' }}>
                — {z.quelle}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
      <Divider sx={{ mt: 10 }} />
    </Box>
  )
}
