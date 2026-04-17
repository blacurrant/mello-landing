import { Cursor } from "@/components/cursor"
import React from "react"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Cursor />
      {children}
    </>
  )
}

export default Layout
