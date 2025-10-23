import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const Experience = ({ darkMode }) => {
  const experiences = [
    {
      title: 'Cybersecurity Intern',
      company: 'Vehere',
      period: '2025',
      description: 'Supported enterprise clients in cyber defense strategy implementation and security framework adoption. Mapped business requirements to technical security solutions.',
      achievements: [
        'Supported 75+ client engagements across diverse industries',
        'Mapped business requirements to cyber defense strategies',
        'Improved proposal conversion rate by 13% through strategic security recommendations',
        'Contributed to security assessment frameworks and threat modeling processes',
      ],
    },
    {
      title: 'Student Support Worker',
      company: 'University of Sheffield',
      period: '2024 - 2025',
      description: 'Delivered structured communication and maintained process integrity across accessibility and compliance operations.',
      achievements: [
        'Managed accessibility compliance workflows',
        'Ensured data privacy and confidentiality standards',
        'Streamlined communication processes for support services',
        'Maintained documentation integrity and audit trails',
      ],
    },
  ]

  return (
    <section id="experience" className={`py-20 px-4 ${darkMode ? '' : 'bg-white/20'}`}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="terminal-text text-primary">~/experience</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            <span className="text-gradient">cat work_history.log</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass rounded-xl p-6 md:p-8 hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gradient mb-1">{exp.title}</h3>
                  <div className={`flex items-center space-x-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className={`flex items-center space-x-2 mt-2 md:mt-0 terminal-text ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{exp.description}</p>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className={`flex items-start space-x-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span className="text-primary mt-1">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
