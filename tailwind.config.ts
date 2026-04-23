import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", ...fontFamily.serif],
        mono: ["var(--font-mono)", ...fontFamily.mono],
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        // original forest palette
        void: "#060C08",
        "forest-deep": "#0A1A10",
        "forest-mid": "#1A3A28",
        "forest-light": "#C8F0D8",
        "forest-mist": "#4A8A6A",
        "forest-text": "#E0F0E8",
        "forest-muted": "#6A9A7A",
        "forest-accent": "#7DCFA0",
        bark: "#1A2A1A",

        // Elden Ring golden order palette
        "gold-bright": "#FFD700",
        "gold-mid":    "#D4A017",
        "gold-dim":    "#8B6914",
        "gold-text":   "#F5E6B8",
        "gold-muted":  "#A08040",
        "gold-accent": "#C8960C",
        "er-dark":     "#0A0704",
        "er-blue":     "#3355BB",
      },
      animation: {
        marquee: "marquee 35s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
