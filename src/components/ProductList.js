import React, { useContext } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { CartContext } from "../context"
import ProductItem from "./ProductItem"
import BackgroundImage from "gatsby-background-image"

const ProductList = () => {
  const {
    products: [products],
  } = useContext(CartContext)

  const data = useStaticQuery(graphql`
    query redWineQuery {
      file(relativePath: { eq: "redwine.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section id="products" className="w-full bg-gray-300">
      <div className="container flex flex-col px-4 mx-auto">
        <div className="flex flex-col flex-wrap items-center py-24 mx-auto">
          <h2 className="my-4 text-4xl font-bold">Kínálatunk</h2>
          <p className="p-4 text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            nulla dolor ducimus cum cupiditate unde minus.
          </p>
          <div className="flex flex-wrap justify-around">
            <Link
              to="/#voros"
              className="items-baseline px-2 py-1 m-2 text-lg font-bold text-red-900 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200"
            >
              <span className="inline-block p-2 mx-1 bg-red-800 rounded-full"></span>
              Vörösborok
            </Link>
            <Link
              to="/#feher"
              className="items-baseline px-2 py-1 m-2 text-lg font-bold text-yellow-900 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200"
            >
              <span className="inline-block p-2 mx-1 bg-yellow-400 rounded-full"></span>
              Fehérborok
            </Link>
            <Link
              to="/#roze"
              className="items-baseline px-2 py-1 m-2 text-lg font-bold text-red-700 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200"
            >
              <span className="inline-block p-2 mx-1 bg-red-300 rounded-full"></span>
              Rozéborok
            </Link>
          </div>
        </div>

        {/* THE PRODUCT LIST STARTS HERE */}

        <div>
          <article id="voros" className="flex flex-col w-full mx-auto my-8">
            <div className="w-full pb-1 mx-auto mb-6 text-gray-800 border-b border-gray-400">
              <h3 className="inline-block text-3xl font-bold md:text-4xl">
                Vörösborok
              </h3>
            </div>
            <div className="grid w-full grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-2 md:gap-4 md:grid-cols-3 lg:grid-cols-4">
              {products
                .filter(element => element.category === "Vörös")
                .map(node => (
                  <ProductItem key={node.id} node={node} />
                ))}
            </div>
          </article>
          {/* WHITE WINE */}
          <article
            id="voros"
            className="flex flex-col w-full row-auto mx-auto my-8"
          >
            <div className="pb-1 mx-auto mb-6 text-gray-800 border-b border-gray-400 md:w-full">
              <h3 className="inline-block text-3xl font-bold md:text-4xl">
                Fehérborok
              </h3>
            </div>
            <div className="grid w-full grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-2 md:gap-4 md:grid-cols-3 lg:grid-cols-4">
              {products
                .filter(element => element.category === "Fehér")
                .map(node => (
                  <ProductItem key={node.id} node={node} />
                ))}
            </div>
          </article>
          {/* ROSE WINES */}
          <article id="voros" className="flex flex-col w-full mx-auto my-8">
            <div className="pb-1 mx-auto mb-6 text-gray-800 border-b border-gray-400 md:w-full">
              <h3 className="inline-block text-3xl font-bold md:text-4xl">
                Rozéborok
              </h3>
            </div>
            <div className="grid w-full grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-2 md:gap-4 md:grid-cols-3 lg:grid-cols-4">
              {products
                .filter(element => element.category === "Rozé")
                .map(node => (
                  <ProductItem key={node.id} node={node} />
                ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default ProductList
