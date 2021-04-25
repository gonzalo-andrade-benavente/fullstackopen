import { useState } from "react";
import CountryInfo from "./CountryInfo";

const Country = ( { country } ) => {

    const [toogle, setToogle] = useState(false);
    return(
        <div>
           <h3> { country.name } <button onClick={ () => setToogle(!toogle) }> show </button> </h3>
           {
               toogle && <CountryInfo country={ country }/>
           }
        </div>
    )

}

export default Country;