import { useEffect, useState } from "react";
import axios from 'axios';

const CountryInfo = ( {country} ) => {

    const api_key = process.env.REACT_APP_API_KEY;

    const [ weather, setWeather] = useState({
        current: {
            temperature: 0,
            wind_speed: '',
            wind_dir: '',
            weather_icons: [{}]
        }
    });
    
    useEffect( () => {
        axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)
            .then( response => {
                setWeather(response.data);
                console.log(weather);
            }).catch( error => console.log(error) );
    }, []);

    return (
        <div>
            <h1>{ country.name } </h1>
            <p>capital { country.capital }</p>
            <p>population { country.population }</p>

            <h2> Languages </h2>
            <ul>
                {
                    country.languages.map(lang => {
                        return <li key={lang.iso639_1}> {lang.name} </li>
                    })
                }
            </ul>

            <img src={ country.flag } alt={ country.name } width="100px" height="100px" />

            <h2>Weather in { country.capital } </h2>

            <p><b>temperature: { weather.current.temperature } Celcius </b></p>

            <img src={weather.current.weather_icons[0]} />

            <p><b>wind:</b> { weather.current.wind_speed } direction={ weather.current.wind_dir } </p>


        </div>
    )

}

export default CountryInfo;