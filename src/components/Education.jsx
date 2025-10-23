import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

const Education = ({ darkMode }) => {
  const education = [
    {
      degree: 'MSc Cybersecurity & Artificial Intelligence',
      institution: 'University of Sheffield',
      location: 'Sheffield, UK',
      period: '2023 - 2025',
      status: 'Completed',
      highlights: [
        'Cryptography',
        'Machine Learning and Adaptive Intelligence',
        'Cyber Threat Hunting and Digital Forensics',
        'Development of Secure Software','Fundamental Security Properties','Security of Controls and Embedded Systems'
      ],
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Amity University',
      location: 'Kolkata, India',
      period: '2019 - 2023',
      status: 'Completed',
      highlights: [
        'Software Engineering and Modeling',
        'Database Management and Networking',
        'Software Engineering Principles',
        'Cybersecurity Fundamentals',
      ],
    },
  ]

  return (
    <section id="education" className={`py-20 px-4 ${darkMode ? 'bg-dark-secondary' : 'bg-gradient-to-b from-white/30 to-transparent'}`}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="terminal-text text-primary">~/education</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            <span className="text-gradient">cat academic_credentials.txt</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass rounded-xl p-6 md:p-8 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gradient mb-1">
                        {edu.degree}
                      </h3>
                      <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{edu.institution}</p>
                    </div>
                  </div>

                  <div className={`flex flex-wrap gap-4 text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 terminal-text">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{edu.period}</span>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        edu.status === 'In Progress'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-green-500/20 text-green-400'
                      }`}
                    >
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="ml-0 md:ml-14">
                <h4 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Key Areas:</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i} className={`flex items-start space-x-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <span className="text-primary mt-1">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
