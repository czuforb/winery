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
    <div className="w-1/4 m-6 relative overflow-hidden bg-green-800 rounded shadow-lg">
      <div className="relative flex items-center justify-center">
        <Img className="relative w-full" fluid={imageUrl(image, node.image)} />
      </div>
      <div className="relative text-white px-6 pb-6 mt-6">
        <span className="block opacity-75 -mb-1">Indoor</span>
        <div className="flex justify-between">
          <span className="block font-semibold text-xl">Peace Lily</span>
          <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
            $36.00
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductItem

// SAFETY
// <div className="w-full sm:w-1/2  md:w-1/3 lg:w-1/4 box-border flex flex-col items-center my-2">
// <div className="relative m-2 w-10/12 md:w-11/12 rounded shadow-md bg-gray-100 flex flex-col items-center py-4">
//   <Img className="h-full w-64" fluid={imageUrl(image, node.image)} />
//   <h2 className="text-gray-900 font-bold text-2xl">{node.name}</h2>
//   <h3 className="text-gray-800 text-base uppercase">
//     {node.type} &bull; {node.category}
//   </h3>
//   <div className="w-full flex flex-col items-center my-1">
//     <p className="absolute top-0 right-0 text-gray-900 text-base font-bold p-2 bg-gray-200 m-2">
//       {node.price}Ft/ {node.amount}l
//     </p>

//     <button
//       className="px-4 py-2 bg-green-800 text-green-100 font-bold text-xl rounded"
//       onClick={() => handleAddCart(action)}
//     >
//       Kosárba rakom
//     </button>
//   </div>
// </div>
// </div>
