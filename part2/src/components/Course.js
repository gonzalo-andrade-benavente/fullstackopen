import React from 'react';
import Header from '../components/Header';
import Content from '../components/Content';

const Course = ( { course} ) => {
    const { name, parts } = course;
    return(
        <>
            <Header name={ name } /> 
            <Content parts={ parts } />
        </>
        
    )

} 

export default Course;