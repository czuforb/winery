import React from "react"
import { Link } from "gatsby"
const Button = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="inline-block px-4 py-2 my-10 text-2xl font-bold text-green-100 bg-green-600 rounded-md"
    >
      {children}
    </Link>
  )
}

export default Button
