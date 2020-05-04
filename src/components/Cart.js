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
      className="flex flex-col items-start justify-center w-full p-2 my-8"
    >
      <h2>KOSÁR</h2>
      <ul className="container flex flex-col items-center block p-2 mx-auto rounded-md min-h-320">
        {cart.length > 0 ? (
          cart.map((node, index) => (
            <CartProduct image={image} data={node} key={index} />
          ))
        ) : (
          <li className="box-content flex items-center justify-center w-full h-full p-2 bg-gray-400 rounded-md">
            <h2 className="text-xl font-bold text-gray-500">
              Üres a kosarad :(
            </h2>
          </li>
        )}
      </ul>
      <div className="container flex-col p-4 mx-auto mt-auto bg-gray-300 rounded-md">
        <div className="pb-2 border-b border-gray-400 boorder-solid">
          <div className="flex flex-col justify-start md:flex-row ">
            <h2 className="text-xl font-bold text-gray-600">Szállítási díj:</h2>
            {freeShipping ? (
              <p className="text-xl font-bold text-gray-600 md:ml-auto">
                1000 Ft
              </p>
            ) : (
              <p className="text-xl font-bold text-green-600 md:ml-auto">
                INGYENES!
              </p>
            )}
          </div>
          <p className="mt-1 text-base leading-relaxed text-gray-600">
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
