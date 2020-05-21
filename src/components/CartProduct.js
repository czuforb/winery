import React from "react"
import GatsbyImage from "gatsby-image"
import CartQuantityHandler from "./CartQuantityHandler"
import { motion, AnimatePresence } from "framer-motion"

const CartProduct = ({ data, image, key }) => {
  const imgSrc = (image, type) => {
    const { edges } = image.allFile
    switch (type) {
      case "Fehér":
        return edges[0].node.childImageSharp.fluid
      case "Rozé":
        return edges[1].node.childImageSharp.fluid
      case "Vörös":
        return edges[2].node.childImageSharp.fluid
      default:
        return "no picture"
    }
  }

  return (
    <li className="flex flex-col items-center w-full p-2 bg-white rounded-md shadow-sm md:flex-row">
      <div className="flex justify-start w-full md:w-2/4">
        <GatsbyImage
          fluid={imgSrc(image, data.category)}
          className="w-12 h-12"
        />
        <div className="flex flex-col items-start justify-center ml-2">
          <h2 className="text-xl font-bold tracking-wide text-gray-900">
            {data.name} {data.category}
          </h2>
          {data.amount === 0.75 ? (
            <p className="text-gray-700 text-md">
              {data.quantity} darab 0.75 palack
            </p>
          ) : (
            <p className="text-gray-700 text-md">
              {data.amount * data.quantity} liter
            </p>
          )}
        </div>
      </div>
      <CartQuantityHandler id={data.id} price={data.price} />
    </li>
  )
}

export default CartProduct
