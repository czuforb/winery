import React, { useContext, useState } from "react"

import { CartContext } from "../context"
import CartProduct from "./cartProduct"
import { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

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
      className="w-full my-4 flex flex-col items-start justify-center"
    >
      <ul className="mx-auto w-11/12 rounded-md flex flex-col items-center min-h-320 block">
        {cart.length > 0 ? (
          cart.map((node, index) => (
            <CartProduct image={image} data={node} key={index} />
          ))
        ) : (
          <li className="w-full h-full box-content  bg-gray-100 rounded-md flex items-center justify-center my-2">
            <h2 className="font-bold text-xl text-gray-400">
              Üres a kosarad :(
            </h2>
          </li>
        )}
      </ul>
      <div className="mx-auto p-4 bg-gray-300 w-11/12 flex-col rounded-md mt-auto">
        <div className="border-b boorder-solid border-gray-400 pb-2">
          <div className="flex flex-col md:flex-row justify-start ">
            <h2 className="text-xl font-bold text-gray-600">Szállítási díj:</h2>
            {freeShipping ? (
              <p className="md:ml-auto text-xl font-bold text-gray-600">
                1000 Ft
              </p>
            ) : (
              <p className="md:ml-auto text-xl font-bold text-green-600">
                INGYENES!
              </p>
            )}
          </div>
          <p className="mt-1 text-base text-gray-600 leading-relaxed">
            Mezőkövesd területén belül, valamint 5000 Ft-ot meghaladó vásárlás
            esetén ingyenes szállítást vállalunk.
          </p>
        </div>
        <div className="mt-2">
          <div className="flex flex-col md:flex-row justify-start">
            <h2 className="text-2xl font-bold text-gray-900">Teljes összeg:</h2>
            <p className="md:ml-auto text-2xl font-bold text-gray-900">
              {freeShipping ? 1000 + total : total}Ft
            </p>
          </div>
          <p className="mt-1 text-base text-gray-800 leading-relaxed">
            A teljes összeg a személyes átvételkor kerül kifizetésre
            <span className="font-bold"> készpénzben.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cart
