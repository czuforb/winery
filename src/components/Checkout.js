import React, { useState, useContext } from "react"
import { Formik, Form, Field } from "formik"
import { CartContext } from "../context"
import GoogleAddress from "./GoogleAddress"

const Checkout = () => {
  const { cart } = useContext(CartContext)

  return (
    <div className="w-full  my-4 flex flex-col items-start justify-center">
      <Formik
        initialValues={{
          name: "",
          phone: "06 30",
          email: "",
          address: "",
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {() => (
          <Form className="w-10/12 mx-auto p-4">
            <h3 className="font-bold text-xl w-full block border-b border-gray-600">
              Rendelés leadása:
            </h3>
            <div className="w-full border-b-1 my-1">
              <label
                htmlFor="name"
                className="block text-gray-700 text-md font-semibold mb-1"
              >
                Név:
              </label>
              <Field
                className="text-md bg-gray-300 appearance-none rounded w-full py-2 px-2 text-gray-700 font-bold mb-1 leading-tight focus:shadow-outline h-10"
                id="name"
                type="text"
                name="name"
                placeholder="Boros István"
              />
            </div>
            <div className="flex">
              <div className="w-1/2 border-b-1 border-gray-200 my-1 mr-2">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-md font-semibold mb-1 "
                >
                  Telefon
                </label>
                <Field
                  className="text-md bg-gray-300 appearance-none rounded w-full py-2 px-3 text-gray-700 font-bold mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                  id="phone"
                  type="text"
                  name="phone"
                  placeholder="06 30 123 4567"
                />
              </div>
              <div className="w-1/2 border-b-1 border-gray-200 my-1">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-md font-semibold mb-1"
                >
                  Email
                </label>
                <Field
                  className="text-md bg-gray-300 appearance-none rounded w-full py-2 px-3 text-gray-700 font-bold mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                  id="email"
                  type="text"
                  name="email"
                  placeholder="szeretem@bor.hu"
                />
              </div>
            </div>
            <div className="w-full border-b-1 border-gray-200 my-1">
              <label
                htmlFor="city"
                className="block text-gray-700 text-md font-semibold mb-1"
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
              <label
                className="block text-gray-700 text-md font-semibold mb-1"
                htmlFor="address"
              >
                Cím:
                <Field
                  name="address"
                  component={GoogleAddress}
                  placeholder="Bence Bence"
                />
              </label>
            </div>
            <button
              type="submit"
              className="p-4 bg-green-800 text-green-100 font-bold rounded-md"
            >
              Megrendelem
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Checkout
