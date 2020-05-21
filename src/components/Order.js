import React from "react"
import Cart from "./Cart"
import Checkout from "./Checkout"

const Order = () => {
  return (
    <section
      className="object-contain w-full py-12"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/buforcz/image/upload/c_scale,w_1069/v1589489330/john-murzaku-zebTTTLLsoo-unsplash_umsskm.jpg)",
      }}
    >
      <div className="container grid grid-cols-8 gap-8 mx-auto md:grid-rows-1">
        <div className="col-span-8 row-start-2 rounded md:row-start-1 md:col-span-3">
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
