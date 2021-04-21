import Part from '../components/Part';

const Content = ({ parts }) => {

    const total = parts.reduce( (sum, part) => {
        return sum + part.exercises;
    }, 0)

    return (
        <>
            {
                parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)
            }

            <b>total of { total } exercises </b>  

        </>
    )


}

export default Content;