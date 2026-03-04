import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Angebot from './components/Angebot'
import Preise from './components/Preise'
import UeberMich from './components/UeberMich'
import Kontakt from './components/Kontakt'
import Footer from './components/Footer'
import Impressum from './components/Impressum'
import Datenschutz from './components/Datenschutz'

function MainPage({ scrollTo }: { scrollTo: (id: string) => void }) {
  return (
    <main className="main-content">
      <Home scrollTo={scrollTo} />
      <Angebot />
      <Preise />
      <UeberMich />
      <Kontakt />
    </main>
  )
}

function App() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const navHeight = 72
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <BrowserRouter>
      <Navbar scrollTo={scrollTo} />

      <Routes>
        <Route path="/" element={<MainPage scrollTo={scrollTo} />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>

      <Footer scrollTo={scrollTo} />
    </BrowserRouter>
  )
}

export default App
