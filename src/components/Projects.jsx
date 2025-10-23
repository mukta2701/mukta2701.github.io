import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import SectionMatrixRain from './SectionMatrixRain'

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: 'Security Threat Analysis of Electrical Grid',
      description: 'Designed layered ICS defenses using NIST cybersecurity framework and DNP3-SA protocol analysis. Implemented cryptographic key rotation strategy for SCADA systems.',
      tech: ['NIST', 'DNP3-SA', 'ICS Security', 'Cryptography', 'SCADA'],
      github: '#',
      demo: '#',
    },
    {
      title: 'RFID Security & STRIDE Threat Modelling',
      description: 'Assessed Implantable Medical Device (IMD) threats using STRIDE methodology. Proposed cryptographic mitigations for RFID vulnerabilities in healthcare devices.',
      tech: ['STRIDE', 'RFID', 'Healthcare Security', 'Threat Modeling'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Privacy Threat Modelling - DP3T Protocol',
      description: 'Evaluated privacy risks in contact tracing systems using DREAD and CVSS scoring. Analyzed cryptographic privacy guarantees of decentralized protocols.',
      tech: ['DREAD', 'CVSS', 'Privacy Engineering', 'Cryptography'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Network Forensics & PCAP Analysis',
      description: 'Mapped network attacks to MITRE ATT&CK framework. Optimized SOC workflows through automated PCAP traffic analysis and threat detection.',
      tech: ['Wireshark', 'MITRE ATT&CK', 'Forensics', 'SOC Operations'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Secure Coding Learning Platform',
      description: 'Built gamified platform for teaching OWASP Top 10 vulnerabilities. Implemented JWT authentication and role-based access control (RBAC).',
      tech: ['OWASP', 'JWT', 'RBAC', 'Python', 'Web Security'],
      github: '#',
      demo: '#',
    },
    {
      title: 'RoboPost Security Analysis',
      description: 'Designed countermeasures for GPS spoofing and RFID tampering in robotic postal delivery systems. Developed secure authentication mechanisms.',
      tech: ['IoT Security', 'GPS Security', 'RFID', 'Authentication'],
      github: '#',
      demo: '#',
    },
    {
      title: 'MITRE ATT&CK ICS Threat Simulation',
      description: 'Simulated advanced persistent threats targeting industrial control systems. Identified and mitigated PLC security vulnerabilities.',
      tech: ['MITRE ATT&CK', 'ICS', 'PLC Security', 'Threat Simulation'],
      github: '#',
      demo: '#',
    },
  ]

  return (
    <section id="projects" className={`relative py-20 px-4 ${darkMode ? 'bg-dark-secondary' : 'bg-gradient-to-b from-white/30 to-transparent'}`}>
      {/* Matrix Rain Effect - Dark Mode Only */}
      {darkMode && <SectionMatrixRain opacity={0.18} />}

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="terminal-text text-primary">~/projects</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            <span className="text-gradient">ls -la ./projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-xl p-6 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold mb-3 text-gradient group-hover:scale-105 transition-transform">
                {project.title}
              </h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="terminal-text text-xs px-3 py-1 glass rounded-full text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className={`flex items-center space-x-2 hover:text-primary transition-colors ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.demo}
                  className={`flex items-center space-x-2 hover:text-primary transition-colors ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                >
                  <ExternalLink className="w-5 h-5" />
                  <span className="text-sm">Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
