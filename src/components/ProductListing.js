import React from "react"
import VisibilitySensor from "react-visibility-sensor"
import { motion, useAnimation } from "framer-motion"
import ProductItem from "./ProductItem"

import useDimensions from "react-use-dimensions"

const ProductListing = ({ category, title, products }) => {
  const list = products.filter(element => element.category === category)

  console.log(list)
  // Animation settings
  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  }

  const controls = useAnimation()

  const [ref, { x, y, width }] = useDimensions()

  return (
    <VisibilitySensor partialVisibility={true}>
      {({ isVisible }) => {
        if (isVisible) {
          controls.start("visible")
        }
        return (
          <article
            ref={ref}
            id="voros"
            className="flex flex-col w-full mx-auto my-8"
          >
            <div className="w-full pb-1 mx-auto mb-6 text-gray-800 border-b border-gray-400">
              <h3 className="inline-block text-3xl font-bold font-display md:text-4xl text-zold-800">
                {title}
              </h3>
            </div>

            <motion.ul
              variants={container}
              initial="hidden"
              animate={controls}
              className="grid w-full grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-2 md:gap-4 md:grid-cols-3 lg:grid-cols-4"
            >
              {list.map((node, i) => (
                <ProductItem
                  width={width}
                  key={node.id}
                  index={i}
                  node={node}
                />
              ))}
            </motion.ul>
          </article>
        )
      }}
    </VisibilitySensor>
  )
}

export default ProductListing
