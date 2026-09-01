import { useEffect, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Seo from '../Seo'

export interface ServiceSection {
  h2: string
  paragraphs: string[]
  bullets?: string[]
}

export interface ServicePageProps {
  metaTitle: string
  metaDescription: string
  canonical: string
  eyebrow: string
  h1: ReactNode
  intro: string
  sections: ServiceSection[]
  serviceName: string
  serviceDescription: string
  priceText?: string
  relatedLinks: { to: string; label: string }[]
}

export default function ServicePage({
  metaTitle, metaDescription, canonical, eyebrow, h1, intro,
  sections, serviceName, serviceDescription, priceText, relatedLinks,
}: ServicePageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    url: canonical,
    areaServed: [{ '@type': 'Country', name: 'Deutschland' }, 'Lübeck', 'Hamburg', 'Schleswig-Holstein'],
    provider: { '@type': 'ProfessionalService', name: 'Arkvyn', url: 'https://arkvyn.de' },
  }
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://arkvyn.de/' },
      { '@type': 'ListItem', position: 2, name: serviceName, item: canonical },
    ],
  }

  return (
    <>
      <Seo
        title={metaTitle}
        description={metaDescription}
        canonical={canonical}
        schemas={[serviceLd, breadcrumbLd]}
      />

      <Box component="main" id="main" sx={{ pt: '72px' }}>
        {/* Hero */}
        <Box component="section" sx={{ py: { xs: 8, md: 11 }, textAlign: 'center' }}>
          <Container maxWidth="md">
            <Typography variant="overline" sx={{ color: 'primary.main', display: 'block', mb: 1.5 }}>
              {eyebrow}
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.25rem', md: '3.25rem' }, color: 'text.primary', mb: 2.5 }}>
              {h1}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 640, mx: 'auto', fontSize: '1.0625rem' }}>
              {intro}
            </Typography>
            <Button variant="contained" component="a" href="/#kontakt" sx={{ mt: 4 }}>
              Kostenloses Erstgespräch →
            </Button>
          </Container>
        </Box>

        <Divider />

        {/* Inhalt */}
        <Container maxWidth="md" sx={{ py: { xs: 6, md: 8 } }}>
          {sections.map((section, i) => (
            <Box key={section.h2} component="section" sx={{ mb: i < sections.length - 1 ? 6 : 0 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, color: 'text.primary', mb: 2 }}>
                {section.h2}
              </Typography>
              {section.paragraphs.map(p => (
                <Typography key={p.slice(0, 40)} variant="body1" sx={{ color: 'text.secondary', mb: 1.75 }}>
                  {p}
                </Typography>
              ))}
              {section.bullets ? (
                <Box component="ul" sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 1, p: 0 }}>
                  {section.bullets.map(item => (
                    <Box
                      component="li"
                      key={item}
                      sx={{ display: 'flex', gap: 1.5, color: 'text.secondary', lineHeight: 1.6, alignItems: 'flex-start' }}
                    >
                      <Box component="span" sx={{ color: 'primary.main', fontWeight: 700, flexShrink: 0, fontSize: '0.85rem', mt: '3px' }}>✓</Box>
                      {item}
                    </Box>
                  ))}
                </Box>
              ) : null}
            </Box>
          ))}

          {priceText ? (
            <Box
              sx={{
                mt: 6,
                p: { xs: 3, md: 4 },
                bgcolor: '#f0f5ff',
                border: '1px solid #d0d8f0',
                borderRadius: 2,
              }}
            >
              <Typography variant="h2" sx={{ fontSize: '1.25rem', color: 'text.primary', mb: 1.5 }}>
                Was kostet das?
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {priceText}{' '}
                Alle Pakete und Konditionen finden Sie unter{' '}
                <Box component="a" href="/#preise" sx={{ fontWeight: 600 }}>Preise &amp; Pakete</Box>.
              </Typography>
            </Box>
          ) : null}

          {/* CTA */}
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, color: 'text.primary', mb: 2 }}>
              Lassen Sie uns über Ihr Projekt sprechen
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 520, mx: 'auto', mb: 3 }}>
              Schildern Sie mir Ihr Vorhaben in einem kostenlosen Erstgespräch –
              ich melde mich innerhalb von 24 Stunden.
            </Typography>
            <Button variant="contained" component="a" href="/#kontakt">
              Jetzt Kontakt aufnehmen
            </Button>
          </Box>

          {/* Weiterführende Leistungen */}
          <Divider sx={{ my: 6 }} />
          <Typography sx={{ fontSize: '0.8rem', color: 'text.disabled', textTransform: 'uppercase', letterSpacing: '0.1em', mb: 1.5 }}>
            Weitere Leistungen
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            {relatedLinks.map(link => (
              <Link key={link.to} to={link.to} style={{ fontSize: '0.9375rem', fontWeight: 600 }}>
                {link.label} →
              </Link>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  )
}
