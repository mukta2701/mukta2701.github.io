import { useEffect, useRef } from 'react'

const MatrixRain = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン10'
    const fontSize = 16
    const columns = canvas.width / fontSize
    const drops = Array.from({ length: Math.floor(columns) }, () => Math.random() * -100)

    const draw = () => {
      // Fade effect
      ctx.fillStyle = 'rgba(10, 10, 15, 0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw characters
      drops.forEach((y, i) => {
        const text = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize

        // Create gradient effect - brighter at the head
        const gradient = ctx.createLinearGradient(0, y * fontSize - 20, 0, y * fontSize)
        gradient.addColorStop(0, 'rgba(0, 255, 70, 0.1)')
        gradient.addColorStop(1, 'rgba(0, 255, 70, 1)')

        ctx.fillStyle = gradient
        ctx.font = `bold ${fontSize}px monospace`
        ctx.fillText(text, x, y * fontSize)

        // Add blue accent to some characters
        if (Math.random() > 0.95) {
          ctx.fillStyle = '#3b82f6'
          ctx.fillText(text, x, y * fontSize)
        }

        // Reset drop
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      })
    }

    const interval = setInterval(draw, 33)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
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
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-20 pointer-events-none"
      style={{ filter: 'blur(0px)' }}
    />
  )
}

export default MatrixRain
