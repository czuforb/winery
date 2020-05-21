import React, { useContext } from "react"
import { Formik, Form, Field } from "formik"
import { CartContext } from "../context"
import MyTextInput from "../components/MyTextInput"

const Checkout = () => {
  const { cart } = useContext(CartContext)

  return (
    <div className="flex flex-col col-span-2 px-4 md:p-12">
      <Formik
        initialValues={{
          name: "Bence Czufor",
          phone: "06 30 5537883",
          email: "hi@bence.cz",
          city: "Mezőkövesd",
          address: "",
        }}
        onSubmit={(values, actions) => {
          fetch("/api/sendorder", {
            method: "post",
            body: JSON.stringify({ cart, values }),
          })
            .then(response => response.json())
            .then(data => {
              console.log("Success:", data)
            })
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form
            onSubmit={handleSubmit}
            className="flex flex-col justify-between"
          >
            <div className="">
              <div className="w-full pb-1 mx-auto mb-6 text-gray-800 border-b border-gray-400">
                <h3 className="inline-block text-3xl font-bold font-display md:text-4xl text-zold-800">
                  Rendelés
                </h3>
              </div>

              <div className="w-full my-1 border-b-1">
                <label
                  htmlFor="name"
                  className="block mb-1 font-semibold text-gray-700 text-md"
                >
                  Név:
                </label>
                <Field
                  className="w-full h-10 px-2 py-2 mb-1 font-bold leading-tight text-gray-700 bg-gray-300 rounded appearance-none text-md focus:shadow-outline"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Boros István"
                />
              </div>
              <div className="flex">
                <div className="w-1/2 my-1 mr-2 border-gray-200 border-b-1">
                  <label
                    htmlFor="phone"
                    className="block mb-1 font-semibold text-gray-700 text-md "
                  >
                    Telefon
                  </label>
                  <Field
                    className="w-full h-10 px-3 py-2 mb-1 font-bold leading-tight text-gray-700 bg-gray-300 rounded appearance-none text-md focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="text"
                    name="phone"
                    placeholder="06 30 123 4567"
                  />
                </div>
                <div className="w-1/2 my-1 border-gray-200 border-b-1">
                  <label
                    htmlFor="email"
                    className="block mb-1 font-semibold text-gray-700 text-md"
                  >
                    Email
                  </label>
                  <Field
                    className="w-full h-10 px-3 py-2 mb-1 font-bold leading-tight text-gray-700 bg-gray-300 rounded appearance-none text-md focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    name="email"
                    placeholder="szeretem@bor.hu"
                  />
                </div>
              </div>
              <div className="w-full my-1 border-gray-200 border-b-1">
                <label
                  htmlFor="city"
                  className="block mb-1 font-semibold text-gray-700 text-md"
                >
                  Település:
                </label>
                <Field
                  className="w-full h-10 px-3 py-2 mb-1 font-bold leading-tight text-gray-700 bg-gray-300 rounded text-md focus:outline-none focus:shadow-outline"
                  id="city"
                  name="city"
                  as="select"
                >
                  <option value="">Válasszon települést</option>
                  <option value="Mezőkövesd,">Mezőkövesd</option>
                  <option value="Tard,">Tard</option>
                </Field>
              </div>
              <div className="mb-8">
                <label
                  htmlFor="address"
                  className="block mb-1 font-semibold text-gray-700 text-md"
                >
                  Cím:
                </label>
                <Field
                  classStyle="text-md bg-gray-300 appearance-none rounded w-full py-2 px-3 text-gray-700 font-bold mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                  name="address"
                  id="address"
                  component={MyTextInput}
                  prefix={values.city}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 mx-auto mt-auto text-xl text-gray-100 bg-gray-900 rounded"
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

/*

WAZE STUFF

    {values.address !== "" ? (
              <button
                className="p-4 mx-6 font-bold text-yellow-100 bg-yellow-700 rounded-md"
                disabled={values.address.coordinates ? false : true}
              >
                <a
                  href={`https://www.waze.com/ul?ll=${values.address.coordinates.lat}%2C${values.address.coordinates.lng}&navigate=yes&zoom=17`}
                >
                  Kiszállítom
                </a>
              </button>
            ) : null}



*/
