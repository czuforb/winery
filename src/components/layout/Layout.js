import React from "react"
import Nav from "./Navigation"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
