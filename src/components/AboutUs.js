import React, { useEffect } from "react"
import { useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Button from "./Button"
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
    <section className="w-full md:py-20 bg-homok-300">
      <div className="container grid grid-cols-2 mx-auto md:grid-cols-8">
        <motion.div
          className="col-span-2 overflow-visible md:-mr-40 md:col-span-4"
          style={{ scale }}
        >
          <Img fluid={image.file.childImageSharp.fluid} />
        </motion.div>
        <div className="z-40 flex items-center justify-start col-span-2 md:col-span-4">
          <div className="flex flex-col items-start justify-start p-6 px-4 bg-gray-100 shadow-xs">
            <h1 className="p-0 mb-4 text-4xl font-bold align-baseline border-b border-gray-500 md:text-4xl lg:text-6xl font-display">
              Borászatunkról
            </h1>
            <p className="mb-6 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium doloremque officiis inventore, adipisci, voluptas
              saepe perspiciatis facere tempore animi incidunt debitis id!
              Dolore necessitatibus ab ipsa quae, quas modi quasi! Quos laborum
              recusandae quasi debitis expedita, totam inventore nam possimus,
              doloribus itaque impedit, quis cum necessitatibus dolore veritatis
              magnam est!
            </p>
            <Button> Magunkról</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
