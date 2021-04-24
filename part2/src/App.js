import React, { useEffect } from 'react';
//import Note from './components/Note';
import Course from './components/Course';

const App = ( { notes } ) => {

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ];

  //const course = Math.floor((Math.random() * courses.length) + 0);;

  return(

  //   <div>
  //   <h1>Notes</h1>
  //   <ul>
  //     {
  //       notes.map( n => <Note key={ n.id } note={ n.content } />)
  //     }
  //   </ul>
  // </div>
      <>
        {
          courses.map( (c) => <Course course={ c }/> )
        }
        {/* <Course course={ actualCourse } />  */}
      </>
      
  )
}



export default App;
