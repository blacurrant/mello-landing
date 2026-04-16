"use client"

import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "NISHANT: replace with your real project. One punchy sentence.",
    tags: ["React", "TypeScript", "Framer Motion"],
    color: "#00D1FF",
    year: "2025",
    link: "#",
  },
  {
    id: 2,
    title: "Project Two",
    description: "NISHANT: replace with your real project. One punchy sentence.",
    tags: ["Next.js", "Tailwind", "Three.js"],
    color: "#4AFF91",
    year: "2025",
    link: "#",
  },
  {
    id: 3,
    title: "Project Three",
    description: "NISHANT: replace with your real project. One punchy sentence.",
    tags: ["Design System", "Figma", "Storybook"],
    color: "#BF5FFF",
    year: "2024",
    link: "#",
  },
]

export const Work = () => {
  return (
    <section className="relative min-h-[100dvh] bg-[#060410] overflow-hidden flex items-center" id="work">
      <div className="noise absolute inset-0 opacity-40" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-16 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-world-purple tracking-[0.3em] uppercase mb-4">{"// the gallery"}</p>
          <h2 className="font-heading text-5xl md:text-6xl text-void-text">
            Worlds I&apos;ve <span className="text-world-purple italic">built.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ x: 8 }}
              className="group relative border p-8 md:p-10 rounded-sm cursor-none overflow-hidden"
              style={{ borderColor: `${project.color}20` }}
            >
              {/* portal glow on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse at left center, ${project.color}0A 0%, transparent 70%)`,
                }}
              />

              <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                <span
                  className="font-mono text-xs tracking-widest hidden md:block"
                  style={{ color: `${project.color}60` }}
                >
                  {project.year}
                </span>

                <div className="flex-1">
                  <h3
                    className="font-heading text-3xl md:text-4xl text-void-text mb-3 group-hover:transition-colors duration-300"
                    style={{ ["--hover-color" as string]: project.color }}
                  >
                    <span className="group-hover:text-[var(--hover-color)] transition-colors duration-300">
                      {project.title}
                    </span>
                  </h3>
                  <p className="font-sans text-sm text-muted-text mb-4 max-w-xl">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] px-2 py-1 rounded-sm"
                        style={{ color: project.color, border: `1px solid ${project.color}30` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <span
                  className="font-mono text-2xl self-end md:self-auto opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ color: project.color }}
                >
                  →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
