"use client"
import * as React from "react"
import { Menu, Search, Bell, User, ChevronDown, ArrowRight } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import MainCardWrapper from "./MainCardWrapper"
import Link from "next/link"
// import { SignOutButton } from "@clerk/nextjs"

export const NavbarComponent = () => {
  // const [isOpen, setIsOpen] = React.useState(false);

  const user = false

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-brand-200/30 ">
      <MainCardWrapper>
        <div className="w-full flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-gray-800">
                melloUp.
              </span>
            </div>
          </div>
          {user ? (
            <>
              <div className="ml-4 flex items-center gap-8">
                {/* <SignOutButton>
                  <Button
                    variant="ghost"
                  size="icon"
                  className="text-gray-600 hover:text-gray-900"
                >
                    Sign out
                  </Button>
                </SignOutButton> */}

                <Button>
                  Dashboard <ArrowRight className="h-4 w-4 shrink-0" />
                </Button>
              </div>
              {/* <div className="-mr-2 flex md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-gray-600" />
                </Button>
              </div> */}
            </>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                href="/pricing"
                className={buttonVariants({
                  variant: "ghost",
                })}
              >
                Pricing
              </Link>
              {/* <Link
                href="/sign-in"
                className={buttonVariants({
                  variant: "ghost",
                })}
              >
                Sign In
              </Link> */}
              <Link
                href="/sign-up"
                className={buttonVariants({
                  variant: "default",
                })}
              >
                Request Demo
              </Link>
            </div>
          )}
        </div>
      </MainCardWrapper>

      
    </nav>
  )
}
