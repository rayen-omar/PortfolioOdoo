"use client"

import { useEffect, useState } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export function CursorEffect() {
  const [isMounted, setIsMounted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth springs for the cursor follow
  const springConfig = { damping: 25, stiffness: 150 }
  const mainX = useSpring(mouseX, springConfig)
  const mainY = useSpring(mouseY, springConfig)
  
  const dotX = useSpring(mouseX, { damping: 40, stiffness: 400 })
  const dotY = useSpring(mouseY, { damping: 40, stiffness: 400 })

  useEffect(() => {
    // Only enable on desktop/hover devices
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches
    if (isTouchDevice) return
    
    setIsMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)

      const target = e.target as HTMLElement
      const isClickable = target.closest("a, button, [role='button']")
      setIsHovered(!!isClickable)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  if (!isMounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Outer Glow / Halo */}
      <motion.div
        className="absolute w-80 h-80 bg-primary/10 rounded-full blur-[100px]"
        style={{
          x: mainX,
          y: mainY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.8 : 0.4,
        }}
      />
      
      {/* Main Cursor Ring */}
      <motion.div
        className="absolute w-10 h-10 border border-primary/40 rounded-full"
        style={{
          x: mainX,
          y: mainY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.8 : 1,
          backgroundColor: isHovered ? "rgba(59,130,246,0.1)" : "transparent",
          borderColor: isHovered ? "rgba(59,130,246,0.8)" : "rgba(59,130,246,0.4)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* Center Dot */}
      <motion.div
        className="absolute w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0.5 : 1,
        }}
      />
    </div>
  )
}
