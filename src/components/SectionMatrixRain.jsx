import { useEffect, useRef } from 'react'

const SectionMatrixRain = ({ opacity = 0.15 }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const updateSize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    updateSize()

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン10'
    const fontSize = 14
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

        // Green with gradient
        const gradient = ctx.createLinearGradient(0, y * fontSize - 15, 0, y * fontSize)
        gradient.addColorStop(0, 'rgba(0, 255, 70, 0.2)')
        gradient.addColorStop(1, 'rgba(0, 255, 70, 0.8)')

        ctx.fillStyle = gradient
        ctx.font = `${fontSize}px monospace`
        ctx.fillText(text, x, y * fontSize)

        // Occasional blue accent
        if (Math.random() > 0.97) {
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

    const interval = setInterval(draw, 40)

    const handleResize = () => {
      updateSize()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

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
