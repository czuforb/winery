import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Hero = () => {
  const style = "w-full relative"
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
      <div className="container flex items-center justify-start h-screen mx-auto ">
        <div className="w-2/3 text-gray-100 ">
          <h1 className="text-5xl font-bold tracking-wide md:text-6xl font-display">
            Bükkaljai Termelői Bor
          </h1>
          <h2 className="w-2/3 text-xl leading-loose md:text-2xl">
            Minősített bükkaljai borok, családi pincészetből. Borcsomagok akár
            ingyenes kiszállítással!
          </h2>
          <Link
            to="/#products"
            className="inline-block px-4 py-2 my-10 text-2xl font-bold bg-green-600 rounded-md"
          >
            Bort rendelek
          </Link>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Hero
