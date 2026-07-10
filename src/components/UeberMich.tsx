import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

const highlights = [
  'Webentwicklung & Webdesign',
  'Full-Stack & Backend Entwicklung',
  'AI/LLM-Integration',
  'REST-APIs & Microservices',
  'DevOps & Infrastruktur',
]

const credentials = [
  { label: 'Standort', value: 'Lübeck · remote deutschlandweit' },
  { label: 'Erfahrung', value: '6+ Jahre' },
  { label: 'Frontend', value: 'React · TypeScript' },
  { label: 'Backend', value: 'Node.js · Go · Java · Python' },
  { label: 'Datenbanken', value: 'PostgreSQL · MongoDB' },
  { label: 'Infrastruktur', value: 'Docker · Kubernetes · Hetzner' },
  { label: 'Spezialisierung', value: 'AI/LLM · Automatisierung' },
]

export default function UeberMich() {
  return (
    <Box component="section" id="ueber-mich" className="section section--ueber-mich" aria-label="Über Tim Tolk – Arkvyn">
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 7, md: 10 },
            alignItems: 'center',
          }}
        >
          {/* Left: text */}
          <Box>
            <Typography variant="overline" sx={{ color: 'primary.main', display: 'block', mb: 1.5 }}>
              Über mich
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, color: 'text.primary', mb: 3 }}>
              Softwareentwickler aus Lübeck – wer steckt hinter{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>Arkvyn</Box>
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1.5 }}>
              Ich bin Tim Tolk, Webentwickler und Softwareentwickler aus Lübeck (Schleswig-Holstein) mit Erfahrung
              in der Entwicklung datengetriebener Web- und Plattformapplikationen.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1.5 }}>
              Mit <Box component="strong" sx={{ color: 'text.primary', fontWeight: 600 }}>Arkvyn</Box> verfolge ich ein klares Ziel:
              komplexe technische Herausforderungen in einfache, elegante Lösungen
              zu verwandeln von der Architektur über APIs bis zur UI.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1.5 }}>
              Mein Stack reicht von React & TypeScript im Frontend über Node.js,
              Java, Go und Python im Backend bis zu PostgreSQL, MongoDB und
              Cloud-Infrastruktur mit Docker & Hetzner. Als IT Freelancer aus Lübeck
              arbeite ich remote für Kunden in ganz Deutschland.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
              Als freiberuflicher Programmierer und Webdesigner aus Lübeck unterstütze
              ich Startups und Unternehmen bei der App-Entwicklung, Digitalisierung und
              IT-Beratung – vor Ort in Lübeck, Kiel & Hamburg sowie remote in ganz
              Deutschland.
            </Typography>

            {/* Highlights list — elevated */}
            <Box
              component="ul"
              sx={{
                border: '1px solid #c7c7cc',
                borderRadius: 2,
                overflow: 'hidden',
                p: 0,
                boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 14px rgba(0,0,0,0.06)',
              }}
            >
              {highlights.map((item, i) => (
                <Box
                  component="li"
                  key={item}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.75,
                    px: 2.25,
                    py: 1.5,
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: 'text.primary',
                    bgcolor: 'background.paper',
                    borderBottom: i < highlights.length - 1 ? '1px solid #e5e5ea' : 'none',
                    transition: 'background 0.15s',
                    '&:hover': { bgcolor: '#f0f4ff' },
                  }}
                >
                  <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'primary.main', flexShrink: 0 }} />
                  {item}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Right: credentials panel — elevated */}
          <Box
            sx={{
              border: '1px solid #c7c7cc',
              borderRadius: 2.5,
              overflow: 'hidden',
              bgcolor: 'background.paper',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05), 0 12px 32px rgba(0,0,0,0.09)',
            }}
          >
            {/* Header */}
            <Box sx={{ px: 3.5, pt: 3, pb: 2.5, borderBottom: '1px solid #e5e5ea', bgcolor: '#f8f9ff' }}>
              <Typography
                sx={{ fontSize: '0.6875rem', fontWeight: 700, color: 'primary.main', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 0.75 }}
              >
                Profil
              </Typography>
              <Typography variant="h3" sx={{ fontSize: '1.25rem', color: 'text.primary', fontWeight: 700 }}>
                Tim Tolk — Software Developer
              </Typography>
            </Box>

            {/* Credential rows */}
            <Box component="ul" sx={{ p: 0 }}>
              {credentials.map((cred, i) => (
                <Box
                  component="li"
                  key={cred.label}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: 2,
                    px: 3.5,
                    py: 1.625,
                    bgcolor: 'background.paper',
                    borderBottom: i < credentials.length - 1 ? '1px solid #e5e5ea' : 'none',
                    transition: 'background 0.15s',
                    '&:hover': { bgcolor: '#f5f7ff' },
                  }}
                >
                  <Typography sx={{ fontSize: '0.875rem', color: 'text.secondary', lineHeight: 1.5 }}>
                    {cred.label}
                  </Typography>
                  <Typography sx={{ fontSize: '0.875rem', color: 'text.primary', fontWeight: 600, textAlign: 'right', lineHeight: 1.5, wordBreak: 'break-word', minWidth: 0 }}>
                    {cred.value}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Footer */}
            <Box sx={{ px: 3.5, py: 2, bgcolor: '#f8f9ff', borderTop: '1px solid #e5e5ea' }}>
              <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary', fontStyle: 'italic' }}>
                Verfügbar für neue Projekte, kostenloses Erstgespräch auf Anfrage.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      <Divider sx={{ mt: 10 }} />
    </Box>
  )
}
