"use client"

import dynamic from "next/dynamic"
import { ForestOverlay } from "@/components/world/forest-overlay"

// Dynamically imported so Three.js never runs on the server
const KnightScene = dynamic(
  () => import("@/components/world/knight-scene").then((m) => m.KnightScene),
  { ssr: false }
)

// Image file in /public — spaces encoded for CSS url()
const BG_IMAGE = "/Elden%20Ring%20desktop%20wallpaper.jpg"

const TOTAL_PAGES = 6

export default function Page() {
  return (
    <div style={{ height: `${TOTAL_PAGES * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* ── Layer 1: Elden Ring wallpaper ──────────────────────────── */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${BG_IMAGE}')` }}
        />

        {/* ── Layer 2: Atmospheric gradient darkening the edges ──────── */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />

        {/* ── Layer 3: Knight 3D canvas (transparent bg) ─────────────── */}
        <div className="absolute inset-0 pointer-events-none">
          <KnightScene />
        </div>

        {/* ── Layer 4: Section text + nav overlay ────────────────────── */}
        <ForestOverlay />

      </div>
    </div>
  )
}
