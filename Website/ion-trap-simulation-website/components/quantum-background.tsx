"use client"

import { useEffect, useRef } from "react"

export function QuantumBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Handle high-DPI screens
    const resizeCanvas = () => {
      const dpr = Math.max(window.devicePixelRatio || 1, 1)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      canvas.width = Math.round(window.innerWidth * dpr)
      canvas.height = Math.round(window.innerHeight * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas, { passive: true })

    type Particle = {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      createdAt: number
    }

    const TARGET_PARTICLE_COUNT = 50
    const CONNECTION_DISTANCE = 150
    const CONNECTION_DISTANCE_SQ = CONNECTION_DISTANCE * CONNECTION_DISTANCE
    const BG_COLOR = { r: 13, g: 17, b: 28 } // exact original background
    const FADE_ALPHA = 0.1

    const particles: Particle[] = []
    const spawnParticle = (): Particle => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      createdAt: Date.now(),
    })

    for (let i = 0; i < TARGET_PARTICLE_COUNT; i++) particles.push(spawnParticle())

    let animationId: number | null = null
    let lastFrameTime = performance.now()

    const clampToBounds = (p: Particle) => {
      const pad = 1
      if (p.x <= 0 + pad) { p.vx = Math.abs(p.vx) || 0.5; p.x = pad }
      if (p.x >= window.innerWidth - pad) { p.vx = -Math.abs(p.vx) || -0.5; p.x = window.innerWidth - pad }
      if (p.y <= 0 + pad) { p.vy = Math.abs(p.vy) || 0.5; p.y = pad }
      if (p.y >= window.innerHeight - pad) { p.vy = -Math.abs(p.vy) || -0.5; p.y = window.innerHeight - pad }
    }

    const animate = (now: number) => {
      const currentTime = Date.now()
      const dt = now - lastFrameTime
      lastFrameTime = now

      // Light fade for trailing
      ctx.fillStyle = `rgba(${BG_COLOR.r}, ${BG_COLOR.g}, ${BG_COLOR.b}, ${FADE_ALPHA})`
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      // Update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        if (currentTime - p.createdAt > 30_000) {
          particles[i] = spawnParticle()
          continue
        }
        p.x += p.vx * (dt / 16.67)
        p.y += p.vy * (dt / 16.67)
        clampToBounds(p)
      }

      // Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(100, 200, 255, ${p.opacity})`
        ctx.fill()
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const distSq = dx * dx + dy * dy
          if (distSq < CONNECTION_DISTANCE_SQ) {
            const t = 1 - distSq / CONNECTION_DISTANCE_SQ
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.lineWidth = 0.5
            ctx.strokeStyle = `rgba(100, 200, 255, ${0.2 * t})`
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationId !== null) cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "linear-gradient(180deg, #0d111c 0%, #000000 100%)" }}
    />
  )
}