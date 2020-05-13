import React, { useContext, useState, useEffect } from "react"
import { CartContext } from "../context"
const CartQuantityHandler = ({ id, price }) => {
  const { cart, handleIncrease, handleDecrease, handleRemove } = useContext(
    CartContext
  )

  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    const showQuantity = cart => {
      if (cart.length < 1) {
        return 0
      } else {
        if (cart.find(item => item.id === id)) {
          const tempProduct = cart.find(item => item.id === id)
          return tempProduct.quantity
        } else {
          return 0
        }
      }
    }
    setQuantity(showQuantity(cart))
    const currentProduct = cart.find(item => item.id === id)
    if (currentProduct.quantity === 0) {
      handleRemove(id)
    }
  }, [cart, handleRemove, id])
  return (
    <div className="flex items-end justify-center w-full md:w-2/4">
      <div className="w-1/2 h-12">
        <div className="relative flex flex-row h-10 mt-1 bg-transparent rounded-lg w-42">
          <button
            onClick={() => handleDecrease(id)}
            className="w-10 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-400"
          >
            <span className="m-auto text-2xl font-bold">−</span>
          </button>
          <span className="w-12 px-4 py-2 font-bold bg-gray-300">
            {quantity}
          </span>
          <button
            onClick={() => handleIncrease(id)}
            className="w-10 h-full text-gray-600 bg-gray-300 rounded-r cursor-pointer hover:text-gray-700 hover:bg-gray-400"
          >
            <span className="m-auto text-2xl font-bold">+</span>
          </button>
        </div>
      </div>
      <div className="w-1/2 text-right">
        <p className="text-2xl font-bold text-gray-800">
          {quantity * price} Ft
        </p>
      </div>
    </div>
  )
}

export default CartQuantityHandler
