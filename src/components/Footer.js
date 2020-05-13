import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="flex flex-col justify-start w-full text-green-100 bg-green-900 border-t-8 border-green-700">
      <div className="container flex flex-col px-4 mx-auto md:flex-row">
        <div className="flex flex-col md:w-1/2 md:flex-row md:justify-around">
          <div className="w-auto w-full my-4 md:w-1/2 md:mx-auto">
            <h3 className="inline-block w-auto pb-1 mb-4 text-xl font-bold text-green-100 border-b border-green-700 font-display">
              Információk
            </h3>
            <ul className="flex flex-col">
              <Link to="/aszf" className="text-lg hover:text-green-200 ">
                Általános szerződési feltételek
              </Link>
              <Link to="/" className="text-lg hover:text-green-200 ">
                Szállítás és fizetés
              </Link>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-auto mx-auto my-4 md:w-1/2">
              <h3 className="inline-block w-auto pb-1 mb-4 text-xl font-bold text-green-100 border-b border-green-700 font-display">
                Boraink
              </h3>
              <ul className="flex flex-col">
                <Link to="/" className="text-lg hover:text-green-200 ">
                  Vörösborok
                </Link>
                <Link to="/" className="text-lg hover:text-green-200 ">
                  Fehérborok
                </Link>
                <Link to="/" className="text-lg hover:text-green-200 ">
                  Rozéborok
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 ">
          <div className="mx-auto my-4 md:w-1/2">
            <h3 className="inline-block w-auto pb-1 mb-4 text-xl font-bold text-green-100 border-b border-green-700 font-display">
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
