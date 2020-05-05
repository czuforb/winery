import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import { useCookies } from "react-cookie"

const portalRoot =
  typeof document !== `undefined` ? document.getElementById("age-modal") : null

const Portal = ({ children }) => {
  const element =
    typeof document !== `undefined` ? document.createElement("div") : null

  const [age, setAge] = useState(false)
  const [cookies, setCookie] = useCookies([])
  const changeCookie = () => {
    setCookie("consents", true, { path: "/" })
    setCookie("age", true, { path: "/" })
    setCookie("gdpr", "true", { path: "/" })
    setAge(!age)
  }
  useEffect(() => {
    portalRoot.appendChild(element)
    return () => {
      portalRoot.removeChild(element)
    }
  }, [element])

  const content = !age && (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden bg-backdrop">
      <div className="container flex flex-col items-center px-6 py-4 bg-green-100 border-t-4 border-red-700 rounded shadow-xl">
        <h2 className="my-2 text-2xl font-bold">Kedves Vendégünk!</h2>
        <p className="my-1 text-xl font-semibold text-gray-700">
          A gombra való kattintással beleegyezek az oldal adatvédelmi
          feltételeibe, és kijelentem, hogy már elmúltam 18 éves.
        </p>
        <button
          onClick={() => changeCookie()}
          className="px-4 py-2 my-6 text-2xl font-bold text-green-100 bg-green-800 rounded"
        >
          Igen!
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
