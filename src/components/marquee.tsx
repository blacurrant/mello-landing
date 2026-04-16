import { cn } from "@/lib/utils"

interface MarqueeProps {
  text: string
  className?: string
  speed?: "slow" | "normal" | "fast"
}

export const Marquee = ({ text, className, speed = "normal" }: MarqueeProps) => {
  const duration = speed === "slow" ? "60s" : speed === "fast" ? "20s" : "35s"
  const repeated = `${text} `.repeat(8)

  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)}>
      <div
        className="inline-block animate-marquee"
        style={{ animationDuration: duration }}
      >
        <span>{repeated}</span>
        <span>{repeated}</span>
      </div>
    </div>
  )
}
