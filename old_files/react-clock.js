import React from 'react';
import ReactDOM from 'react-dom';

function tick(){
    const element =(
        <div>
            <h1>The time is:</h1>
            <h2>{new Date().toLocaleTimeString()}</h2>
        </div>
    );

    ReactDOM.render(element,document.getElementById('root'));
}

setInterval(tick,1000);



// don't overwrite this!
module.hot.accept();