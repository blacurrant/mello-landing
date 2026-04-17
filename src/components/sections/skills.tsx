"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const artifacts = [
  {
    id: "motion",
    label: "Motion",
    glyph: "◈",
    color: "#00D1FF",
    description: "Breathing interfaces. Scroll-driven stories. Things that move with purpose.",
    skills: ["Framer Motion", "GSAP", "CSS Animations", "React Spring", "Three.js / R3F"],
  },
  {
    id: "components",
    label: "Components",
    glyph: "⬡",
    color: "#4AFF91",
    description: "Atomic, composable, accessible. UI that scales without falling apart.",
    skills: ["React", "TypeScript", "shadcn/ui", "Radix UI", "Storybook"],
  },
  {
    id: "systems",
    label: "Systems",
    glyph: "⬟",
    color: "#BF5FFF",
    description: "Tokens, themes, patterns. Design and code speaking the same language.",
    skills: ["Tailwind CSS", "CSS Variables", "Design Tokens", "Next.js", "Figma"],
  },
]

export const Skills = () => {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section className="relative min-h-[100dvh] bg-[#08050F] overflow-hidden flex items-center" id="skills">
      <div className="noise absolute inset-0 opacity-40" />

      {/* ember particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              bottom: 0,
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              background: "#FF9500",
              opacity: 0,
            }}
            animate={{
              y: [0, -(200 + Math.random() * 300)],
              x: [(Math.random() - 0.5) * 40],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-16 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-accent-warm tracking-[0.3em] uppercase mb-4">{"// the workshop"}</p>
          <h2 className="font-heading text-5xl md:text-6xl text-void-text">
            Tools of the <span className="text-accent-warm italic">craft.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {artifacts.map((artifact, i) => (
            <motion.div
              key={artifact.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              onClick={() => setActive(active === artifact.id ? null : artifact.id)}
              className="relative group cursor-none"
            >
              <motion.div
                className="relative border p-8 rounded-sm overflow-hidden"
                style={{ borderColor: `${artifact.color}30` }}
                whileHover={{ borderColor: artifact.color, scale: 1.02 }}
                animate={{
                  boxShadow: active === artifact.id
                    ? `0 0 30px ${artifact.color}40, inset 0 0 30px ${artifact.color}10`
                    : "none",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  className="block text-4xl mb-4 font-mono"
                  style={{ color: artifact.color }}
                  animate={{ y: active === artifact.id ? -4 : 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {artifact.glyph}
                </motion.span>
                <h3 className="font-heading text-2xl text-void-text mb-3">{artifact.label}</h3>
                <p className="font-sans text-sm text-muted-text leading-relaxed">{artifact.description}</p>

                <AnimatePresence>
                  {active === artifact.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 flex flex-wrap gap-2"
                    >
                      {artifact.skills.map((skill) => (
                        <span
                          key={skill}
                          className="font-mono text-xs px-2 py-1 rounded-sm"
                          style={{ color: artifact.color, border: `1px solid ${artifact.color}40` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <p className="font-mono text-[10px] text-muted-text/40 mt-4">
                  {active === artifact.id ? "click to close" : "click to reveal"}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
