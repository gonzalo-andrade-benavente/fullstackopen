import React from 'react';
import Header from '../components/Header';
import Content from '../components/Content';

const Course = ( {course} ) => {
    console.log(course);
    const { name, parts } = course;
    return(
        <>
            <Header name={ name } /> 
            <Content parts={ parts } />
        </>
        
    )

} 

export default Course;