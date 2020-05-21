import React from "react"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { motion, useViewportScroll, useTransform } from "framer-motion"
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

  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.4])

  return (
    <section className="w-full bg-gray-300 md:py-20">
      <div className="container grid grid-cols-2 mx-auto md:grid-cols-8">
        <motion.div
          className="hidden col-span-2 overflow-hidden md:block md:-mr-40 md:col-span-4"
          style={{ scale }}
        >
          <Img fluid={image.file.childImageSharp.fluid} />
        </motion.div>
        <div className="z-40 flex items-center justify-center col-span-2 md:col-span-3">
          <div className="flex flex-col items-start justify-start p-4 bg-gray-100">
            <h1 className="p-0 pb-4 mb-4 text-xl font-bold tracking-wider border-b border-gray-300 md:text-2xl lg:text-4xl font-display">
              Borászatunkról
            </h1>
            <p className="mb-6 leading-loose break-all text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium doloremque officiis inventore, adipisci, voluptas
              saepe perspiciatis facere tempore animi incidunt debitis id!
              Dolore necessitatibus ab ipsa quae, quas modi quasi! Quos laborum
              recusandae quasi debitis expedita, totam inventore nam possimus,
              doloribus itaque impedit, quis cum necessitatibus dolore veritatis
              magnam est!
            </p>
            <button className="pb-0 ml-auto text-lg border-gray-900 hover:border-b">
              Magunkról
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
