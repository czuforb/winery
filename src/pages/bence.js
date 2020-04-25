import React from "react"
import { Formik, Field } from "formik"

import MyTextInput from "../components/MyTextInput"

const bence = props => {
  return (
    <div className="bg-gray-300 w-full p-4">
      <h1 className="w-full bg-indigo-900 text-indigo-100 text-2xl font-bold text-center p-2 mb-4">
        Hello Bence
      </h1>
      <Formik
        initialValues={{
          city: "",
          google: {
            address: "",
            coordinates: "",
          },
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {({ values, handleChange, handleSubmit }) => {
          return (
            <form
              onSubmit={handleSubmit}
              className="flex justify-start items-center flex-col h-screen"
            >
              <h2 className="text-center text-xl font-bold text-indigo-900">
                Válaszd ki a címed more:
              </h2>
              <div>
                <label htmlFor="city">Városka</label>
                <select
                  className="block"
                  name="city"
                  id="city"
                  onChange={handleChange}
                >
                  <option value="">Kérem válasszon város</option>
                  <option value="Mezőkövesd,">Mezőkövesd</option>
                  <option value="Tard,">Tard</option>
                  <option value="Bogács,">Bogács</option>
                </select>
              </div>
              <div>
                <label htmlFor="google">Pontos cím:</label>
                <Field
                  name="google"
                  id="google"
                  component={MyTextInput}
                  prefix={values.city}
                />
              </div>
              <button
                className="bg-indigo-700 p-4 font-bold text-cxl"
                type="submit"
              >
                submit
              </button>
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </form>
          )
        }}
      </Formik>
    </div>
  )
}

export default bence
