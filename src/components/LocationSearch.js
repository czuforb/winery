/*global google*/
import React, { Component } from "react"
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete"

class FormikPlacesAutoComplete extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: props.field.name,
      address: props.value || "",
    }
  }

  handleError = error => {
    this.props.form.setFieldError(this.state.name, error)
  }

  handleChange = address => {
    this.setState(() => {
      this.props.form.setFieldTouched(`${this.state.name}.value`)
      this.props.form.setFieldTouched(`${this.state.name}.address`)
      this.props.form.setFieldValue(this.state.name, { value: address })
      return { address }
    })
  }

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState(() => {
          this.props.form.setFieldValue(this.state.name, {
            value: address,
            address,
            coordinates: latLng,
          })
          return { address }
        })
      })
      .catch(error => this.props.form.setFieldError(this.state.name, error))
  }

  render() {
    const {
      field: { name, ...field }, // { name, value, onChange, onBlur }
      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
      classes,
      label,
      ...props
    } = this.props

    const error = errors[name]
    const touch = touched[name]
    console.log(this.state)

    const searchOptions = {
      // location: new google.maps.LatLng(47.807896, 20.550019),
      //  radius: 2000,
      types: ["address"],
    }
    return (
      <PlacesAutocomplete
        name={name}
        id={name}
        {...props}
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        onError={this.handleError}
        debounce={500}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <div>
              <select>
                <option value="Mezőkövesd">Mezőkövesd</option>
                <option value="Mezőkövesd">Mezőkövesd</option>
                <option value="Mezőkövesd">Mezőkövesd</option>
              </select>
            </div>
            <div>
              <input
                {...getInputProps({
                  placeholder: "Street",
                  className: "location-search-input form-control",
                })}
              />
            </div>
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
    )
  }
}

export default FormikPlacesAutoComplete
