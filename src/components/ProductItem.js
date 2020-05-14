import React, { useContext, useState } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { CartContext } from "../context"
import { motion } from "framer-motion"
const ProductItem = ({ node, index }) => {
  const [hovered, setHover] = useState(false)
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

  const item = {
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

  const shadow =
    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"

  const buttonMotion = {
    rest: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.6,
      },
    },
    hover: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.15,
      },
    },
  }

  const transition = {
    duration: 0.7,
    type: "tween",
    ease: "easeOut",
  }
  const textMotion = {
    rest: {
      x: 0,
      opacity: 1,
      transition,
    },
    hover: {
      x: 200,
      opacity: 0,
      transition,
    },
  }
  const cardMotion = {
    hover: {
      boxShadow: shadow,
    },
  }
  return (
    <motion.li
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={cardMotion}
      className="relative col-span-1 py-4 overflow-hidden rounded"
    >
      <div className="relative flex items-center justify-center">
        <Img className="relative w-full" fluid={imageUrl(image, node.image)} />
      </div>
      <div className="flex flex-col items-center justify-center w-full p-6 group">
        <motion.h2
          variants={textMotion}
          className="text-2xl font-extrabold text-gray-900 font-display"
        >
          {node.name} 2019
        </motion.h2>
        <motion.div className="absolute mx-auto" variants={buttonMotion}>
          <motion.button
            className="p-4 text-xl font-bold bg-homok-300 text-homok-900"
            whileHover={{ scale: 1.1, boxShadow: shadow }}
            whileTap={{ scale: 0.9, boxShadow: 0 }}
            onClick={() => handleAddCart(action)}
          >
            Kosárba rakom
          </motion.button>
        </motion.div>
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
