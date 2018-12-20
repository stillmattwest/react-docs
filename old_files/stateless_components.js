import React from 'react';
import ReactDOM from 'react-dom';


// function Welcome(props){
//     return <h1>Hello, {props.name}</h1>;
// }

// ReactDOM.render(Welcome({name:'React'}),document.getElementById('root')); // works

// passing props to a stateless component. Note: always start component names with capital letters. React treats them as DOM tags, otherwise.
function Welcome(props){
    return <h1>Hello, {props.name}</h1>
}

// React recognizes this as a user-created element and passes data to it in the form of props
const element = <Welcome name="react component" /> // the name of this element must reflect the component it represents
ReactDOM.render(
    element,
    document.getElementById('root')
);
