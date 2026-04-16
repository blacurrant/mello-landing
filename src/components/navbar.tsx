"use client"

import { buttonVariants } from "@/components/ui/button"
import MainCardWrapper from "./MainCardWrapper"
import Link from "next/link"

export const NavbarComponent = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-brand-200/30">
      <MainCardWrapper>
        <div className="w-full flex items-center justify-between h-16">
          <span className="text-2xl font-bold text-gray-800">
            [PROJECT NAME].
          </span>
          <div className="flex items-center gap-4">
            <Link href="/pricing" className={buttonVariants({ variant: "ghost" })}>
              Pricing
            </Link>
            <Link href="/sign-up" className={buttonVariants({ variant: "default" })}>
              Request Demo
            </Link>
          </div>
        </div>
      </MainCardWrapper>
    </nav>
  )
}
