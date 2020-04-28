import React from "react"
// Context
import CartContext from "../context"
// Layout
import Layout from "../components/layout/Layout"
// Components
import Hero from "../components/Hero"
import Portal from "../components/Portal"
import ProductList from "../components/ProductList"
import Order from "../components/Order"
const Index = () => (
  <CartContext>
    <Layout>
      {/* <Portal /> */}
      <Hero />
      <ProductList />
      <Order />
    </Layout>
  </CartContext>
)

export default Index
