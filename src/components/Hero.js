import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Hero = () => {
  const style = "min-h-screen"
  const data = useStaticQuery(graphql`
    query HeroBgQuery {
      file(relativePath: { eq: "bg_hero_big.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      Tag="section"
      className={style}
      fluid={data.file.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <div className="max-w-screen-xl h-screen mx-auto flex justify-start items-center">
        <div className="w-10/12 mx-auto md:mx-0 md:p-1 md:w-1/2 text-gray-100">
          <h1 className="text-5xl md:text-6xl font-bold">Termelői bor</h1>
          <h2 className="text-xl md:text-2xl ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            voluptatem accusantium quibusdam possimus odit! Minima a
            necessitatibus voluptas fugit cumque!
          </h2>
          <Link
            to="/#products"
            className="px-4 py-2 bg-green-600 rounded-md text-2xl inline-block my-10 font-bold"
          >
            Rendelés
          </Link>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Hero
