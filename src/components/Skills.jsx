import { motion } from 'framer-motion'
import SectionMatrixRain from './SectionMatrixRain'

const Skills = ({ darkMode }) => {
  const skillCategories = [
    {
      title: 'Security Frameworks',
      skills: ['NIST CSF', 'MITRE ATT&CK', 'OWASP Top 10', 'STRIDE', 'DREAD', 'CVSS'],
    },
    {
      title: 'Technical Skills',
      skills: ['Python', 'Network Security', 'SIEM Tools', 'Threat Modeling', 'Cloud Security', 'Cryptography'],
    },
    {
      title: 'Security Operations',
      skills: ['SOC Analysis', 'Incident Response', 'PCAP Analysis', 'Forensics', 'Vulnerability Assessment', 'Risk Assessment'],
    },
    {
      title: 'Specialized Domains',
      skills: ['ICS Security', 'IoT Security', 'Healthcare Security', 'Privacy Engineering', 'Secure Coding', 'Compliance'],
    },
    {
      title: 'Tools & Technologies',
      skills: ['Wireshark', 'Splunk', 'Metasploit', 'Burp Suite', 'Nmap', 'Nessus'],
    },
    {
      title: 'Soft Skills',
      skills: ['Communication', 'Problem Solving', 'Client Engagement', 'Documentation', 'Team Collaboration'],
    },
  ]

  return (
    <section id="skills" className={`relative py-20 px-4 ${darkMode ? 'bg-dark-secondary' : 'bg-gradient-to-b from-transparent to-white/30'}`}>
      {/* Matrix Rain Effect - Dark Mode Only */}
      {darkMode && <SectionMatrixRain opacity={0.18} />}

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="terminal-text text-primary">~/skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            <span className="text-gradient">cat /proc/expertise</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-gradient">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 glass rounded-lg terminal-text text-sm hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
