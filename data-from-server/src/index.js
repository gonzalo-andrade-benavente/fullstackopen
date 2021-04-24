import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Example 1
const promise = axios.get('http://localhost:3001/notes');

promise.then( res => {
  const notes = res.data;
  console.log(notes);
});

// Example 2

axios.get('http://localhost:3001/notes')
     .then(response => {
        const notes = response.data;
        console.log(notes);
     });



const promise2 = axios.get('http://localhost:3001/foobar');
console.log(promise2);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
