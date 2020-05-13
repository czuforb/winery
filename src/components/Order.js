import React, { useState } from "react"
import Cart from "./Cart"
import Checkout from "./Checkout"

const Order = () => {
  return (
    <section className="w-full py-12 bg-homok-300">
      <div className="container grid grid-cols-8 mx-auto md:grid-rows-1">
        <div className="col-span-8 row-start-2 bg-gray-500 rounded-md md:row-start-1 md:col-span-3">
          <Checkout />
        </div>
        <div className="col-span-8 md:row-start-1 md:col-span-5">
          <Cart />
        </div>
      </div>
    </section>
  )
}

export default Order
