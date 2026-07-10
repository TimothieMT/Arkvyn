import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Angebot from './components/Angebot'
import Preise from './components/Preise'
import UeberMich from './components/UeberMich'
import Faq from './components/Faq'
import Kontakt from './components/Kontakt'
import Footer from './components/Footer'
import Impressum from './components/Impressum'
import Datenschutz from './components/Datenschutz'
import NotFound from './components/NotFound'

function MainPage({ scrollTo }: { scrollTo: (id: string) => void }) {
  return (
    <>
      <Helmet>
        <title>Arkvyn – Full-Stack Softwareentwicklung aus Lübeck | Tim Tolk</title>
        <meta name="description" content="Arkvyn – Maßgeschneiderte Softwarelösungen von Tim Tolk, Full-Stack Entwickler aus Lübeck. React, TypeScript, Node.js, AI-Integration, DevOps & IT-Beratung. Jetzt Erstgespräch vereinbaren." />
        <link rel="canonical" href="https://arkvyn.de/" />
      </Helmet>
      <main className="main-content">
        <Home scrollTo={scrollTo} />
        <Angebot />
        <Preise />
        <UeberMich />
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
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar scrollTo={scrollTo} />
        <Routes>
          <Route path="/" element={<MainPage scrollTo={scrollTo} />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer scrollTo={scrollTo} />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
