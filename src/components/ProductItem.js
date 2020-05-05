import React, { useContext } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { CartContext } from "../context"

const ProductItem = ({ node }) => {
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

  return (
    <div className="relative col-span-1 py-4 overflow-hidden rounded hover:shadow-xl">
      <div className="relative flex items-center justify-center">
        <Img className="relative w-full" fluid={imageUrl(image, node.image)} />
      </div>
      <div className="flex flex-col items-center justify-center w-full p-6 group">
        <h2 className="text-2xl font-extrabold text-gray-900 font-display">
          {node.name} 2019
        </h2>
        {/* <div className="flex flex-col items-center w-full my-1">
          <p className="absolute top-0 right-0 p-2 m-2 text-base font-bold text-gray-900 bg-gray-200">
            {node.price}Ft/ {node.amount}l
          </p>
        </div> */}
        <button
          className="hidden px-4 py-2 mx-auto text-xl font-bold text-green-100 bg-green-900 rounded group-hover:block group-hover:bg-green-700"
          onClick={() => handleAddCart(action)}
        >
          Kosárba rakom
        </button>
      </div>
    </div>
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
