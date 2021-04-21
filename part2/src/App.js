import React from 'react';
//import Note from './components/Note';
import Course from './components/Course';

const App = ( { notes } ) => {

  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return(

  //   <div>
  //   <h1>Notes</h1>
  //   <ul>
  //     {
  //       notes.map( n => <Note key={ n.id } note={ n.content } />)
  //     }
  //   </ul>
  // </div>
      <Course course={ course } /> 
  )
}



export default App;
