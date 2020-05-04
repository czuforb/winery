import React from "react"
import { Link } from "gatsby"
import CartIndicator from "../cartIndicator"
const Navigation = () => {
  return (
    <nav className="fixed top-0 z-40 w-full">
      <div className="container flex items-center justify-end px-4 mx-auto">
        <Link to="/" className="mr-auto text-4xl font-bold text-white">
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
