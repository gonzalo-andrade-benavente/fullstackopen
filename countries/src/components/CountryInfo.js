
const CountryInfo = ( {country} ) => {

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

        </div>
    )

}

export default CountryInfo;