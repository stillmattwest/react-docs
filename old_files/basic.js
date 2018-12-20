import React from 'react';
import ReactDOM from 'react-dom';

const name = "React";
const element = <h1>Hello, {name}</h1>

ReactDOM.render(
    element, // what to render
    document.getElementById('root') // where to render it
);