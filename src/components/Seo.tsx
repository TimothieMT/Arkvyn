import type { ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'

interface SeoProps {
  title: string
  description?: string
  canonical?: string
  robots?: string
  schemas?: Record<string, unknown>[]
  social?: boolean
  children?: ReactNode
}

const SOCIAL_IMAGE = 'https://arkvyn.de/og-image.png'

export default function Seo({
  title,
  description,
  canonical,
  robots = 'index, follow',
  schemas = [],
  social = true,
  children,
}: SeoProps) {
  const showSocial = Boolean(social && canonical && description)

  return (
    <Helmet>
      <title>{title}</title>
      {description ? <meta name="description" content={description} /> : null}
      <meta name="robots" content={robots} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}

      {showSocial ? <meta property="og:type" content="website" /> : null}
      {showSocial ? <meta property="og:url" content={canonical} /> : null}
      {showSocial ? <meta property="og:title" content={title} /> : null}
      {showSocial ? <meta property="og:description" content={description} /> : null}
      {showSocial ? <meta property="og:image" content={SOCIAL_IMAGE} /> : null}
      {showSocial ? <meta property="og:image:width" content="1200" /> : null}
      {showSocial ? <meta property="og:image:height" content="630" /> : null}
      {showSocial ? <meta property="og:image:alt" content={`${title} – Arkvyn`} /> : null}
      {showSocial ? <meta property="og:locale" content="de_DE" /> : null}
      {showSocial ? <meta property="og:site_name" content="Arkvyn" /> : null}

      {showSocial ? <meta name="twitter:card" content="summary_large_image" /> : null}
      {showSocial ? <meta name="twitter:url" content={canonical} /> : null}
      {showSocial ? <meta name="twitter:title" content={title} /> : null}
      {showSocial ? <meta name="twitter:description" content={description} /> : null}
      {showSocial ? <meta name="twitter:image" content={SOCIAL_IMAGE} /> : null}

      {schemas.map((schema, index) => (
        <script key={`${String(schema['@type'])}-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
      {children}
    </Helmet>
  )
}
