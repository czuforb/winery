import React, { useState, useEffect } from "react"
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete"
const MyTextInput = ({
  field: { name, ...field }, // { name, value, onChange, onBlur }
  form: {
    values,
    setFieldTouched,
    setFieldError,
    setFieldValue,
    touched,
    errors,
  }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc
  label,
  classStyle,
  prefix,
  ...props
}) => {
  const searchOptions = {
    componentRestrictions: { country: "hu" },
    types: ["address"],
  }
  const [input] = useState("")
  const [address, setAddress] = useState("")
  const fieldName = field.name

  useEffect(() => {
    setAddress(`${prefix} `)
  }, [prefix])

  const handleError = error => {
    setFieldError(fieldName, error)
  }

  const handleChange = address => {
    setAddress(address)
  }

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        setAddress(() => {
          setFieldValue("address", {
            value: address,
            coordinates: latLng,
          })
          return address
        })
      })
      .catch(error => setFieldError(fieldName, error))
  }
  return (
    <div>
      <PlacesAutocomplete
        name={fieldName}
        id={fieldName}
        {...props}
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
        onError={handleError}
        searchOptions={searchOptions}
        debounce={500}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "Search Places ...",
                className: classStyle,
                disabled: prefix === "" ? true : false,
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item"
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" }
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

      <pre>{JSON.stringify(props.field, null, 2)}</pre>
    </div>
  )
}

export default MyTextInput
