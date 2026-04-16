"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

/*
  SPRITE ART NEEDED:
  ─────────────────────────────────────────────────────────
  File: /public/sprite-walk.png
  Format: 4-frame horizontal spritesheet
  Frame size: 64×64px  →  total image: 256×64px
  Direction: facing right, walking cycle (idle/step1/step2/step3)

  Where to get one (free):
  • https://itch.io/game-assets/free/tag-characters (search "walk spritesheet")
  • https://sanderfrenken.github.io/Universal-LPC-Spritesheet-Character-Generator/
  • https://opengameart.org/art-search?keys=walk+spritesheet

  Until you add the file, the fallback CSS character below is used.
  ─────────────────────────────────────────────────────────
*/

const HAS_SPRITE = false // set to true once /public/sprite-walk.png is added

const CSSCharacter = ({ walking }: { walking: boolean }) => (
  <div className="relative w-8 h-12 flex flex-col items-center">
    {/* head */}
    <div className="w-5 h-5 rounded-full border border-accent/60 bg-accent/10" />
    {/* body */}
    <div className="w-3 h-5 border border-accent/40 bg-accent/5 mt-0.5" />
    {/* legs */}
    <div className="flex gap-1 mt-0.5">
      <motion.div
        className="w-1.5 h-4 bg-accent/30 rounded-b-sm"
        animate={walking ? { rotate: [15, -15, 15] } : { rotate: 0 }}
        transition={{ duration: 0.5, repeat: walking ? Infinity : 0 }}
        style={{ originY: 0 }}
      />
      <motion.div
        className="w-1.5 h-4 bg-accent/30 rounded-b-sm"
        animate={walking ? { rotate: [-15, 15, -15] } : { rotate: 0 }}
        transition={{ duration: 0.5, repeat: walking ? Infinity : 0 }}
        style={{ originY: 0 }}
      />
    </div>
  </div>
)

export const WalkingSprite = () => {
  const lastScrollY = useRef(0)
  const [walking, setWalking] = useState(false)
  const [facingRight, setFacingRight] = useState(true)
  const walkTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const { scrollYProgress } = useScroll()
  const xPos = useTransform(scrollYProgress, [0, 1], ["8%", "88%"])

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      const delta = current - lastScrollY.current
      lastScrollY.current = current

      if (Math.abs(delta) > 1) {
        setWalking(true)
        setFacingRight(delta > 0)
        if (walkTimer.current) clearTimeout(walkTimer.current)
        walkTimer.current = setTimeout(() => setWalking(false), 300)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (walkTimer.current) clearTimeout(walkTimer.current)
    }
  }, [])

  return (
    <motion.div
      className="fixed bottom-6 z-30 pointer-events-none"
      style={{ left: xPos }}
    >
      <motion.div style={{ scaleX: facingRight ? 1 : -1, transformOrigin: "center" }}>
        {HAS_SPRITE ? (
          <div
            className={walking ? "animate-sprite-walk" : ""}
            style={{
              width: 64,
              height: 64,
              backgroundImage: "url(/sprite-walk.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "256px 64px",
              backgroundPosition: walking ? undefined : "0px 0px",
              imageRendering: "pixelated",
            }}
          />
        ) : (
          <CSSCharacter walking={walking} />
        )}
      </motion.div>

      {/* shadow */}
      <div className="mx-auto w-6 h-1 rounded-full bg-accent/20 blur-sm mt-1" />
    </motion.div>
  )
}
