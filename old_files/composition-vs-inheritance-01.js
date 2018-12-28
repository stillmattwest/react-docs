import React from 'react'
import ReactDOM from 'react-dom'

// composition over inheritance
// some components don't know what their children will be ahead of time. For this, use the special children prop to pass child elements to their parent

function FancyBorder(props){
    const divStyle = {
        fontStyle:'italic',
        color:'gray',
        border:'2px solid silver',
        padding:'5px',
        width:'300px'
    };
    return(
        <div className={'FancyBorder FancyBorder-'+props.color} style={divStyle}>
            {props.children}

        </div>
    );
}

// here we pass the child elements
function WelcomeDialog(){
    return(
        <FancyBorder color = "blue">
            <h1 className = "Dialog-title">
                Welcome
            </h1>
            <p className = "Dialog-message">
                Thank you for visiting!
            </p>
        </FancyBorder>
    );
}

ReactDOM.render(
    <WelcomeDialog/>,document.getElementById('root')
);