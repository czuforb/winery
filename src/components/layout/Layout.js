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
      <div>
        <Nav />
        {/* {cookies.consents ? "" :  */}
        <Portal />

        <main>{children}</main>
        <Footer />
      </div>
    </CookiesProvider>
  )
}

export default Layout
