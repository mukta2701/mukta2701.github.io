import { useEffect, useRef, useState } from 'react'

const SectionMatrixRain = ({ opacity = 0.15 }) => {
  const canvasRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const updateSize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    updateSize()

    // Reduce complexity on mobile
    const chars = isMobile ? '01' : '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン10'
    const fontSize = isMobile ? 12 : 14
    const columns = canvas.width / fontSize
    const drops = Array.from({ length: Math.floor(columns) }, () => Math.random() * -50)

    const draw = () => {
      // Fade effect
      ctx.fillStyle = 'rgba(10, 10, 15, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw characters
      drops.forEach((y, i) => {
        const text = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize

        // Simplified gradient for mobile, full gradient for desktop
        if (isMobile) {
          ctx.fillStyle = 'rgba(0, 255, 70, 0.6)'
        } else {
          const gradient = ctx.createLinearGradient(0, y * fontSize - 15, 0, y * fontSize)
          gradient.addColorStop(0, 'rgba(0, 255, 70, 0.2)')
          gradient.addColorStop(1, 'rgba(0, 255, 70, 0.8)')
          ctx.fillStyle = gradient
        }

        ctx.font = `${fontSize}px monospace`
        ctx.fillText(text, x, y * fontSize)

        // Occasional blue accent (less frequent on mobile)
        if (!isMobile && Math.random() > 0.97) {
          ctx.fillStyle = 'rgba(59, 130, 246, 0.6)'
          ctx.fillText(text, x, y * fontSize)
        }

        // Reset drop
        if (y * fontSize > canvas.height && Math.random() > 0.98) {
          drops[i] = 0
        }
        drops[i]++
      })
    }

    // Lower frame rate on mobile (60ms instead of 40ms)
    const interval = setInterval(draw, isMobile ? 60 : 40)

    const handleResize = () => {
      updateSize()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [isMobile])

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{
        opacity: opacity,
        zIndex: 0
      }}
    />
  )
}

export default SectionMatrixRain
