"use client"

import { useEffect, useRef } from "react"

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const points = useRef<{ x: number; y: number; age: number }[]>([])
  const mouse = useRef({ x: 0, y: 0 })
  const isActive = useRef(false)

  useEffect(() => {
    // Check if device supports hover (desktop)
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches
    if (isTouchDevice) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
      isActive.current = true
    }

    const render = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (isActive.current) {
        points.current.push({ ...mouse.current, age: 0 })
      }

      // Limit points to keep trail length reasonable
      if (points.current.length > 30) {
        points.current.shift()
      }

      ctx.lineCap = "round"
      ctx.lineJoin = "round"

      for (let i = 0; i < points.current.length - 1; i++) {
        const p1 = points.current[i]
        const p2 = points.current[i + 1]

        // Fade and shrink as it gets older
        const ratio = i / points.current.length
        const opacity = ratio * 0.8
        const size = ratio * 10

        ctx.beginPath()
        // Primary blue color trail
        ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`
        ctx.lineWidth = size
        ctx.moveTo(p1.x, p1.y)
        ctx.lineTo(p2.x, p2.y)
        ctx.stroke()
      }

      requestAnimationFrame(render)
    }

    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", onMouseMove)
    resize()
    render()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9998]"
      style={{ mixBlendMode: "screen" }}
    />
  )
}
