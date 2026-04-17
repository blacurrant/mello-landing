import type { Metadata } from "next"
import { Inter, EB_Garamond, Space_Mono } from "next/font/google"
import { Providers } from "../components/providers"
import { cn } from "@/lib/utils"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const eb_garamond = EB_Garamond({ subsets: ["latin"], variable: "--font-heading" })
const space_mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Nishant — Frontend Developer",
  description: "I build interfaces that feel alive.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(inter.variable, eb_garamond.variable, space_mono.variable)}>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
