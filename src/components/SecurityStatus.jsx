import { useState, useEffect } from 'react'
import { Shield, Activity, Lock, AlertTriangle } from 'lucide-react'
import { motion } from 'framer-motion'

const SecurityStatus = () => {
  const [status, setStatus] = useState('secure')
  const [uptime, setUptime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const formatUptime = (seconds) => {
    const days = Math.floor(seconds / 86400)
    const hours = Math.floor((seconds % 86400) / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${days}d ${hours}h ${mins}m ${secs}s`
  }

  const statusConfig = {
    secure: {
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/50',
      icon: Shield,
      message: 'All Systems Secure',
    },
    monitoring: {
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/50',
      icon: Activity,
      message: 'Active Monitoring',
    },
    protected: {
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20',
      borderColor: 'border-cyan-500/50',
      icon: Lock,
      message: 'Protected Mode',
    },
  }

  const currentStatus = statusConfig[status]
  const StatusIcon = currentStatus.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-20 right-4 z-40 glass rounded-lg p-3 border ${currentStatus.borderColor} hidden md:block`}
    >
      <div className="flex items-center space-x-3">
        <div className={`${currentStatus.bgColor} p-2 rounded-lg`}>
          <StatusIcon className={`w-5 h-5 ${currentStatus.color}`} />
        </div>
        <div>
          <div className={`text-xs font-semibold ${currentStatus.color}`}>
            {currentStatus.message}
          </div>
          <div className="text-xs text-gray-500 terminal-text">
            Uptime: {formatUptime(uptime)}
          </div>
        </div>
        <div className={`w-2 h-2 rounded-full ${currentStatus.bgColor} ${currentStatus.color} animate-pulse`} />
      </div>
    </motion.div>
  )
}

export default SecurityStatus
