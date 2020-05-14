import React, { useContext } from "react"
import { Link } from "gatsby"
import { CartContext } from "../context"
import ProductListing from "./ProductListing"
const ProductList = () => {
  const {
    products: [products],
  } = useContext(CartContext)

  return (
    <section id="products" className="w-full">
      <div className="container flex flex-col px-4 mx-auto ">
        <div className="flex flex-col flex-wrap items-center py-12 mx-auto">
          <h2 className="text-6xl font-bold leading-none align-bottom font-display">
            Kínálatunk
          </h2>
          <p className="p-4 text-xl text-center">
            Válogasson kedvére és rendeljen gyors házhoz szállítással
            webáruházunkból!
          </p>
          <div className="flex flex-wrap justify-around">
            <Link
              to="/#voros"
              className="items-baseline px-2 py-1 m-2 text-lg font-bold text-red-900 bg-gray-100 rounded-md shadow-sm hover:bg-green-900"
            >
              <span className="inline-block p-2 mx-1 bg-red-800 rounded-full"></span>
              Vörösborok
            </Link>
            <Link
              to="/#feher"
              className="items-baseline px-2 py-1 m-2 text-lg font-bold text-yellow-900 bg-gray-100 rounded-md shadow-sm hover:bg-green-900"
            >
              <span className="inline-block p-2 mx-1 bg-yellow-400 rounded-full"></span>
              Fehérborok
            </Link>
            <Link
              to="/#roze"
              className="items-baseline px-2 py-1 m-2 text-lg font-bold text-red-700 bg-gray-100 rounded-md shadow-sm hover:bg-green-900"
            >
              <span className="inline-block p-2 mx-1 bg-red-300 rounded-full"></span>
              Rozéborok
            </Link>
          </div>
        </div>

        {/* THE PRODUCT LIST STARTS HERE */}

        <div>
          <ProductListing
            category="Vörös"
            title="Vörösborok"
            products={products}
          />
          {/* WHITE WINE */}
          <ProductListing
            category="Fehér"
            title="Fehérborok"
            products={products}
          />
          {/* ROSE WINES */}
          <ProductListing
            category="Rozé"
            title="Rozéborok"
            products={products}
          />
        </div>
      </div>
    </section>
  )
}

export default ProductList
