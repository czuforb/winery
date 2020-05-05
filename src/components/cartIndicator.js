import React, { useContext } from "react"
import { CartContext } from "../context"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "gatsby"

const CartIndicator = () => {
  const { cart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(0)
  const getAllQuantity = cart.reduce((sum, cart) => {
    return cart.quantity + sum
  }, 0)

  useEffect(() => {
    setQuantity(getAllQuantity)
  }, [cart, getAllQuantity])

  return (
    <Link
      to={cart.length ? "/#cart" : "/#products"}
      className="relative z-40 flex items-center justify-center w-16 h-16 bg-green-900 rounded-full"
    >
      <svg
        className="z-20 w-10 h-10 text-green-100 fill-current"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 1C2.44772 1 2 1.44772 2 2C2 2.55228 2.44772 3 3 3H4.21922L4.52478 4.22224C4.52799 4.23637 4.5315 4.25039 4.5353 4.26429L5.89253 9.69321L4.99995 10.5858C3.74002 11.8457 4.63235 14 6.41416 14H15C15.5522 14 16 13.5523 16 13C16 12.4477 15.5522 12 15 12L6.41417 12L7.41416 11H14C14.3788 11 14.725 10.786 14.8944 10.4472L17.8944 4.44721C18.0494 4.13723 18.0329 3.76909 17.8507 3.47427C17.6684 3.17945 17.3466 3 17 3H6.28078L5.97014 1.75746C5.85885 1.3123 5.45887 1 5 1H3Z" />
        <path d="M16 16.5C16 17.3284 15.3284 18 14.5 18C13.6716 18 13 17.3284 13 16.5C13 15.6716 13.6716 15 14.5 15C15.3284 15 16 15.6716 16 16.5Z" />
        <path d="M6.5 18C7.32843 18 8 17.3284 8 16.5C8 15.6716 7.32843 15 6.5 15C5.67157 15 5 15.6716 5 16.5C5 17.3284 5.67157 18 6.5 18Z" />
      </svg>
      {quantity > 0 ? (
        <span className="box-border absolute z-10 z-50 px-3 py-1 -mt-8 -mr-12 font-bold text-green-900 bg-green-500 rounded-full text-md">
          {quantity}
        </span>
      ) : null}
    </Link>
  )
}

export default CartIndicator
