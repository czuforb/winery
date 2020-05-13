import React from "react"
import Nav from "./Navigation"
import Footer from "./Footer"
import { CookiesProvider, Cookies } from "react-cookie"
import { useCookies } from "react-cookie"
import Portal from "./Portal"
import CartContext from "../context"

const Layout = ({ children }) => {
  const [cookies, setCookie] = useCookies([])

  return (
    <CartContext>
      <CookiesProvider>
        <Nav />
        {cookies.consents ? "" : <Portal />}
        <main className="antialiased font-body">{children}</main>
        <Footer />
      </CookiesProvider>
    </CartContext>
  )
}

export default Layout
