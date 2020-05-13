import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import CartIndicator from "./cartIndicator"
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled)
      }
    }

    document.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  const navStyleScrolled =
    "fixed top-0 z-50 w-full bg-homok-100 bg-opacity-100 py-2 transform translate-y-0 shadow-md px-4"
  const navStyleDefault =
    "fixed top-0 z-50 w-full bg-homok-100 bg-opacity-0 py-2 translate-y-2 transform shadow-none px-4"
  return (
    <nav
      className={`${
        scrolled ? navStyleScrolled : navStyleDefault
      } transition-all duration-500 ease-in-out`}
    >
      <div className="container flex items-center justify-end mx-auto">
        <Link to="/" className="mt-1 mr-auto text-4xl font-bold text-white">
          <svg
            className="w-12 h-12 text-white fill-current stroke-current"
            viewBox="0 0 150 165"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25" cy="55" r="25" />
            <circle cx="75" cy="55" r="25" />
            <circle cx="125" cy="55" r="25" />
            <circle cx="50" cy="98" r="25" />
            <circle cx="100" cy="98" r="25" />
            <circle cx="75" cy="140" r="25" />
            <line
              x1="57.5018"
              y1="22.3962"
              x2="90.3962"
              y2="10.4982"
              strokeWidth="15"
              strokeLinecap="round"
            />
          </svg>
        </Link>
        <CartIndicator />
      </div>
    </nav>
  )
}

export default Navigation
