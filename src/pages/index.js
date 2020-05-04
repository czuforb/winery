import React from "react"
// Context
import CartContext from "../context"
// Layout
import Layout from "../components/layout/Layout"
// Components
import Hero from "../components/Hero"
import ProductList from "../components/ProductList"
import Order from "../components/Order"
import poster_image from "../../redwine.png"
import { Video } from "gatsby-video"
import { useStaticQuery, Link } from "gatsby"
const Index = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "video.mp4" }) {
        childVideoFfmpeg {
          webm: transcode(
            outputOptions: [
              "-crf 0"
              "-preset veryslow"
              "-movflags +faststart"
              "-b:v 2M"
              "-filter:v minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'"
            ]
            maxWidth: 900
            maxHeight: 480
            fileExtension: "webm"
            codec: "libvpx-vp9"
          ) {
            width
            src
            presentationMaxWidth
            presentationMaxHeight
            originalName
            height
            fileExtension
            aspectRatio
          }
          mp4: transcode(
            maxWidth: 900
            maxHeight: 480
            fileExtension: "mp4"
            codec: "libx264"
          ) {
            width
            src
            presentationMaxWidth
            presentationMaxHeight
            originalName
            height
            fileExtension
            aspectRatio
          }
        }
      }
    }
  `)
  const videos = data.file.childVideoFfmpeg

  console.log(videos)
  return (
    <CartContext>
      <Layout>
        <div className="relative w-full h-screen">
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
            <div className="z-20 w-full text-center text-white md:w-1/3">
              <h1 className="text-5xl font-bold md:text-6xl">Termelői bor</h1>
              <h2 className="text-xl md:text-2xl ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                voluptatem accusantium quibusdam possimus odit! Minima a
                necessitatibus voluptas fugit cumque!
              </h2>
              <Link
                to="/#products"
                className="inline-block px-4 py-2 my-10 text-2xl font-bold bg-green-600 rounded-md"
              >
                Rendelés
              </Link>
            </div>
          </div>
          <Video autoPlay muted loop sources={[videos.mp4, videos.webm]} />
        </div>
        <Hero />
        <ProductList />
        <Order />
      </Layout>
    </CartContext>
  )
}

export default Index
