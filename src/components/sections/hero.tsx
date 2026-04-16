"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import dynamic from "next/dynamic"

const VoidScene = dynamic(
  () => import("@/components/world/void-scene").then((m) => m.VoidScene),
  { ssr: false }
)

const NAME = "NISHANT"

export const Hero = () => {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <section ref={ref} className="relative h-[100dvh] w-full overflow-hidden bg-void flex items-center justify-center">
      {/* noise overlay */}
      <div className="noise absolute inset-0 z-10" />

      {/* R3F canvas */}
      <motion.div className="absolute inset-0 z-0" style={{ opacity: sceneOpacity }}>
        <VoidScene />
      </motion.div>

      {/* radial fade from center */}
      <div
        className="absolute inset-0 z-[5]"
        style={{ background: "radial-gradient(ellipse at center, transparent 30%, #020205 80%)" }}
      />

      {/* text content */}
      <motion.div
        className="relative z-20 flex flex-col items-center gap-6 text-center"
        style={{ opacity, y }}
      >
        <div className="flex overflow-hidden">
          {NAME.split("").map((letter, i) => (
            <motion.span
              key={i}
              className="font-heading text-[clamp(4rem,14vw,11rem)] leading-none text-void-text glow-text-accent"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <motion.p
          className="font-mono text-xs md:text-sm text-accent tracking-[0.3em] uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          frontend developer · world builder
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <span className="font-mono text-[10px] text-void-text/30 tracking-[0.4em] uppercase">enter the world</span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-accent to-transparent"
            animate={{ scaleY: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
