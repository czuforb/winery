import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"

const portalRoot =
  typeof document !== `undefined` ? document.getElementById("age-modal") : null

const Portal = ({ children }) => {
  const element =
    typeof document !== `undefined` ? document.createElement("div") : null

  const [age, setAge] = useState(false)

  useEffect(() => {
    portalRoot.appendChild(element)
    return () => {
      portalRoot.removeChild(element)
    }
  }, [element])

  const content = !age && (
    <div className="z-10 fixed inset-0 bg-backdrop flex justify-center items-center overflow-hidden">
      <div className="bg-green-100 py-4 px-6 flex flex-col items-center rounded shadow-xl">
        <h2 className="text-2xl font-bold my-2">
          Webáruházunk 18 éven felülieknek szóló termékeket árul.
        </h2>
        <p className="text-xl my-1">
          A gombra való kattintással beleegyezik, hogy elmúlt már 18 éves.
        </p>
        <button
          onClick={() => setAge(!age)}
          className="px-4 py-2 text-2xl font-bold bg-green-800 text-green-100 rounded my-6"
        >
          Elmúltam 18 éves.
        </button>
      </div>
    </div>
  )
  if (element) {
    return ReactDOM.createPortal(content, element)
  } else {
    return null
  }
}

export default Portal
