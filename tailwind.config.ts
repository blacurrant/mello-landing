import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
  darkMode: ["class"],
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
        void: "#020205",
        "void-text": "#CCDDEE",
        accent: "#00D1FF",
        "accent-warm": "#FF9500",
        "world-green": "#4AFF91",
        "world-purple": "#BF5FFF",
        "summit-gold": "#FFD700",
        muted: "#1A1F2E",
        "muted-text": "#888888",
        "world-border": "#0D1117",
      },
      animation: {
        "sprite-walk": "sprite-walk 0.6s steps(4) infinite",
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        "sprite-walk": {
          "0%": { backgroundPosition: "0px 0px" },
          "100%": { backgroundPosition: "-256px 0px" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
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
