import React from "react"
import Cart from "./Cart"
import Checkout from "./Checkout"
const Order = () => {
  return (
    <section className="w-full bg-gray-400">
      <div className="container flex flex-col mx-auto lg:flex-row">
        <Cart />
        <Checkout />
      </div>
    </section>
  )
}

export default Order
