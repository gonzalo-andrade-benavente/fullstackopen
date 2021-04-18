import React from 'react';

const Hello = ( props ) => {
  return (
    <div>
      <p>Hello { props.name }, you are { props.age } years old </p>
    </div>
  )
}

const App = () => {
  
  const name= "Gonzalo";
  const age = 35

  return (
    <>
      <h1>Greeting</h1>
      <Hello name="Horacio" age={ 26 + 10 } />
      <Hello name={ name } age = { age } />
    </>
  )
}

export default App;
