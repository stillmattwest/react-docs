import React from 'react';
import ReactDOM from 'react-dom';

// the commented out code below is the way to implement a React Clock using stateless components but this isn't desirable. A component should be self-contained 
// to fix this, we need state.

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    // lifecyle methods
    // componentDidMount fires after the component output has been rendered to the DOM
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),1000
        );
    }

    // componentWillUnmount fires if the element is destroyed.
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date:new Date()
        });
    }

    // the render method of component is called right after the constructor.
    // render() is React learns what should be displayed to the screen when this component is used
    render(){
        return(
            <div>
                <h1>React Clock II</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);

// function Clock(props){
//     return(
//         <div>
//             <h1>React Clock II</h1>
//             <h2>It is {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     );
// }

// function tick(){
//     ReactDOM.render(
//         <Clock date={new Date()} />,
//         document.getElementById('root')
//     );
// }

// setInterval(tick,1000);