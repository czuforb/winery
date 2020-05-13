import React from "react"
import { animated } from "react-spring"
const Page = ({ num }) => {
  return (
    <animated.div className="text-6xl font-bold bg-indigo-700 w-320 h-320">
      {num}
    </animated.div>
  )
}

export default Page
