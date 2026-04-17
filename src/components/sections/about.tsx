"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { MountainsFar, MountainsMid, HillsFore } from "@/components/world/landscape"
import { ParallaxLayer } from "@/components/parallax-layer"

export const About = () => {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const skyColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#020205", "#0D0820", "#0A0530"]
  )

  return (
    <section ref={ref} className="relative min-h-[100dvh] overflow-hidden flex items-center" id="about">
      {/* animated sky */}
      <motion.div className="absolute inset-0" style={{ backgroundColor: skyColor }} />

      {/* noise */}
      <div className="noise absolute inset-0 z-10 opacity-60" />

      {/* stars */}
      <div className="absolute inset-0 z-[2]">
        {Array.from({ length: 60 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-void-text"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              opacity: Math.random() * 0.6 + 0.1,
            }}
            animate={{ opacity: [0.1, 0.7, 0.1] }}
            transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3 }}
          />
        ))}
      </div>

      {/* parallax landscape layers */}
      <div className="absolute bottom-0 left-0 right-0 z-[3]">
        <ParallaxLayer speed={0.3} className="absolute bottom-16 left-0 right-0">
          <MountainsFar className="w-full h-64" />
        </ParallaxLayer>
        <ParallaxLayer speed={0.5} className="absolute bottom-8 left-0 right-0">
          <MountainsMid className="w-full h-48" />
        </ParallaxLayer>
        <ParallaxLayer speed={0.8} className="absolute bottom-0 left-0 right-0">
          <HillsFore className="w-full h-32" />
        </ParallaxLayer>
      </div>

      {/* content */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 md:px-16 py-32 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-4">{"// the awakening"}</p>
          <h2 className="font-heading text-5xl md:text-6xl text-void-text leading-tight">
            I build things that{" "}
            <span className="text-accent glow-text-accent italic">feel alive.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6"
        >
          <p className="font-sans text-void-text/70 text-base leading-relaxed">
            {/* NISHANT: replace with your real bio */}
            Frontend developer obsessed with the gap between design and code.
            I care about motion, precision, and interfaces that respond like they know you.
          </p>
          <p className="font-sans text-void-text/50 text-sm leading-relaxed">
            {/* NISHANT: add where you've worked or what you've shipped */}
            Based somewhere in the world. Available for the right opportunity.
          </p>
          <div className="flex gap-4 mt-2">
            <span className="font-mono text-xs text-world-green border border-world-green/30 px-3 py-1 rounded-sm">React</span>
            <span className="font-mono text-xs text-accent border border-accent/30 px-3 py-1 rounded-sm">TypeScript</span>
            <span className="font-mono text-xs text-world-purple border border-world-purple/30 px-3 py-1 rounded-sm">Motion</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
