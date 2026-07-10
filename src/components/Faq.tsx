import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Divider from '@mui/material/Divider'

// Muss inhaltlich mit dem FAQPage-Schema in index.html übereinstimmen —
// Google zeigt FAQ-Rich-Results nur für sichtbar vorhandene Inhalte.
const faqs = [
  {
    q: 'Was kostet eine professionelle Website in Lübeck?',
    a: 'Eine Landing Page beginnt bei 1.200 €, eine vollwertige Unternehmenswebsite ab 2.800 €. Kontaktieren Sie Arkvyn – Webentwickler aus Lübeck – für ein kostenloses Erstgespräch.',
  },
  {
    q: 'Welche Leistungen bietet ein Webentwickler in Lübeck?',
    a: 'Tim Tolk (Arkvyn) bietet als Freelance Webentwickler und Softwareentwickler in Lübeck: Webdesign, Full-Stack Entwicklung, App-Entwicklung, AI-Integration, REST-APIs, DevOps und IT-Beratung für Kunden in Lübeck, Hamburg und Schleswig-Holstein.',
  },
  {
    q: 'Entwickelt Arkvyn auch Apps in Lübeck?',
    a: 'Ja. Als App Entwickler aus Lübeck entwickelt Tim Tolk Web-Apps, Backend-Services und Plattformapplikationen mit React, TypeScript, Node.js, Go und Java – für Startups und Unternehmen in Lübeck und Norddeutschland.',
  },
  {
    q: 'Ist Arkvyn ein IT Freelancer in Lübeck?',
    a: 'Ja. Tim Tolk arbeitet als selbstständiger IT Freelancer und Softwareentwickler (Programmierer) aus Lübeck. Er ist für Projekte in Lübeck, Hamburg, Kiel, Flensburg und remote in ganz Deutschland verfügbar.',
  },
  {
    q: 'Wie finde ich einen guten Softwareentwickler in Lübeck?',
    a: 'Arkvyn bietet maßgeschneiderte Softwareentwicklung in Lübeck an. Mit über 5 Jahren Erfahrung als Full-Stack Entwickler und Webdesigner unterstützt Tim Tolk Unternehmen bei Webprojekten, Digitalisierung und App-Entwicklung.',
  },
]

export default function Faq() {
  return (
    <Box component="section" id="faq" className="section section--faq" aria-label="Häufige Fragen">
      <Container maxWidth="lg" sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="overline" sx={{ color: 'primary.main', display: 'block', mb: 1.5 }}>
          FAQ
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, color: 'text.primary', mb: 1.5 }}>
          Häufige{' '}
          <Box component="span" sx={{ color: 'primary.main' }}>Fragen</Box>
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 520, mx: 'auto' }}>
          Antworten auf die häufigsten Fragen zu Webentwicklung, Preisen und Zusammenarbeit.
        </Typography>
      </Container>

      <Container maxWidth="md">
        <Box
          sx={{
            border: '1px solid #c7c7cc',
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 6px 20px rgba(0,0,0,0.07)',
          }}
        >
          {faqs.map((faq, i) => (
            <Accordion
              key={faq.q}
              disableGutters
              elevation={0}
              sx={{
                bgcolor: 'background.paper',
                '&:before': { display: 'none' },
                borderBottom: i < faqs.length - 1 ? '1px solid #e5e5ea' : 'none',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
                sx={{ px: 3, py: 0.5, '&:hover': { bgcolor: '#f5f5f7' } }}
              >
                <Typography variant="h3" sx={{ fontSize: '1rem', fontWeight: 600, color: 'text.primary' }}>
                  {faq.q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pt: 0, pb: 2.5 }}>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8, textAlign: 'left' }}>
                  {faq.a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
      <Divider sx={{ mt: 10 }} />
    </Box>
  )
}
