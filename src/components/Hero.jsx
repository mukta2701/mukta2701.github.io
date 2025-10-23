import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Code, Shield, ChevronDown } from 'lucide-react'
import SectionMatrixRain from './SectionMatrixRain'

const Hero = ({ darkMode = true }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentLine, setCurrentLine] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)

  const fullText = [
    '> whoami: Mukta Choudhury | Graduate Cybersecurity Analyst',
    '> mission: Design defenses that make systems stronger',
    '> passion: Practical defense, threat modeling, security simplification',
    '> focus: Turning complex security challenges into robust protection',
    '> approach: Building repeatable playbooks for team security',
    '> specialization: ICS Security, MITRE ATT&CK, Threat Analysis',
    '> education: MSc Cybersecurity & AI @ University of Sheffield',
    '> experience: 75+ client engagements, 13% conversion improvement',
    '> goal: Help teams stay secure through practical defense strategies',
    '> status: Ready to defend digital frontiers 🛡️',
  ]

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % fullText.length
      const fullTextLine = fullText[i]

      if (!isDeleting) {
        // Typing forward
        setDisplayText(fullTextLine.substring(0, displayText.length + 1))

        if (displayText === fullTextLine) {
          setTimeout(() => setIsDeleting(true), 2000) // Pause before deleting
        }
      } else {
        // Deleting
        setDisplayText(fullTextLine.substring(0, displayText.length - 1))

        if (displayText === '') {
          setIsDeleting(false)
          setLoopNum(loopNum + 1)
        }
      }
    }

    const typingSpeed = isDeleting ? 30 : 50
    const timer = setTimeout(handleTyping, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, loopNum])

  const stats = [
    { number: 75, label: 'Client Engagements', suffix: '+' },
    { number: 13, label: '% Conversion Rate', suffix: '%' },
    { number: 7, label: 'Security Projects', suffix: '+' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4">
      {/* Matrix Rain Effect - Dark Mode Only */}
      {darkMode && <SectionMatrixRain opacity={0.2} />}

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="terminal-text text-primary text-sm"
              >
                $ whoami
              </motion.span>
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-gradient">Mukta Choudhury</span>
              </h1>
              <h2 className={`text-2xl md:text-3xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Graduate Cybersecurity Analyst
              </h2>
            </div>

            <p className={`text-lg max-w-2xl leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Defending digital frontiers through threat modeling, security analysis,
              and strategic defense implementations. Passionate about turning complex
              security challenges into robust protection mechanisms.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center glass rounded-lg p-3"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className={`text-xs md:text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-shadow flex items-center space-x-2"
              >
                <Code className="w-5 h-5" />
                <span>View Projects</span>
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 glass rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center space-x-2"
              >
                <Terminal className="w-5 h-5" />
                <span>Initialize Contact</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Content - Terminal Window */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="glass rounded-lg overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className={`px-4 py-3 flex items-center space-x-2 border-b ${darkMode ? 'bg-dark-tertiary border-white/10' : 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200/50'}`}>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className={`terminal-text ml-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>security@mukta:~$</span>
              </div>

              {/* Terminal Content */}
              <div className={`p-6 terminal-text min-h-[300px] flex items-center ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                <div className="w-full">
                  <div className={`mb-4 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    <span>security@mukta:~$</span>
                  </div>
                  <div className="text-lg leading-relaxed">
                    {displayText}
                    <span className={`inline-block w-2 h-5 ml-1 animate-pulse ${darkMode ? 'bg-green-400' : 'bg-green-700'}`} />
                  </div>
                  <div className={`mt-6 text-sm ${darkMode ? 'text-gray-600' : 'text-gray-500'}`}>
                    <p>// Continuous system analysis...</p>
                    <p>// Monitoring threats | Defending systems | Building security</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Icons */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-4 top-10 glass p-4 rounded-lg"
            >
              <Shield className="w-8 h-8 text-primary" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className={`flex flex-col items-center space-y-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <span className="terminal-text text-xs">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
