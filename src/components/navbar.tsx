"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export const NavbarComponent = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-14"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
    >
      <span className="font-mono text-accent text-lg font-bold glow-text-accent tracking-widest">
        N.
      </span>
      <Link
        href="#contact"
        className="font-mono text-xs text-void-text/60 hover:text-accent transition-colors duration-300 tracking-widest uppercase"
      >
        contact
      </Link>
    </motion.nav>
  )
}
