import { useState } from "react"

const Unicafe = () => {

    const [ good, setGood ] = useState(0);
    const [ neutral, setNeutral ] = useState(0);
    const [ bad, setBad ] = useState(0);
    const [ allClicks, setAllClicks] = useState([]);

    const Button = ( props ) => {
        //console.log(props);
        const { text , onclick } = props;
        return(
            <button onClick={onclick}>
                { text }
            </button>
        )
    }

    const handleGood = () => { 
        setGood(good + 1);
        setAllClicks(allClicks.concat(1));
    };
    
    const handleNeutral = () => {
        setNeutral(neutral + 1);
        setAllClicks(allClicks.concat(0));
    };
    
    const handleBad = () => {
        setBad(bad + 1);
        setAllClicks(allClicks.concat(-1));
    };

    const getAverage = ( clicks ) => {
        let total = 0;

        if ( clicks.length > 0) {
            clicks.map( val => total += val );
            total = total / clicks.length;
        }

        return total;
    }

    const getPorcentual = ( vote, clicks ) => {
        
        let porcentual = ".00%";
        
        if (clicks.length === 0) {
            return 0 + porcentual;
        } else {
            return ((vote / clicks.length) * 100) + porcentual;
        }
    }

    return(
        <>

            <h1>give feedback</h1>

            <Button text="good" onclick={handleGood}/>
            <Button text="neutral" onclick={handleNeutral}/>
            <Button text="bad" onclick={handleBad}/>

            <h1>statistics</h1>

            
            good { good } <br /> 
            neutral { neutral }  <br />
            bad { bad } <br />
            all { allClicks.length }<br />
            average { getAverage( allClicks ) } <br />
            positive { getPorcentual( good, allClicks) } <br />
            
        </>
    )

}

export default Unicafe;