import axios from "axios";
import { useEffect, useState } from "react";
import Country from "./components/Country";
import CountryInfo from "./components/CountryInfo";

function App() {

  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState([]);


  const handleCountry = (e) => {
    setCountry(e.target.value);
  }

  useEffect(() => {
    if (country !== '') {
      axios.get(`https://restcountries.eu/rest/v2/name/${country}`)
        .then(response => {
          setCountries(response.data);
        }).catch(err => {
          console.log(err);
        })
    } else {
      setCountries([]);
    }
  }, [country]);

  return (
    <div>
      <h1>Find a country</h1>

      find countries <input value={country} onChange={handleCountry} />
      <br />
      { 
        countries.length > 9 
        ? 'Too many matches, specify another filter' 
        : countries.length === 1 
          ? <CountryInfo country={ countries[0] } />
          : countries.map( (country) => {
            return <Country key={ country.name } country={country} /> 
          })
      }
      <br />
    </div>
  );
}

export default App;
