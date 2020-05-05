import React from "react"
import { useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
const AboutUs = () => {
  const image = useStaticQuery(graphql`
    query ImageQuery {
      file(relativePath: { eq: "feature.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="w-full py-20 bg-gray-100">
      <div className="container grid grid-cols-8 mx-auto">
        <Img
          className="col-span-4 -mr-40"
          fluid={image.file.childImageSharp.fluid}
        />
        <div className="z-40 flex items-center justify-start col-span-4">
          <div className="flex flex-col justify-start p-6 bg-gray-100">
            <h1 className="text-6xl font-bold font-display">Borászatunkról</h1>
            <p className="mb-6 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium doloremque officiis inventore, adipisci, voluptas
              saepe perspiciatis facere tempore animi incidunt debitis id!
              Dolore necessitatibus ab ipsa quae, quas modi quasi! Quos laborum
              recusandae quasi debitis expedita, totam inventore nam possimus,
              doloribus itaque impedit, quis cum necessitatibus dolore veritatis
              magnam est!
            </p>
            <Link
              to="/#products"
              className="inline px-4 py-2 text-xl font-bold text-green-100 bg-green-900 rounded group-hover:bg-green-700"
            >
              Rendelés
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
