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
    desc: 'Professionelles Webdesign und Webentwicklung für Unternehmen in ganz Deutschland – von der modernen Landing Page bis zur komplexen Webanwendung.',
    to: '/webdesign',
  },
  {
    num: '02',
    title: 'Full-Stack Entwicklung',
    desc: 'Moderne Webanwendungen mit React, TypeScript und Node.js, von responsiven Frontends bis zu skalierbaren REST-APIs und Backend-Services.',
  },
  {
    num: '03',
    title: 'Backend & Datenarchitektur',
    desc: 'Robuste Backend-Systeme mit Java, Go, Python oder Node.js, inklusive Datenbankdesign (PostgreSQL, MongoDB) und ETL-Pipelines.',
  },
  {
    num: '04',
    title: 'AI & Automatisierung',
    desc: 'Integration von LLMs in Backend und Frontend, automatisierte Workflows, Datenextraktion und intelligente Matching-Systeme.',
    to: '/ki-integration',
  },
  {
    num: '05',
    title: 'API-Integration',
    desc: 'Anbindung komplexer Drittanbieter-Systeme wie Shopify, Weclapp, Billbee, Keycloak, Mailjet, Google und mehr.',
  },
  {
    num: '06',
    title: 'DevOps & Infrastruktur',
    desc: 'Deployment und Hosting mit Docker, Kubernetes und Hetzner, CI/CD mit GitLab, TeamCity und Bitbucket.',
  },
  {
    num: '07',
    title: 'IT-Beratung',
    desc: 'Strategische Beratung für Digitalisierungsprojekte von der Konzeption bis zur erfolgreichen Umsetzung.',
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
          Webentwicklung, Apps & KI – was ich für Sie{' '}
          <Box component="span" sx={{ color: 'primary.main' }}>entwickle</Box>
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 520, mx: 'auto' }}>
          Individuelle Lösungen für Ihre digitalen Herausforderungen von der Idee bis zur Umsetzung.
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
                    <Link to={service.to}>Mehr erfahren →</Link>
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
