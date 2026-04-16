import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Skills } from "@/components/sections/skills"
import { Work } from "@/components/sections/work"
import { Contact } from "@/components/sections/contact"
import { Marquee } from "@/components/marquee"
import { WalkingSprite } from "@/components/world/sprite"

const Page = () => {
  return (
    <>
      <WalkingSprite />
      <Hero />
      <Marquee
        text="UI DESIGN — MOTION — COMPONENTS — SYSTEMS — NISHANT.WORLD —"
        className="py-4 bg-[#0A0A14] font-mono text-sm text-accent/40 tracking-widest border-y border-accent/10"
        speed="normal"
      />
      <About />
      <Marquee
        text="THE WORKSHOP — CRAFT — TOOLS — ARTIFACTS — BUILD —"
        className="py-4 bg-[#0A050F] font-mono text-sm text-accent-warm/30 tracking-widest border-y border-accent-warm/10"
        speed="slow"
      />
      <Skills />
      <Marquee
        text="THE GALLERY — WORK — PROJECTS — PORTALS — WORLDS BUILT —"
        className="py-4 bg-[#070410] font-mono text-sm text-world-purple/30 tracking-widest border-y border-world-purple/10"
        speed="fast"
      />
      <Work />
      <Contact />
    </>
  )
}

export default Page
