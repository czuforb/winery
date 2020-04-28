import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="w-full bg-green-900 py-20 text-green-100 border-t-8 border-green-700">
      <div className="xl:max-w-screen-xl flex flex-col md:flex-row mx-auto px-4">
        <div className="md:w-1/2 flex flex-col md:flex-row md:justify-around">
          <div className="w-full md:w-1/2 w-auto md:mx-auto my-4">
            <h3 className="text-xl text-green-100 border-b-2 border-green-700 pb-2 w-auto inline-block mb-4 font-bold">
              Információk
            </h3>
            <ul className="flex flex-col">
              <Link to="/aszf" className="text-lg  hover:text-green-200 ">
                Általános szerződési feltételek
              </Link>
              <Link to="/" className="text-lg  hover:text-green-200 ">
                Szállítás és fizetés
              </Link>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <div className="md:w-1/2 w-auto mx-auto my-4">
              <h3 className="text-xl text-green-100 border-b-2 border-green-700 pb-2 w-auto inline-block mb-4 font-bold">
                Boraink
              </h3>
              <ul className="flex flex-col">
                <Link to="/" className="text-lg  hover:text-green-200 ">
                  Vörösborok
                </Link>
                <Link to="/" className="text-lg  hover:text-green-200 ">
                  Fehérborok
                </Link>
                <Link to="/" className="text-lg  hover:text-green-200 ">
                  Rozéborok
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 ">
          <div className="md:w-1/2 mx-auto my-4">
            <h3 className="text-xl text-green-100 border-b-2 border-green-700 pb-2 w-auto inline-block mb-4 font-bold">
              Termelte és palackozta
            </h3>
            <div className="not-italic">
              <h2 className="text-2xl font-bold">Varga Zoltán</h2>
              <address className="ml-1 not-italic">
                Mezőkövesd 3400 <br />
                Berzsenyi Dániel utca 13.
              </address>
              <a className="ml-1" href="tel:+06301234567">
                06 30 123 4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
