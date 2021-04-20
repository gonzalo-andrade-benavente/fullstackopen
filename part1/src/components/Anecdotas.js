import { useEffect, useState } from "react";

const Anecdotas = ( props ) => {

    const [ selected, setSelected ] = useState(0);
    const [ points, setPoints ] = useState(new Array( props.anecdotas.length ).fill( 0 ) );
    const [ most, setMost ] = useState(0);

    const handleNext = () => {
        setSelected(Math.floor((Math.random() * 6) + 0));
    }

    useEffect( () => {
        setMost(
            points.indexOf(Math.max(...points))
        );
        console.log(points);
    }, [points]);

    const handleVote = () => {
        const copy = [ ...points];
        copy[selected] += 1;
        setPoints(copy);
    }

    return(
        <>
            <h1>Anecdote of the day </h1>
            <p>{ props.anecdotas[selected] } </p>
            <button onClick={ handleVote }>
                vote
            </button>
            <button onClick={ handleNext }>
                next anecdote
            </button>

            <h1>Anecdote with most votes</h1>
            <p>{ props.anecdotas[most] } </p>
        </>

    )


}

export default Anecdotas;