import React from "react"
// Context
import CartContext from "../context"
// Layout
import Layout from "../components/layout/Layout"
// Components
// import Hero from "../components/Hero"
import VideoHero from "../components/VideoHero"
import ProductList from "../components/ProductList"
import Order from "../components/Order"
import AboutUs from "../components/AboutUs"
// import { Link } from "gatsby"
const Index = () => {
  return (
    <CartContext>
      <Layout>
        <VideoHero />
        <AboutUs />
        {/* <Hero /> */}
        <ProductList />
        <Order />
      </Layout>
    </CartContext>
  )
}

export default Index
