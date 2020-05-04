import React from "react"
import Nav from "./Navigation"
import Footer from "./Footer"
import { CookiesProvider, Cookies } from "react-cookie"
import { useCookies } from "react-cookie"
import Portal from "../Portal"
const Layout = ({ children }) => {
  const [cookies, setCookie] = useCookies([])

  return (
    <CookiesProvider>
      <Nav />
      {/* {cookies.consents ? "" :  */}
      <Portal />
      <main>{children}</main>
      <Footer />
    </CookiesProvider>
  )
}

export default Layout
