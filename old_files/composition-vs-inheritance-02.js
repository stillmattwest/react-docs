import React from 'react'
import ReactDOM from 'react-dom'

// it is possible to create patterns like props.children to fill multiple 'holes' in a component

function SplitPane(props){
    return(
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className ="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

function App(){
    return(
        <SplitPane
            left={
                <Contacts/>
            }
            right={
                <Chat/>
            }/>
    );
}