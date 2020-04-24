/*global google*/
import React from "react"
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete"
import { useField } from "formik"

const GoogleAddress = ({ label, ...props }) => {
  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error))
  }
  const [field, meta, helpers] = useField(props)
  return (
    <>
      <label>
        {label}
        <PlacesAutocomplete
          value={field.value}
          onChange={field.onChange}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => {
            return (
              <input
                {...getInputProps({
                  placeholder: "Search Places ...",
                  className: "location-search-input",
                })}
              />
            )
          }}
        </PlacesAutocomplete>
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}
export default GoogleAddress
