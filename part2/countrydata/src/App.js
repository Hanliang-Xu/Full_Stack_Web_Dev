import { useState, useEffect } from 'react'
import axios from 'axios'

const DisplayResult = (props) => {
  if (props.countriesToShow.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  }
  else if (props.countriesToShow.length == 1) {
    const country = props.countriesToShow[0]
    console.log(country.flags)
    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <ul>
          {Object.keys(country.languages).map((keyName, i) => (
            <li key={i}>
              {country.languages[keyName]}
            </li>
          ))}
        </ul>
        <img src={country.flags.png} key={country.flags}/>
      </div>
    )
  }
  return (
    <ul>
      {props.countriesToShow.map(country =>
        <li key={country.name.common}>{country.name.common}</li>
      )}
    </ul>
  )
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterName, setFilterName] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }

  useEffect(hook, [])
  
  const handleFilterChange = (event) => {
    setFilterName(event.target.value)
  }

  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(filterName.toLowerCase()))

  return (
    <div>
      <p>find countries</p>
      <input
        value={filterName}
        onChange={handleFilterChange}
      / >
      <DisplayResult countriesToShow={countriesToShow}/>
    </div>
  )
}

export default App