"use client"

import dynamic from "next/dynamic"
import { ForestOverlay } from "@/components/world/forest-overlay"

const ForestScene = dynamic(
  () => import("@/components/world/forest-scene").then((m) => m.ForestScene),
  { ssr: false }
)

const TOTAL_PAGES = 6

export default function Page() {
  return (
    <div style={{ height: `${TOTAL_PAGES * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <ForestScene />
        <ForestOverlay />
      </div>
    </div>
  )
}
