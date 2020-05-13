import React from "react"
// Context
import CartContext from "../context"
// Layout
import Layout from "../components/Layout"
// Components
// import Hero from "../components/Hero"
import VideoHero from "../components/VideoHero"
import ProductList from "../components/ProductList"
import Order from "../components/Order"
import AboutUs from "../components/AboutUs"
import SpringTest from "../components/SpringTest"
// import { Link } from "gatsby"
const Index = () => {
  return (
    <Layout>
      <VideoHero />
      <AboutUs />
      <ProductList />
      <Order />
    </Layout>
  )
}

export default Index
