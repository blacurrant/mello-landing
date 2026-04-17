"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export const Cursor = () => {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springX = useSpring(mouseX, { stiffness: 500, damping: 40 })
  const springY = useSpring(mouseY, { stiffness: 500, damping: 40 })

  const trailX = useSpring(mouseX, { stiffness: 120, damping: 30 })
  const trailY = useSpring(mouseY, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [mouseX, mouseY])

  return (
    <>
      {/* trail — larger, slower, fades */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          width: 32,
          height: 32,
          background: "rgba(0, 209, 255, 0.08)",
          border: "1px solid rgba(0, 209, 255, 0.2)",
        }}
      />
      {/* core — sharp, fast */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: 8,
          height: 8,
          background: "#00D1FF",
          boxShadow: "0 0 12px rgba(0, 209, 255, 0.8), 0 0 30px rgba(0, 209, 255, 0.3)",
        }}
      />
    </>
  )
}
