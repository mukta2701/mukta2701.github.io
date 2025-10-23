import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MatrixRain from './components/MatrixRain'
import BinaryBackground from './components/BinaryBackground'
import SecurityStatus from './components/SecurityStatus'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <div className={`relative min-h-screen transition-colors duration-300 ${
      darkMode
        ? 'bg-[#0a0a0f] text-gray-100'
        : 'bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/40 text-gray-900'
    }`}>
      {/* Only show full-screen effects on desktop for better mobile performance */}
      {darkMode && !isMobile && <BinaryBackground />}
      {darkMode && !isMobile && <MatrixRain />}
      <SecurityStatus />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Certifications darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default App
