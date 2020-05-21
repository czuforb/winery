import React, { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

const RevealTest = () => {
  const [state, setState] = useState(false)

  const controls = useAnimation()
  const button = useAnimation()

  const text = {
    hidden: {
      y: 100,
    },
    revealed: {
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  }

  const container = {
    hidden: {},
    revealed: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const sequence = async () => {
    await controls.start("revealed")
    return await button.start({
      transform: "translate3d(30px,0,40px)",
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    })
  }

  useEffect(() => {
    sequence()
  }, [])

  return (
    <div className="flex justify-center w-full h-screen bg-gray-100">
      <motion.div
        animate={controls}
        initial="hidden"
        variants={container}
        onClick={() => setState(!state)}
        className="container flex flex-col items-start justify-center mx-auto"
      >
        <div className="overflow-hidden bg-gray-100">
          <motion.h1
            variants={text}
            className="inline-block text-6xl font-extrabold"
          >
            Hello Bello!
          </motion.h1>
        </div>
        <div className="overflow-hidden bg-gray-100">
          <motion.h2
            variants={text}
            className="inline-block w-1/2 text-xl font-bold leading-loose"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
            ipsum nisi? Molestias consequatur ad illo accusamus minus, fugiat,
            eos, ex fuga officiis nemo doloribus ullam nihil aperiam dolorum
            architecto nostrum?
          </motion.h2>
        </div>

        <motion.button
          initial={{ opacity: 0, transform: "translate3d(0,0,100px)" }}
          animate={button}
          className="px-6 py-4 border-2 border-gray-900"
        >
          BLBLA
        </motion.button>
      </motion.div>
    </div>
  )
}

export default RevealTest
