import React from "react"
import Button from "./Button"
import { motion } from "framer-motion"
const VideoHero = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="z-20 w-full text-center text-white md:w-1/3">
          <h1 className="text-5xl font-extrabold leading-tight font-display md:text-6xl">
            Termelői bor
          </h1>
          <h2 className="text-xl leading-relaxed font-body md:text-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            voluptatem accusantium quibusdam possimus odit! Minima a
            necessitatibus voluptas fugit cumque!
          </h2>
          <Button to="/#products">Rendelés</Button>
        </div>
      </div>
      <video
        autoPlay
        muted
        loop
        className="object-cover w-full h-screen overflow-hidden"
      >
        <source
          src="https://res.cloudinary.com/buforcz/video/upload/v1589470694/target_yuam06.webm"
          type="video/webm"
        />
      </video>
      <div className="absolute bottom-0 z-40 flex items-center justify-center w-full opacity-75">
        <motion.button
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1.7,
            type: "tween",
            yoyo: "Infinity",
          }}
          className="p-2 mb-10 border border-gray-400 rounded-full hover:bg-green-900"
        >
          <svg
            className="inline-block w-10 h-10 text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </motion.button>
      </div>
    </div>
  )
}

export default VideoHero
