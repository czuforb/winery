import React, { useContext } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { CartContext } from "../context"
// Layout
import Layout from "../components/Layout"
// Components
import Order from "../components/Order"
import CartQuantityHandler from "../components/CartQuantityHandler"

const Index = () => {
  const data = useStaticQuery(graphql`
    query prodimgQ {
      file(relativePath: { eq: "prod-feher.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="w-full h-screen ">
        <section className="container grid grid-cols-8 mx-auto mt-32">
          <div className="col-span-4 bg-teal-700">
            <Img fluid={data.file.childImageSharp.fluid} />
          </div>
          <div className="col-span-4 p-6">
            <h1 className="text-6xl font-extrabold font-display">
              Kékfrankos 2019
            </h1>
            <p>
              Az örök sláger bor, mert fiatalos, üde és divatos. Harapós, magas
              alkohollal rendelkező bor. Ajánljuk minden eseményre és
              társasághoz. Hogy ne üres kézzel kelljen érkezni egy vendégségbe.
              Áztatás nélkül direkt préseléssel készített, némi Co2-vel
              rendelkező, zamatos rozébor. A korty puha és kerek. Ideális
              hőmérsékleten fogyasztva egy igazi élményt ad egy könnyed
              üdvözléshez.
            </p>

            <div className="flex mt-32">
              <div className="flex items-end w-full mt-1 md:w-2/4">
                <div className="w-1/2 h-12">
                  <div className="relative flex flex-row h-10 mt-1 bg-transparent rounded-lg w-42">
                    <button className="w-10 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-400">
                      <span className="m-auto text-2xl font-bold">−</span>
                    </button>
                    <span className="w-12 px-4 py-2 font-bold bg-gray-300">
                      1
                    </span>
                    <button className="w-10 h-full text-gray-600 bg-gray-300 rounded-r cursor-pointer hover:text-gray-700 hover:bg-gray-400">
                      <span className="m-auto text-2xl font-bold">+</span>
                    </button>
                  </div>
                </div>
                <div className="w-1/2 text-right">
                  <p className="text-2xl font-bold text-gray-800">100000Ft</p>
                </div>
              </div>
              <button className="px-4 py-2 mx-auto text-xl font-bold text-green-100 bg-green-900 rounded group-hover:block group-hover:bg-green-700">
                Kosárba rakom
              </button>
            </div>
          </div>
        </section>
      </div>
      <div className="w-full h-screen">
        <div className="container grid grid-cols-4 mx-auto">
          <h1 className="col-span-4 text-6xl font-extrabold font-display">
            Kapcsolódó termékek
          </h1>
          <article className="col-span-1">
            <div className="relative py-4 overflow-hidden rounded hover:shadow-xl">
              <div className="relative flex items-center justify-center">
                <Img
                  className="relative w-full"
                  fluid={data.file.childImageSharp.fluid}
                />
              </div>
              <div className="flex flex-col items-center justify-center w-full p-6 group">
                <h2 className="text-2xl font-extrabold text-gray-900 font-display">
                  Kékfrankos 2019
                </h2>
                {/* <div className="flex flex-col items-center w-full my-1">
          <p className="absolute top-0 right-0 p-2 m-2 text-base font-bold text-gray-900 bg-gray-200">
            {node.price}Ft/ {node.amount}l
          </p>
        </div> */}
                <button className="px-4 py-2 mx-auto text-xl font-bold text-green-100 bg-green-900 rounded group-hover:block group-hover:bg-green-700">
                  Kosárba rakom
                </button>
              </div>
            </div>
          </article>
          <article className="col-span-1">
            <div className="relative py-4 overflow-hidden rounded hover:shadow-xl">
              <div className="relative flex items-center justify-center">
                <Img
                  className="relative w-full"
                  fluid={data.file.childImageSharp.fluid}
                />
              </div>
              <div className="flex flex-col items-center justify-center w-full p-6 group">
                <h2 className="text-2xl font-extrabold text-gray-900 font-display">
                  Kékfrankos 2019
                </h2>
                {/* <div className="flex flex-col items-center w-full my-1">
          <p className="absolute top-0 right-0 p-2 m-2 text-base font-bold text-gray-900 bg-gray-200">
            {node.price}Ft/ {node.amount}l
          </p>
        </div> */}
                <button className="px-4 py-2 mx-auto text-xl font-bold text-green-100 bg-green-900 rounded group-hover:block group-hover:bg-green-700">
                  Kosárba rakom
                </button>
              </div>
            </div>
          </article>
          <article className="col-span-1">
            <div className="relative py-4 overflow-hidden rounded hover:shadow-xl">
              <div className="relative flex items-center justify-center">
                <Img
                  className="relative w-full"
                  fluid={data.file.childImageSharp.fluid}
                />
              </div>
              <div className="flex flex-col items-center justify-center w-full p-6 group">
                <h2 className="text-2xl font-extrabold text-gray-900 font-display">
                  Kékfrankos 2019
                </h2>
                {/* <div className="flex flex-col items-center w-full my-1">
          <p className="absolute top-0 right-0 p-2 m-2 text-base font-bold text-gray-900 bg-gray-200">
            {node.price}Ft/ {node.amount}l
          </p>
        </div> */}
                <button className="px-4 py-2 mx-auto text-xl font-bold text-green-100 bg-green-900 rounded group-hover:block group-hover:bg-green-700">
                  Kosárba rakom
                </button>
              </div>
            </div>
          </article>
          <article className="col-span-1">
            <div className="relative py-4 overflow-hidden rounded hover:shadow-xl">
              <div className="relative flex items-center justify-center">
                <Img
                  className="relative w-full"
                  fluid={data.file.childImageSharp.fluid}
                />
              </div>
              <div className="flex flex-col items-center justify-center w-full p-6 group">
                <h2 className="text-2xl font-extrabold text-gray-900 font-display">
                  Kékfrankos 2019
                </h2>
                {/* <div className="flex flex-col items-center w-full my-1">
          <p className="absolute top-0 right-0 p-2 m-2 text-base font-bold text-gray-900 bg-gray-200">
            {node.price}Ft/ {node.amount}l
          </p>
        </div> */}
                <button className="px-4 py-2 mx-auto text-xl font-bold text-green-100 bg-green-900 rounded group-hover:block group-hover:bg-green-700">
                  Kosárba rakom
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
      <Order />
    </Layout>
  )
}

export default Index
