import { Terminal, Heart } from 'lucide-react'

const Footer = ({ darkMode }) => {
  return (
    <footer className={`border-t py-8 px-4 ${darkMode ? 'bg-dark-secondary border-white/10' : 'bg-white/40 border-gray-200'}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Terminal className="w-5 h-5 text-primary" />
            <span className={`terminal-text ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2025 Mukta Choudhury. All rights reserved.
            </span>
          </div>

          <div className={`flex items-center space-x-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>

        <div className={`mt-4 text-center terminal-text text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
          <p>$ last_updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
