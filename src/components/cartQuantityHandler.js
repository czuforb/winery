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
    <div className="flex w-full items-end md:w-2/4 mt-1">
      <div class="h-12 w-1/2">
        <div class="flex flex-row h-10 w-42 rounded-lg relative bg-transparent mt-1">
          <button
            onClick={() => handleDecrease(id)}
            class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none"
          >
            <span class="m-auto text-2xl font-bold">−</span>
          </button>
          <span className="px-4 py-2 bg-gray-300 font-bold w-12">
            {quantity}
          </span>
          <button
            onClick={() => handleIncrease(id)}
            class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer"
          >
            <span class="m-auto text-2xl font-bold">+</span>
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
