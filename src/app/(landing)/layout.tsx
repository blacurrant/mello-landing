import { NavbarComponent } from "@/components/navbar"
import { Cursor } from "@/components/cursor"
import React from "react"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Cursor />
      <NavbarComponent />
      {children}
    </>
  )
}

export default Layout
