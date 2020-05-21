import React, { useContext, useState } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { CartContext } from "../context"

import { motion } from "framer-motion"
const ProductItem = ({ node, index, width }) => {
  const { handleAddCart } = useContext(CartContext)
  const action = {
    type: "ADD",
    playload: {
      product: node,
    },
  }

  const image = useStaticQuery(graphql`
    query borQuery {
      allFile {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxHeight: 800) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    }
  `)

  const imageUrl = (image, file) => {
    const data = image.allFile.edges.find(
      e => e.node.childImageSharp.fluid.originalName === file
    )
    return data.node.childImageSharp.fluid
  }

  const shadow =
    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"

  const cardMotion = {
    hover: {
      boxShadow: shadow,
    },
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        type: "spring",
        damping: 100,
        mass: 5,
      },
    },
  }

  return (
    <motion.li
      whileTap="tap"
      whileHover="hover"
      variants={cardMotion}
      className="relative col-span-1 overflow-hidden bg-white"
    >
      <div className="p-4">
        <h2 className="pb-2 mb-2 text-2xl font-semibold tracking-wider border-b border-gray-300 font-display">
          {node.name} 2019
          <span className="block text-lg font-light tracking-tight text-gray-800 font-body">
            200 Ft
          </span>
        </h2>
        <div className="relative flex items-center justify-center">
          <Img
            className="relative w-full"
            fluid={imageUrl(image, node.image)}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <motion.button
          className="px-8 py-4 m-4 tracking-wider text-gray-100 bg-gray-900 "
          onClick={() => handleAddCart(action)}
        >
          <span className="inline-block" whileHover={{ scale: 1.05 }}>
            Kosárba rakom
          </span>
        </motion.button>
      </div>
    </motion.li>
  )
}

export default ProductItem

// SAFETY
// <div className="box-border flex flex-col items-center w-full my-2 sm:w-1/2 md:w-1/3 lg:w-1/4">
// <div className="relative flex flex-col items-center w-10/12 py-4 m-2 bg-gray-100 rounded shadow-md md:w-11/12">
//   <Img className="w-64 h-full" fluid={imageUrl(image, node.image)} />
//   <h2 className="text-2xl font-bold text-gray-900">{node.name}</h2>
//   <h3 className="text-base text-gray-800 uppercase">
//     {node.type} &bull; {node.category}
//   </h3>
//   <div className="flex flex-col items-center w-full my-1">
//     <p className="absolute top-0 right-0 p-2 m-2 text-base font-bold text-gray-900 bg-gray-200">
//       {node.price}Ft/ {node.amount}l
//     </p>

//     <button
//       className="px-4 py-2 text-xl font-bold text-green-100 bg-green-800 rounded"
//       onClick={() => handleAddCart(action)}
//     >
//       Kosárba rakom
//     </button>
//   </div>
// </div>
// </div>
