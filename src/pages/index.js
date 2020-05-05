import React from "react"
// Context
import CartContext from "../context"
// Layout
import Layout from "../components/layout/Layout"
// Components
import Feature from "../components/feature"
import Hero from "../components/Hero"
import ProductList from "../components/ProductList"
import Order from "../components/Order"
import { Link } from "gatsby"
const Index = () => {
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
          <video
            autoPlay
            muted
            loop
            className="object-cover w-full h-screen overflow-hidden"
          >
            <source
              src="https://res.cloudinary.com/buforcz/video/upload/v1588624152/video_yqtm92.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        {/* <Hero /> */}
        <Feature />
        <ProductList />
        <Order />
      </Layout>
    </CartContext>
  )
}

export default Index
