import { useEffect, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
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
    areaServed: [{ '@type': 'Country', name: 'Deutschland' }, 'Lübeck', 'Hamburg', 'Kiel', 'Schleswig-Holstein'],
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

      <main id="main" className="page-main">
        {/* Hero */}
        <section className="page-hero surface--light" data-surface="light">
          <div className="container">
            <nav className="breadcrumb" aria-label="Brotkrumen">
              <Link to="/">Startseite</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{serviceName}</span>
            </nav>
            <p className="eyebrow" data-reveal="fade">{eyebrow}</p>
            <h1 data-reveal="blur">{h1}</h1>
            <p className="page-hero__intro" data-reveal="fade">{intro}</p>
            <div className="btn-row" data-reveal="lift">
              <a href="/#kontakt" className="btn btn--ink">Kostenloses Erstgespräch</a>
              <a href="/#preise" className="btn btn--ghost">Preise ansehen</a>
            </div>
          </div>
        </section>

        {/* Inhalt */}
        <section className="section surface--grey" data-surface="grey" aria-label={`${serviceName} im Detail`}>
          <div className="container">
            <div className="article">
              {sections.map(section => (
                <section key={section.h2} className="article__block" data-reveal="lift">
                  <h2>{section.h2}</h2>
                  <div className="article__body">
                    {section.paragraphs.map(p => (
                      <p key={p.slice(0, 40)}>{p}</p>
                    ))}
                    {section.bullets ? (
                      <ul className="check-list">
                        {section.bullets.map(item => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </section>
              ))}

              {priceText ? (
                <section className="article__block article__block--price" data-reveal="lift">
                  <h2>Was kostet das?</h2>
                  <div className="article__body">
                    <p>
                      {priceText}{' '}
                      Alle Pakete und Konditionen finden Sie unter{' '}
                      <a href="/#preise" className="text-link">Preise &amp; Pakete</a>.
                    </p>
                  </div>
                </section>
              ) : null}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section surface--dark" data-surface="dark" aria-labelledby="service-cta">
          <div className="container cta">
            <div>
              <h2 id="service-cta" data-reveal="blur">Sprechen Sie mit mir über Ihr Projekt</h2>
              <p data-reveal="fade">
                Schildern Sie mir Ihr Vorhaben in einem kostenlosen Erstgespräch.
                Ich melde mich innerhalb von 24 Stunden.
              </p>
            </div>
            <a href="/#kontakt" className="btn btn--light" data-reveal="lift">
              Jetzt Kontakt aufnehmen
            </a>
          </div>
          <div className="container related">
            <h2 className="related__title">Weitere Leistungen</h2>
            <ul>
              {relatedLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}
