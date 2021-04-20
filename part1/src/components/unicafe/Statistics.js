const Statistics = (props) => {

    const { good, neutral, bad, allClicks, getAverage, getPorcentual } = props;

    if (allClicks.length === 0) {
        return (
            <>
                <h1>statistics</h1>
                <p>No feedback given</p>
            </>

        )

    } else {

        return (
            <>
                <h1>statistics</h1>
                <div>
                    good {good} <br />
                    neutral {neutral}  <br />
                    bad {bad} <br />
                    all {allClicks.length}<br />
                    average {getAverage(allClicks)} <br />
                    positive {getPorcentual(good, allClicks)} <br />
                </div>


            </>
        )
    }

}

export default Statistics;