import { NavbarComponent } from '@/components/navbar'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavbarComponent />
      {children}
    </>
  )
}

export default Layout