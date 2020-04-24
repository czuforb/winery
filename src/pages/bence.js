import React from "react"
import { Formik, Form } from "formik"

import GoogleAddress from "../components/GoogleAddress"

const bence = () => {
  return (
    <div className="bg-gray-300 w-full p-4">
      <h1 className="w-full bg-indigo-900 text-indigo-100 text-2xl font-bold text-center p-2 mb-4">
        Hello Bence
      </h1>
      <section className="">
        <Formik
          initialValues={{
            address: "mezőkövesd",
          }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }, 1000)
          }}
        >
          {props => (
            <Form className="flex justify-around items-center flex-col h-screen">
              <h2 className="text-center text-xl font-bold text-indigo-900">
                Válaszd ki a címed more:
              </h2>
              <GoogleAddress name="address" type="text" label="Address:" />
              <button
                className="bg-indigo-900 text-indigo-100 text-md font-bold px-4 py-2"
                type="submit"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </section>
    </div>
  )
}

export default bence
