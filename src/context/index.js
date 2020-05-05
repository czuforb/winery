import React, { useState, useEffect, useReducer } from "react"
import { inventory } from "../data/"
import useLocalStorage from "../hooks/useLocalStorage"

export const CartContext = React.createContext(null)

const limitQuantity = num => (num > 0 ? num : 0)

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const existingProduct = state.cart.find(
        item => item.id === action.playload.product.id
      )
      if (existingProduct) {
        return {
          cart: state.cart.map(element =>
            element.id === action.playload.product.id
              ? { ...element, quantity: element.quantity + 1 }
              : element
          ),
        }
      } else {
        return {
          cart: [...state.cart, { ...action.playload.product, quantity: 1 }],
        }
      }
    case "INCREASE":
      return {
        cart: state.cart.map(element =>
          element.id === action.id
            ? { ...element, quantity: element.quantity + 1 }
            : element
        ),
      }
    case "DECREASE":
      return {
        cart: state.cart.map(element =>
          element.id === action.id
            ? { ...element, quantity: limitQuantity(element.quantity - 1) }
            : element
        ),
      }
    case "REMOVE":
      return {
        cart: state.cart.filter(element => element.id !== action.id),
      }
    default:
      return state
  }
}

export default ({ children }) => {
  const [cart, setCart] = useLocalStorage("winery-cart", { cart: [] })
  const [state, dispatch] = useReducer(cartReducer, cart)
  const [products, setProducts] = useState(inventory)

  useEffect(() => {
    setCart(state)
  }, [state, products, cart])

  const handleAddCart = action => {
    dispatch(action)
  }
  const handleIncrease = id => {
    dispatch({ type: "INCREASE", id: id })
  }

  const handleDecrease = id => {
    dispatch({ type: "DECREASE", id: id })
  }
  const handleRemove = id => {
    dispatch({ type: "REMOVE", id: id })
  }
  const store = {
    cart: state.cart,
    products: [products, setProducts],
    handleAddCart: handleAddCart,
    handleIncrease: handleIncrease,
    handleDecrease: handleDecrease,
    handleRemove: handleRemove,
  }
  return <CartContext.Provider value={store}>{children}</CartContext.Provider>
}
