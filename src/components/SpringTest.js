import React, { useState, useCallback } from "react"
import { useTransition, animated } from "react-spring"
import Order from "./Order"
import Cart from "./Cart"
import Checkout from "./Checkout"

export default function App() {
  const pages = [
    ({ style }) => (
      <animated.div className="absolute inset-0" style={{ ...style }}>
        <Cart />
      </animated.div>
    ),
    ({ style }) => (
      <animated.div className="absolute inset-0" style={{ ...style }}>
        <Checkout />
      </animated.div>
    ),
    ({ style }) => (
      <animated.div className="absolute inset-0" style={{ ...style }}>
        <Cart />
      </animated.div>
    ),
  ]
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 3), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: "translateX(-500px)" },
    enter: { opacity: 1, transform: "translateX(0px)" },
    leave: { opacity: 0, transform: "translateX(500px)" },
  })
  return (
    <div className="flex items-center justify-center w-full h-screen bg-indigo-700">
      <div className="container flex flex-col w-full h-full py-40 bg-yellow-400">
        <div className="relative w-full h-full">
          {transitions.map(({ item, props, key }) => {
            const Page = pages[item]
            return <Page key={key} style={props} />
          })}
        </div>
        <div className="flex justify-center w-full p-2 mt-auto bg-indigo-400">
          <button onClick={onClick} className="p-4 bg-red-700">
            CLICK
          </button>
        </div>
      </div>
    </div>
  )
}
