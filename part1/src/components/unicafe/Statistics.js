const Statistics = (props) => {

    const { value, text} = props;


    return (
        <>
          <p> {text} <span> { value } </span> </p>


        </>
    )


}

export default Statistics;