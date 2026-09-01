import './App.css'
import { lazy, Suspense, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Angebot from './components/Angebot'
import Preise from './components/Preise'
import UeberMich from './components/UeberMich'
import Referenzen from './components/Referenzen'
import Faq from './components/Faq'
import Kontakt from './components/Kontakt'
import Footer from './components/Footer'
import Seo from './components/Seo'
import { faqs } from './faqData'

// Unterseiten aus dem Haupt-Bundle heraushalten
const Impressum = lazy(() => import('./components/Impressum'))
const Datenschutz = lazy(() => import('./components/Datenschutz'))
const NotFound = lazy(() => import('./components/NotFound'))
const Webdesign = lazy(() => import('./components/services/Webdesign'))
const HomepageErstellen = lazy(() => import('./components/services/HomepageErstellen'))
const KiIntegration = lazy(() => import('./components/services/KiIntegration'))
const FullStackEntwicklung = lazy(() => import('./components/services/FullStackEntwicklung'))
const BackendEntwicklung = lazy(() => import('./components/services/BackendEntwicklung'))
const DevopsInfrastruktur = lazy(() => import('./components/services/DevopsInfrastruktur'))
const ApiIntegration = lazy(() => import('./components/services/ApiIntegration'))
const ItBeratung = lazy(() => import('./components/services/ItBeratung'))

const homeTitle = 'Webentwicklung & Webdesign | Arkvyn – Tim Tolk, Lübeck'
const homeDescription = 'Individuelle Websites, Webanwendungen, KI-Integration und IT-Beratung von Tim Tolk in Lübeck – deutschlandweit remote. Kostenloses Erstgespräch.'

const homeSchemas: Record<string, unknown>[] = [
  {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness'],
    name: 'Arkvyn',
    description: 'Individuelle Webentwicklung, KI-Integration, DevOps und IT-Beratung aus Lübeck – deutschlandweit remote.',
    url: 'https://arkvyn.de',
    logo: 'https://arkvyn.de/logo.png',
    image: 'https://arkvyn.de/og-image.png',
    telephone: '+4917646143387',
    email: 'arkvyn.solutions@proton.me',
    sameAs: ['https://www.linkedin.com/in/tim-tolk-2091a7258'],
    founder: {
      '@type': 'Person',
      name: 'Tim Tolk',
      jobTitle: 'Full-Stack-Softwareentwickler',
      url: 'https://arkvyn.de',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lübeck',
      addressRegion: 'Schleswig-Holstein',
      addressCountry: 'DE',
    },
    areaServed: [{ '@type': 'Country', name: 'Deutschland' }, 'Lübeck', 'Hamburg', 'Schleswig-Holstein'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Softwareentwicklung & IT-Dienstleistungen',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Landingpage-Erstellung' }, priceSpecification: { '@type': 'PriceSpecification', price: '1200', priceCurrency: 'EUR' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business-Website-Entwicklung' }, priceSpecification: { '@type': 'PriceSpecification', price: '2800', priceCurrency: 'EUR' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full-Stack-Entwicklung' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'KI- & LLM-Integration' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DevOps & Infrastruktur' } },
      ],
    },
    priceRange: 'ab 1.200 €',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Arkvyn',
    url: 'https://arkvyn.de',
    description: homeDescription,
    inLanguage: 'de-DE',
    author: { '@type': 'Person', name: 'Tim Tolk' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Tim Tolk',
    jobTitle: 'Full-Stack-Softwareentwickler',
    worksFor: { '@type': 'Organization', name: 'Arkvyn', url: 'https://arkvyn.de' },
    url: 'https://arkvyn.de',
    sameAs: ['https://www.linkedin.com/in/tim-tolk-2091a7258'],
    knowsAbout: ['React', 'TypeScript', 'Node.js', 'Full-Stack-Entwicklung', 'KI-Integration', 'Softwarearchitektur', 'DevOps'],
  },
]

function RouteFocusManager() {
  const { pathname } = useLocation()
  const initialRender = useRef(true)

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
      return
    }

    window.requestAnimationFrame(() => {
      const heading = document.querySelector<HTMLElement>('#main h1')
      if (heading) {
        heading.tabIndex = -1
        heading.focus({ preventScroll: true })
      }
    })
  }, [pathname])

  return null
}

function MainPage() {
  return (
    <>
      <Seo title={homeTitle} description={homeDescription} canonical="https://arkvyn.de/" schemas={homeSchemas} />
      <main id="main" className="main-content">
        <Home />
        <Angebot />
        <Preise />
        <UeberMich />
        <Referenzen />
        <Faq />
        <Kontakt />
      </main>
    </>
  )
}

function App() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' })
    }
  }

  // Deep-Links wie arkvyn.de/#angebot nach dem ersten Render auflösen
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      setTimeout(() => scrollTo(hash), 100)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <RouteFocusManager />
        <a className="skip-link" href="#main">Zum Inhalt springen</a>
        <Navbar scrollTo={scrollTo} />
        <Suspense fallback={<div className="route-loading" role="status">Seite wird geladen…</div>}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/webdesign" element={<Webdesign />} />
            <Route path="/homepage-erstellen-lassen" element={<HomepageErstellen />} />
            <Route path="/ki-integration" element={<KiIntegration />} />
            <Route path="/full-stack-entwicklung" element={<FullStackEntwicklung />} />
            <Route path="/backend-entwicklung" element={<BackendEntwicklung />} />
            <Route path="/devops-infrastruktur" element={<DevopsInfrastruktur />} />
            <Route path="/api-integration" element={<ApiIntegration />} />
            <Route path="/it-beratung" element={<ItBeratung />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer scrollTo={scrollTo} />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
