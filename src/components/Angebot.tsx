import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

const services: { num: string; title: string; desc: string; to?: string }[] = [
  {
    num: '01',
    title: 'Webdesign & Webentwicklung',
    desc: 'Ich entwickle Websites, die zu Ihrem Angebot passen von der klaren Landingpage bis zur umfangreichen Webanwendung.',
    to: '/webdesign',
  },
  {
    num: '02',
    title: 'Full-Stack-Entwicklung',
    desc: 'Webanwendungen mit React, TypeScript und Node.js vom Frontend bis zur API und zum Backend.',
    to: '/full-stack-entwicklung',
  },
  {
    num: '03',
    title: 'Backend & Datenarchitektur',
    desc: 'Saubere Backend-Systeme mit Java, Go, Python oder Node.js, inklusive Datenbanken und Datenpipelines.',
    to: '/backend-entwicklung',
  },
  {
    num: '04',
    title: 'KI & Automatisierung',
    desc: 'Ich integriere Sprachmodelle in bestehende Anwendungen und automatisiere Abläufe, Datenextraktion und Matching.',
    to: '/ki-integration',
  },
  {
    num: '05',
    title: 'API-Integration',
    desc: 'Ich verbinde Ihre Systeme zum Beispiel Shopify, Weclapp, Billbee, Keycloak, Mailjet oder Google.',
    to: '/api-integration',
  },
  {
    num: '06',
    title: 'DevOps & Infrastruktur',
    desc: 'Ich kümmere mich um Deployment und Hosting mit Docker, Kubernetes und Hetzner sowie um Ihre CI/CD-Pipeline.',
    to: '/devops-infrastruktur',
  },
  {
    num: '07',
    title: 'IT-Beratung',
    desc: 'Praktische IT-Beratung von der ersten Idee bis zur technischen Umsetzung.',
    to: '/it-beratung',
  },
]

export default function Angebot() {
  return (
    <Box component="section" id="angebot" className="section section--angebot" aria-label="Leistungen">
      <Container maxWidth="lg" sx={{ mb: 7, textAlign: 'center' }}>
        <Typography variant="overline" sx={{ color: 'primary.main', display: 'block', mb: 1.5 }}>
          Leistungen
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, color: 'text.primary', mb: 1.5 }}>
          Webentwicklung, Apps & KI was ich für Sie{' '}
          <Box component="span" sx={{ color: 'primary.main' }}>entwickle</Box>
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 520, mx: 'auto' }}>
          Sie erzählen mir, was Sie vorhaben. Gemeinsam klären wir, was sinnvoll ist und wie ich es umsetze.
        </Typography>
      </Container>

      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            border: '1px solid #c7c7cc',
            borderRadius: 2,
            overflow: 'hidden',
            gap: '1px',
            bgcolor: '#c7c7cc',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 6px 20px rgba(0,0,0,0.07)',
          }}
        >
          {services.map((service, index) => {
            const isLast = index === services.length - 1
            const remainder = services.length % 3
            return (
            <Card
              key={service.num}
              sx={{
                borderRadius: 0,
                bgcolor: 'background.paper',
                transition: 'background-color 0.18s',
                '&:hover': { bgcolor: '#f5f5f7' },
                ...(isLast && remainder !== 0 && {
                  gridColumn: {
                    sm: remainder === 1 ? '1 / -1' : 'auto',
                    md: remainder === 1 ? '1 / -1' : 'auto',
                  },
                }),
              }}
            >
              <CardContent sx={{ p: '2rem 2.25rem !important' }}>
                {/* Number as blue accent */}
                <Typography
                  sx={{
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    color: 'primary.main',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    mb: 2,
                    display: 'block',
                  }}
                >
                  {service.num}
                </Typography>
                <Typography
                  variant="h3"
                  sx={{ fontSize: '1rem', fontWeight: 700, color: 'text.primary', mb: 1, lineHeight: 1.3 }}
                >
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem', lineHeight: 1.8 }}>
                  {service.desc}
                </Typography>
                {service.to ? (
                  <Typography sx={{ mt: 1.5, fontSize: '0.875rem', fontWeight: 600 }}>
                    <Link to={service.to} style={{ display: 'inline-flex', alignItems: 'center', minHeight: 32 }}>
                      Mehr erfahren
                    </Link>
                  </Typography>
                ) : null}
              </CardContent>
            </Card>
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}
