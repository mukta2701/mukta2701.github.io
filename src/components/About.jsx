import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Search, Cog, TrendingUp, Lock, Server, Code2, Zap, Target, Plane, ShieldCheck, Network, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const About = ({ darkMode }) => {
  const [isJourneyExpanded, setIsJourneyExpanded] = useState(false)

  const roles = [
    { icon: Shield, label: 'Security Analyst', position: 'center' },
    { icon: Search, label: 'Threat Hunter', position: 'top' },
    { icon: Lock, label: 'Defense Strategist', position: 'top-right' },
    { icon: Cog, label: 'System Hardener', position: 'bottom-right' },
    { icon: TrendingUp, label: 'Risk Assessor', position: 'bottom' },
    { icon: Server, label: 'ICS Security', position: 'bottom-left' },
  ]

  const highlights = [
    { icon: Code2, title: 'Practical Defense', description: 'Building real-world security solutions' },
    { icon: Zap, title: 'Threat Modelling', description: 'Identifying vulnerabilities before they strike' },
    { icon: Target, title: 'Security Simplification', description: 'Making complex concepts accessible' },
  ]

  const codeSnippet = `class CybersecurityAnalyst:
    def __init__(self):
        self.name = "Mukta Choudhury"
        self.role = "Graduate Cybersecurity Analyst"
        self.passion = [
            "Practical Defense",
            "Threat Modelling",
            "Security Simplification"
        ]
        self.mission = "Design defenses that make systems stronger"

    def get_expertise(self):
        return {
            "focus": "Threat Analysis & Defense Strategy",
            "approach": "Repeatable Playbooks & Team Security",
            "specialization": "ICS Security & MITRE ATT&CK"
        }`

  return (
    <section id="about" className={`py-24 px-4 relative overflow-hidden ${darkMode ? 'bg-dark-secondary' : 'bg-gradient-to-b from-transparent to-white/30'}`}>
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="terminal-text text-primary text-sm tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            ~/about
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mt-3 mb-6">
            <span className="text-gradient">whoami</span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content - Left Side (2/3 width) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Code Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl overflow-hidden shadow-2xl hover:shadow-primary/20 transition-all duration-500 group"
            >
              <div className={`px-5 py-4 flex items-center justify-between border-b ${darkMode ? 'bg-dark-tertiary border-white/10' : 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200/50'}`}>
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <motion.div
                      className="w-3 h-3 rounded-full bg-red-500"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div
                      className="w-3 h-3 rounded-full bg-yellow-500"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div
                      className="w-3 h-3 rounded-full bg-green-500"
                      whileHover={{ scale: 1.2 }}
                    />
                  </div>
                  <span className={`terminal-text font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    profile.py
                  </span>
                </div>
                <div className={`terminal-text text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  Python 3.11
                </div>
              </div>
              <pre className="p-8 terminal-text text-sm overflow-x-auto leading-relaxed">
                <code className={`${darkMode ? 'text-green-400' : 'text-green-700'} transition-colors`}>
                  {codeSnippet}
                </code>
              </pre>
            </motion.div>

            {/* Description - Clean Typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 px-1"
            >
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I'm a cybersecurity graduate passionate about <span className="text-primary font-bold">practical defense</span>, <span className="text-primary font-bold">threat modelling</span>, and making complex security concepts simple to understand.
              </p>

              {/* Personal Journey Callout - Collapsible */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className={`rounded-xl border px-4 py-3 ${
                  darkMode
                    ? 'border-zinc-800/60 bg-zinc-950/60 backdrop-blur'
                    : 'border-gray-300/60 bg-white/60 backdrop-blur'
                }`}
              >
                {/* Header Row with Toggle */}
                <button
                  onClick={() => setIsJourneyExpanded(!isJourneyExpanded)}
                  className="w-full flex items-center justify-between group cursor-pointer"
                  aria-expanded={isJourneyExpanded}
                  aria-label="Toggle personal journey story"
                >
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-medium ${darkMode ? 'text-zinc-400' : 'text-gray-600'}`}>
                      My Journey: 🇮🇳 → 🇬🇧
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs ${darkMode ? 'text-zinc-500' : 'text-gray-500'} group-hover:${darkMode ? 'text-zinc-400' : 'text-gray-600'} transition-colors`}>
                      {isJourneyExpanded ? 'Hide' : 'Read 30-sec story'}
                    </span>
                    <motion.div
                      animate={{ rotate: isJourneyExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className={`w-4 h-4 ${darkMode ? 'text-zinc-500' : 'text-gray-500'}`} />
                    </motion.div>
                  </div>
                </button>

                {/* Tiny Map Arc (Always Visible) */}
                <div className="mt-3 flex justify-center">
                  <svg
                    width="160"
                    height="40"
                    viewBox="0 0 160 40"
                    className="overflow-visible"
                    role="img"
                    aria-label="Journey path from India to UK"
                  >
                    {/* Curved dotted path */}
                    <motion.path
                      d="M 10 35 Q 80 5, 150 35"
                      fill="none"
                      stroke={darkMode ? 'rgba(96, 165, 250, 0.6)' : 'rgba(59, 130, 246, 0.5)'}
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />

                    {/* Start point (India - Emerald) */}
                    <circle
                      cx="10"
                      cy="35"
                      r="4"
                      fill="#10b981"
                      className="drop-shadow-lg"
                    />

                    {/* End point (UK - Blue) */}
                    <circle
                      cx="150"
                      cy="35"
                      r="4"
                      fill="#3b82f6"
                      className="drop-shadow-lg"
                    />

                    {/* Animated traveling node (only when expanded) */}
                    <AnimatePresence>
                      {isJourneyExpanded && (
                        <motion.circle
                          cx="0"
                          cy="0"
                          r="5"
                          fill={darkMode ? '#60a5fa' : '#3b82f6'}
                          initial={{ offsetDistance: '0%', opacity: 0 }}
                          animate={{
                            offsetDistance: '100%',
                            opacity: [0, 1, 1, 0]
                          }}
                          exit={{ opacity: 0 }}
                          transition={{
                            duration: 2,
                            ease: "easeInOut",
                            opacity: { times: [0, 0.1, 0.9, 1] }
                          }}
                          style={{
                            offsetPath: 'path("M 10 35 Q 80 5, 150 35")'
                          }}
                        >
                          <animate
                            attributeName="r"
                            values="5;7;5"
                            dur="1s"
                            repeatCount="indefinite"
                          />
                        </motion.circle>
                      )}
                    </AnimatePresence>
                  </svg>
                </div>

                {/* Expandable Content */}
                <AnimatePresence>
                  {isJourneyExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 space-y-4">
                        {/* Story Paragraph */}
                        <p className={`text-sm leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-gray-700'}`}>
                          I came to the UK from India as an international student. New city, new systems — same mission: <span className="font-semibold text-primary">practical defense</span>. Between part-time work, late labs, and culture shifts, I learned to turn challenges into <span className="font-semibold text-secondary">repeatable playbooks</span> and kept building toward becoming a world-class cybersecurity analyst.
                        </p>

                        {/* Micro-facts Row */}
                        <div className="flex flex-wrap gap-2">
                          <span className={`text-xs inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 border ${
                            darkMode
                              ? 'text-zinc-400 bg-zinc-900/60 border-zinc-800/60'
                              : 'text-gray-600 bg-gray-50 border-gray-300/60'
                          }`}>
                            <Plane className="w-3 h-3" />
                            8,000 km traveled
                          </span>
                          <span className={`text-xs inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 border ${
                            darkMode
                              ? 'text-zinc-400 bg-zinc-900/60 border-zinc-800/60'
                              : 'text-gray-600 bg-gray-50 border-gray-300/60'
                          }`}>
                            <ShieldCheck className="w-3 h-3" />
                            SOC Analyst Path
                          </span>
                          <span className={`text-xs inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 border ${
                            darkMode
                              ? 'text-zinc-400 bg-zinc-900/60 border-zinc-800/60'
                              : 'text-gray-600 bg-gray-50 border-gray-300/60'
                          }`}>
                            <Network className="w-3 h-3" />
                            ICS / MITRE ATT&CK
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                My journey started with curiosity about how systems fail — and grew into a mission to design defenses that make them stronger.
              </p>
              <div className={`border-l-4 border-primary pl-6 py-2 ${darkMode ? 'bg-primary/5' : 'bg-primary/10'} rounded-r-lg`}>
                <p className={`text-lg italic leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  I enjoy building <span className="text-secondary font-bold">repeatable playbooks</span>, analyzing threats, and helping teams stay secure. My approach combines academic rigor with hands-on experience, focusing on real-world applications of security frameworks like <span className="font-semibold">NIST, MITRE ATT&CK, and OWASP</span>.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Role Badges - Right Side (1/3 width) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-1 space-y-4"
          >
            {/* Main Role Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass rounded-2xl p-8 text-center bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Shield className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                Security Analyst
              </h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Core Specialization
              </p>
            </motion.div>

            {/* Additional Roles */}
            <div className="space-y-3">
              {roles.slice(1).map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="glass rounded-xl p-4 flex items-center space-x-4 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                    <role.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-semibold text-sm ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      {role.label}
                    </h4>
                  </div>
                  <motion.div
                    className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    →
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Stats or Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className={`glass rounded-xl p-6 text-center ${darkMode ? 'bg-primary/5' : 'bg-primary/10'}`}
            >
              <div className="text-3xl font-bold text-gradient mb-2">6+</div>
              <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Security Domains
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
