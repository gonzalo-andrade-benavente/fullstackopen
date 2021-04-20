const Statistics = ( props ) => {

    const { good, neutral, bad, allClicks, getAverage, getPorcentual } = props;

    return(
        <>
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

export default Statistics;