import { useEffect, useRef } from 'react'

const BinaryBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const binary = ['0', '1']
    const fontSize = 12
    const columns = canvas.width / fontSize
    const hexChars = '0123456789ABCDEF'
    
    // Create particles
    const particles = []
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        text: hexChars[Math.floor(Math.random() * hexChars.length)] + 
              hexChars[Math.floor(Math.random() * hexChars.length)],
        speed: 0.2 + Math.random() * 0.5,
        opacity: 0.1 + Math.random() * 0.2,
      })
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw binary background
      ctx.fillStyle = 'rgba(59, 130, 246, 0.03)'
      ctx.font = `${fontSize}px monospace`
      
      for (let i = 0; i < columns; i++) {
        if (Math.random() > 0.98) {
          const x = i * fontSize
          const y = Math.random() * canvas.height
          ctx.fillText(binary[Math.floor(Math.random() * 2)], x, y)
        }
      }

      // Draw hex particles
      particles.forEach((particle) => {
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`
        ctx.font = `${fontSize + 2}px monospace`
        ctx.fillText(particle.text, particle.x, particle.y)

        particle.y += particle.speed
        if (particle.y > canvas.height) {
          particle.y = 0
          particle.x = Math.random() * canvas.width
        }
      })
    }

    const interval = setInterval(draw, 50)

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
      className="fixed top-0 left-0 w-full h-full -z-20 opacity-30 pointer-events-none"
    />
  )
}

export default BinaryBackground
