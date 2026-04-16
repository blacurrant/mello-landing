"use client"

import { motion } from "framer-motion"

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-[80dvh] overflow-hidden flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(to bottom, #060410, #0D0820, #1A1000)",
      }}
    >
      <div className="noise absolute inset-0 opacity-30" />

      {/* golden glow at center */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,215,0,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-10 text-center px-6">
        <motion.p
          className="font-mono text-xs text-summit-gold tracking-[0.4em] uppercase"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {"// the summit"}
        </motion.p>

        <motion.h2
          className="font-heading text-5xl md:text-7xl text-void-text leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          Let&apos;s build{" "}
          <span
            className="italic"
            style={{
              color: "#FFD700",
              textShadow: "0 0 30px rgba(255,215,0,0.5)",
            }}
          >
            something.
          </span>
        </motion.h2>

        <motion.p
          className="font-sans text-void-text/50 text-base max-w-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* NISHANT: update this line */}
          Open to full-time roles, contracts, and interesting problems.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="mailto:hello@nishant.world"
            className="font-mono text-sm px-8 py-4 rounded-sm transition-all duration-300"
            style={{
              background: "rgba(255,215,0,0.1)",
              border: "1px solid rgba(255,215,0,0.3)",
              color: "#FFD700",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,215,0,0.2)"
              e.currentTarget.style.boxShadow = "0 0 30px rgba(255,215,0,0.2)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,215,0,0.1)"
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            {/* NISHANT: update email */}
            hello@nishant.world
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm px-8 py-4 rounded-sm transition-all duration-300 text-muted-text hover:text-void-text"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            {/* NISHANT: update github link */}
            GitHub ↗
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-0 right-0 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <p className="font-mono text-[10px] text-void-text/20 tracking-widest">
          nishant.world © 2026
        </p>
      </motion.div>
    </section>
  )
}
