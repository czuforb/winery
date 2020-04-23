import React from "react"
import Cart from "./Cart"
import Checkout from "./Checkout"
const Order = () => {
  return (
    <section className="w-full bg-red-100">
      <div className="bg-red-200 w-10/12 max-w-screen-xl flex flex-col md:flex-row rounded-md py-6 mx-auto">
        <Cart />
        <Checkout />
      </div>
    </section>
  )
}

export default Order
