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
      <div className="w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl flex flex-col items-center mx-auto py-24">
        <h2 className="text-4xl font-bold my-4">Kínálatunk</h2>
        <p className="text-center p-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
          nulla dolor ducimus cum cupiditate unde minus.
        </p>
        <div className="flex flex-wrap justify-around">
          <Link
            to="/#voros"
            className="px-2 py-1 m-2 bg-gray-100 shadow-sm rounded-md text-red-900 items-baseline text-lg font-bold hover:bg-gray-200"
          >
            <span className="inline-block p-2 bg-red-800 rounded-full mx-1"></span>
            Vörösborok
          </Link>
          <Link
            to="/#feher"
            className="px-2 py-1 m-2 bg-gray-100 shadow-sm rounded-md text-yellow-900 items-baseline text-lg font-bold hover:bg-gray-200"
          >
            <span className="inline-block p-2 bg-yellow-400 rounded-full mx-1"></span>
            Fehérborok
          </Link>
          <Link
            to="/#roze"
            className="px-2 py-1 m-2 bg-gray-100 shadow-sm rounded-md text-red-700 items-baseline text-lg font-bold hover:bg-gray-200"
          >
            <span className="inline-block p-2 bg-red-300 rounded-full mx-1"></span>
            Rozéborok
          </Link>
        </div>
        <div>
          <article id="voros" className="w-full mx-auto flex flex-col my-2">
            <BackgroundImage
              Tag="div"
              className="block p-10 text-red-900"
              style={{
                borderRadius: 10,
              }}
              fluid={data.file.childImageSharp.fluid}
            >
              <h3 className="text-3xl md:text-4xl font-bold inline-block">
                Vörösborok
              </h3>
            </BackgroundImage>
            <div className="flex flex-wrap justify-around">
              {products
                .filter(element => element.category === "Vörös")
                .map(node => (
                  <ProductItem key={node.id} node={node} />
                ))}
            </div>
          </article>
          <article id="feher" className="w-full mx-auto flex flex-col my-12">
            <div className="w-10/12 md:w-full mx-auto pb-1 border-b border-gray-400 mx-4">
              <h3 className="text-3xl md:text-4xl font-bold inline-block">
                Fehérborok
              </h3>
            </div>
            <div className="flex flex-wrap">
              {products
                .filter(element => element.category === "Fehér")
                .map(node => (
                  <ProductItem key={node.id} node={node} />
                ))}
            </div>
          </article>
          <article id="roze" className="w-full mx-auto flex flex-col my-12">
            <div className="w-10/12 md:w-full mx-auto pb-1 border-b border-gray-400 mx-4">
              <h3 className="text-3xl md:text-4xl font-bold inline-block">
                Rozéborok
              </h3>
            </div>
            <div className="flex flex-wrap">
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
