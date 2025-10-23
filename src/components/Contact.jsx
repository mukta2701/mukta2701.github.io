import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, User, MessageSquare, Download, Linkedin, Github } from 'lucide-react'

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add form submission logic here
    alert('Message sent! (This is a demo)')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className={`py-20 px-4 ${darkMode ? '' : 'bg-gradient-to-b from-transparent to-white/30'}`}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="terminal-text text-primary">~/contact</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            <span className="text-gradient">echo "Get In Touch"</span>
          </h2>
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Interested in collaborating or have a security project in mind? Let's connect and discuss how we can work together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="flex items-center space-x-2 text-sm font-medium mb-2">
                <User className="w-4 h-4 text-primary" />
                <span>Name</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all terminal-text"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="flex items-center space-x-2 text-sm font-medium mb-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>Email</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all terminal-text"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="flex items-center space-x-2 text-sm font-medium mb-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span>Message</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all terminal-text resize-none"
                placeholder="Tell me about your project or inquiry..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-shadow flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </motion.button>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Connect with me on:</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <motion.a
              href="https://linkedin.com/in/mukta-choudhury"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass px-6 py-3 rounded-lg hover:bg-white/10 transition-colors terminal-text flex items-center space-x-2"
            >
              <Linkedin className="w-5 h-5 text-primary" />
              <span>LinkedIn</span>
            </motion.a>
            <motion.a
              href="https://github.com/mukta2701"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass px-6 py-3 rounded-lg hover:bg-white/10 transition-colors terminal-text flex items-center space-x-2"
            >
              <Github className="w-5 h-5 text-primary" />
              <span>GitHub</span>
            </motion.a>
            <motion.a
              href="mailto:mchoudhury1004@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="glass px-6 py-3 rounded-lg hover:bg-white/10 transition-colors terminal-text flex items-center space-x-2"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span>Email</span>
            </motion.a>
          </div>

          {/* Download CV Button */}
          <motion.a
            href="/cv/Mukta_Choudhury_CV.pdf"
            download
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-shadow"
          >
            <Download className="w-5 h-5" />
            <span>Download CV</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
