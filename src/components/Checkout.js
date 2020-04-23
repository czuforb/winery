import React, { useState, useEffect, useContext } from "react"
import { Formik, Form, Field, FormikProps } from "formik"
import * as Yup from "yup"
import { CartContext } from "../context"
import LocationSearch from "./LocationSearch"
import FormikPlacesAutoComplete from "./LocationSearch"
import Axios from "axios"

const Checkout = () => {
  const { cart } = useContext(CartContext)
  const [order, setOrder] = useState(cart)

  return (
    <div className="w-full my-4 flex flex-col items-start justify-center">
      <Formik
        initialValues={{
          name: "bence",
          phone: "123",
          email: "bence@bence.com",
          address: "hello",
        }}
        onSubmit={(values, actions) => {
          Axios.post("api/barion")
        }}
      >
        {() => (
          <Form className="w-10/12 mx-auto p-4">
            <div className="w-full border-b-1 border-gray-200 my-2">
              <label
                htmlFor="name"
                className="block text-gray-700 text-md font-semibold mb-2"
              >
                Név:
              </label>
              <Field
                className="text-md bg-gray-300 appearance-none rounded w-full py-2 px-3 text-gray-700 font-bold mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="name"
                type="text"
                name="name"
                placeholder="Név"
              />
            </div>
            <div className="w-full border-b-1 border-gray-200 my-2">
              <label
                htmlFor="phone"
                className="block text-gray-700 text-md font-semibold mb-2"
              >
                Telefon
              </label>
              <Field
                className="text-md bg-gray-300 appearance-none rounded w-full py-2 px-3 text-gray-700 font-bold mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="phone"
                type="text"
                name="phone"
                placeholder="Név"
              />
            </div>
            <div className="w-full border-b-1 border-gray-200 my-2">
              <label
                htmlFor="email"
                className="block text-gray-700 text-md font-semibold mb-2"
              >
                Email
              </label>
              <Field
                className="text-md bg-gray-300 appearance-none rounded w-full py-2 px-3 text-gray-700 font-bold mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="email"
                type="text"
                name="email"
                placeholder="Név"
              />
            </div>
            <div className="w-full border-b-1 border-gray-200 my-2">
              <label
                htmlFor="city"
                className="block text-gray-700 text-md font-semibold mb-2"
              >
                Település:
              </label>
              <Field
                className="text-md bg-gray-300 appearance-none rounded w-full py-2 px-3 text-gray-700 font-bold mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="city"
                name="city"
                as="select"
              >
                <option value="">Válasszon települést</option>
                <option value="Mezőkövesd">Mezőkövesd</option>
                <option value="Tard">Tard</option>
              </Field>
            </div>
            <div>
              <label htmlFor="email">
                Location
                <Field name="location" component={FormikPlacesAutoComplete} />
              </label>
            </div>
            <button className="p-4 bg-green-800 text-green-100 font-bold rounded-md">
              Megrendelem
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Checkout
