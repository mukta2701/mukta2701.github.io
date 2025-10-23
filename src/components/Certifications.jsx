import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

const Certifications = ({ darkMode }) => {
  const certifications = [
    {
      name: 'SOC Level 1',
      issuer: 'TryHackMe',
      date: '2024',
      link: '#',
      status: 'Completed',
    },
    {
      name: 'Pre-Security',
      issuer: 'TryHackMe',
      date: '2024',
      link: '#',
      status: 'Completed',
    },
    {
      name: 'Shields Up: Cybersecurity',
      issuer: 'AIG (Forage)',
      date: '2024',
      link: '#',
      status: 'Completed',
    },
    {
      name: 'Security+ (SY0-701)',
      issuer: 'CompTIA',
      date: 'In Progress',
      link: '#',
      status: 'In Progress',
    },
  ]

  return (
    <section id="certifications" className={`py-20 px-4 ${darkMode ? '' : 'bg-white/20'}`}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="terminal-text text-primary">~/certifications</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            <span className="text-gradient">cat credentials.txt</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="glass rounded-xl p-6 text-center hover:shadow-xl hover:shadow-secondary/20 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-br from-primary to-secondary rounded-full">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="font-bold mb-2 text-lg">{cert.name}</h3>
              <p className={`text-sm mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{cert.issuer}</p>
              <p className="terminal-text text-primary text-xs mb-2">{cert.date}</p>
              {cert.status === 'In Progress' && (
                <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs mb-3">
                  {cert.status}
                </span>
              )}
              {cert.status === 'Completed' && (
                <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs mb-3">
                  {cert.status}
                </span>
              )}
              <a
                href={cert.link}
                className={`inline-flex items-center space-x-1 text-sm hover:text-primary transition-colors ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
              >
                <span>View</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
