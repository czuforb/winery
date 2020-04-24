import React from "react"
import GatsbyImage from "gatsby-image"
import CartQuantityHandler from "./cartQuantityHandler"

const CartProduct = ({ data, image }) => {
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
    <li className="w-full p-2 bg-gray-100 rounded-md flex flex-col md:flex-row items-center justify-between my-2 shadow-sm">
      <div className="flex justify-start w-full md:w-2/4">
        <GatsbyImage
          fluid={imgSrc(image, data.category)}
          className="w-12 h-12"
        />
        <div className="flex flex-col justify-center items-start ml-2">
          <h2 className="text-xl font-bold text-gray-900">
            {data.name} {data.category}
          </h2>
          {data.amount === 0.75 ? (
            <p className="text-md font-bold text-gray-700">
              {data.quantity} darab 0.75 palack
            </p>
          ) : (
            <p className="text-md font-bold text-gray-700">
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
