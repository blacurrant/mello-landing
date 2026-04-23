"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const SECTIONS = [
  { id: "hero",    from: 0,    to: 0.18 },
  { id: "about",   from: 0.18, to: 0.38 },
  { id: "skills",  from: 0.38, to: 0.58 },
  { id: "work",    from: 0.58, to: 0.8  },
  { id: "contact", from: 0.8,  to: 1.0  },
]

const fade = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  exit:   { opacity: 0, y: -12, transition: { duration: 0.5 } },
}

const Hero = () => (
  <div className="flex flex-col items-center justify-center h-full gap-6 text-center px-6">
    <p className="font-mono text-xs text-gold-accent tracking-[0.4em] uppercase">
      you have entered the world of
    </p>
    <h1 className="font-heading text-[clamp(4rem,14vw,10rem)] leading-none text-gold-text" style={{ textShadow: "0 0 60px rgba(212,160,23,0.4), 0 0 120px rgba(212,160,23,0.15)" }}>
      Nishant
    </h1>
    <p className="font-mono text-sm text-gold-muted tracking-widest">
      frontend developer · world crafter
    </p>
    <div className="mt-8 flex flex-col items-center gap-2 opacity-60">
      <span className="font-mono text-[10px] text-gold-muted tracking-[0.4em] uppercase">scroll to explore</span>
      <motion.div
        className="w-px h-10 bg-gradient-to-b from-gold-accent to-transparent"
        animate={{ scaleY: [0.4, 1, 0.4] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      />
    </div>
  </div>
)

const About = () => (
  <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-2xl">
    <p className="font-mono text-xs text-forest-accent tracking-[0.3em] uppercase mb-5">{"// about"}</p>
    <h2 className="font-heading text-4xl md:text-6xl text-forest-text mb-8 leading-tight">
      I build things that<br />
      <span className="text-forest-accent glow-forest italic">feel alive.</span>
    </h2>
    <p className="font-sans text-forest-muted text-base leading-relaxed mb-4">
      {/* NISHANT: your real bio here */}
      Frontend developer obsessed with the space where design meets code.
      Motion, precision, and interfaces that actually respond like they know you.
    </p>
    <p className="font-sans text-forest-muted/60 text-sm leading-relaxed">
      {/* NISHANT: where you are / what you're looking for */}
      Available for the right opportunity.
    </p>
  </div>
)

const SKILLS = [
  { label: "Motion & Animation",  items: ["Framer Motion", "GSAP", "CSS Animations", "React Spring", "Three.js / R3F"] },
  { label: "UI Components",       items: ["React", "TypeScript", "shadcn/ui", "Radix UI", "Storybook"] },
  { label: "Design Systems",      items: ["Tailwind CSS", "CSS Variables", "Design Tokens", "Next.js", "Figma"] },
]

const Skills = () => (
  <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-3xl">
    <p className="font-mono text-xs text-forest-accent tracking-[0.3em] uppercase mb-5">{"// skills"}</p>
    <h2 className="font-heading text-4xl md:text-5xl text-forest-text mb-10 leading-tight">
      Tools of the <span className="text-forest-accent glow-forest italic">craft.</span>
    </h2>
    <div className="flex flex-col gap-8">
      {SKILLS.map((group) => (
        <div key={group.label}>
          <p className="font-mono text-xs text-forest-muted tracking-widest uppercase mb-3">{group.label}</p>
          <div className="flex flex-wrap gap-2">
            {group.items.map((s) => (
              <span key={s} className="font-mono text-xs px-3 py-1 rounded-sm border border-forest-accent/20 text-forest-accent/80">
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
)

const PROJECTS = [
  {
    title: "Project One",
    desc: "NISHANT: replace with real project — one punchy sentence.",
    tags: ["React", "TypeScript", "Framer Motion"],
    year: "2025",
    link: "#",
  },
  {
    title: "Project Two",
    desc: "NISHANT: replace with real project — one punchy sentence.",
    tags: ["Next.js", "Tailwind", "Three.js"],
    year: "2025",
    link: "#",
  },
  {
    title: "Project Three",
    desc: "NISHANT: replace with real project — one punchy sentence.",
    tags: ["Design System", "Figma", "Storybook"],
    year: "2024",
    link: "#",
  },
]

const Work = () => (
  <div className="flex flex-col justify-center h-full px-8 md:px-20 max-w-3xl">
    <p className="font-mono text-xs text-forest-accent tracking-[0.3em] uppercase mb-5">{"// work"}</p>
    <h2 className="font-heading text-4xl md:text-5xl text-forest-text mb-10 leading-tight">
      Worlds I&apos;ve <span className="text-forest-accent glow-forest italic">built.</span>
    </h2>
    <div className="flex flex-col gap-6">
      {PROJECTS.map((p) => (
        <a
          key={p.title}
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex gap-6 items-start border-l-2 border-forest-accent/20 pl-4 hover:border-forest-accent transition-colors duration-300 cursor-none"
        >
          <div>
            <div className="flex items-baseline gap-3 mb-1">
              <h3 className="font-heading text-xl text-forest-text group-hover:text-forest-accent transition-colors duration-300">{p.title}</h3>
              <span className="font-mono text-[10px] text-forest-muted">{p.year}</span>
            </div>
            <p className="font-sans text-sm text-forest-muted mb-2">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="font-mono text-[10px] text-forest-accent/60">{t}</span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
)

const Contact = () => (
  <div className="flex flex-col items-center justify-center h-full text-center px-8">
    <p className="font-mono text-xs text-forest-accent tracking-[0.4em] uppercase mb-6">{"// you've reached the end"}</p>
    <h2 className="font-heading text-5xl md:text-7xl text-forest-text mb-8 leading-tight glow-light">
      Let&apos;s build<br />
      <span className="text-forest-accent glow-forest italic">something.</span>
    </h2>
    <p className="font-sans text-forest-muted text-base mb-10 max-w-sm">
      {/* NISHANT: update this */}
      Open to full-time roles, contracts, and interesting problems.
    </p>
    <div className="flex flex-col sm:flex-row gap-4">
      <a
        href="mailto:hello@nishant.world"
        className="font-mono text-sm px-8 py-4 rounded-sm border border-forest-accent/40 text-forest-accent hover:border-forest-accent hover:bg-forest-accent/10 transition-all duration-300 cursor-none"
      >
        {/* NISHANT: your email */}
        hello@nishant.world
      </a>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-sm px-8 py-4 rounded-sm border border-forest-text/10 text-forest-muted hover:text-forest-text transition-colors duration-300 cursor-none"
      >
        {/* NISHANT: your github */}
        GitHub ↗
      </a>
    </div>
    <p className="font-mono text-[10px] text-forest-muted/30 tracking-widest mt-16">
      nishant.world © 2026
    </p>
  </div>
)

const CONTENT: Record<string, React.ReactNode> = {
  hero: <Hero />,
  about: <About />,
  skills: <Skills />,
  work: <Work />,
  contact: <Contact />,
}

export const ForestOverlay = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const active = SECTIONS.find((s) => progress >= s.from && progress < s.to)

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {/* navbar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 h-14 pointer-events-auto">
        <span className="font-mono text-forest-accent text-lg font-bold tracking-widest" style={{ textShadow: "0 0 20px rgba(125,207,160,0.6)" }}>
          N.
        </span>
        <a href="#contact" className="font-mono text-xs text-forest-muted hover:text-forest-accent transition-colors duration-300 tracking-widest uppercase cursor-none">
          contact
        </a>
      </div>

      {/* section content */}
      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            key={active.id}
            variants={fade}
            initial="hidden"
            animate="show"
            exit="exit"
            className="absolute inset-0 pointer-events-auto"
          >
            {CONTENT[active.id]}
          </motion.div>
        )}
      </AnimatePresence>

      {/* progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-forest-accent/10">
        <motion.div
          className="h-full bg-forest-accent/40"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  )
}
