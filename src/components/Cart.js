import React, { useContext, useState } from "react"

import { CartContext } from "../context"
import CartProduct from "./CartProduct"
import { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"

const Cart = () => {
  const [total, setTotal] = useState(0)

  const { cart } = useContext(CartContext)
  const freeShipping = total < 5000

  const getTotal = cart => {
    const total = 0

    return cart.reduce((total, item) => {
      return total + item.price * item.quantity
    }, total)
  }

  useEffect(() => {
    setTotal(getTotal(cart))
  }, [cart])

  const image = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { relativeDirectory: { eq: "types" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div
      id="cart"
      className="flex flex-col items-center flex-auto w-full h-full px-4 space-y-8 bg-gray-200 rounded-md md:p-12"
    >
      <div className="w-full pb-1 mx-auto border-b border-gray-400">
        <h3 className="inline-block text-3xl font-bold font-display md:text-4xl">
          Kosár
        </h3>
      </div>
      <ul className="flex flex-col w-full h-full rounded-md">
        {cart.length > 0 ? (
          cart.map((node, index) => (
            <CartProduct image={image} data={node} key={index} />
          ))
        ) : (
          <li
            exit={{ opacity: 0 }}
            className="box-border flex items-center justify-center w-full h-full p-4 bg-gray-400 rounded-md"
          >
            <h2 className="text-xl font-bold text-gray-500">
              Üres a kosarad :(
            </h2>
          </li>
        )}
      </ul>
      <div className="box-border flex flex-col justify-end flex-shrink p-4 bg-gray-400 rounded-md">
        <div className="pb-2 border-b border-gray-400 boorder-solid">
          <div className="flex flex-col justify-start md:flex-row ">
            <h2 className="text-xl font-bold text-gray-800">Szállítási díj:</h2>
            {freeShipping ? (
              <p className="text-xl font-bold text-gray-700 md:ml-auto">
                1000 Ft
              </p>
            ) : (
              <p className="text-xl font-bold text-green-800 md:ml-auto">
                INGYENES!
              </p>
            )}
          </div>
          <p className="mt-1 text-base leading-relaxed text-gray-800">
            Mezőkövesd területén belül, valamint 5000 Ft-ot meghaladó vásárlás
            esetén ingyenes szállítást vállalunk.
          </p>
        </div>
        <div className="mt-2">
          <div className="flex flex-col justify-start md:flex-row">
            <h2 className="text-2xl font-bold text-gray-900">Teljes összeg:</h2>
            <p className="text-2xl font-bold text-gray-900 md:ml-auto">
              {freeShipping ? 1000 + total : total}Ft
            </p>
          </div>
          <p className="mt-1 text-base leading-relaxed text-gray-800">
            A teljes összeg a személyes átvételkor kerül kifizetésre
            <span className="font-bold"> készpénzben.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cart
