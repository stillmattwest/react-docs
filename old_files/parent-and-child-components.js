import React from 'react';
import ReactDOM from 'react-dom';

// function below is too complicated. Should be broken into multiple components
// function Comment(props) {
//     return (
//         <div className="Comment">
//             <div className="UserInfo">
//                 <img className="Avatar"
//                     src={props.author.avatarUrl}
//                     alt={props.author.name}
//                 />
//                 <div className="UserInfo-name">
//                     {props.author.name}
//                 </div>
//             </div>
//             <div className="Comment-text">
//                 {props.text}
//             </div>
//             <div className="Comment-date">
//                 {props.date}
//             </div>
//         </div>
//     );
// }

function Avatar(props) {
    return (
        <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
    );
}

function UserInfo(props) {
    // note the use of Avatar. This renders a new component and passes it something from props
    return (
        <div className="UserInfo">
            <Avatar user={props.user} /> 
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

function Comment(props){
    // note UserInfo here. This brings in the UserInfo component, which will bring in Avatar.
    // also note how a parent component can effectively 'rename' a prop when it passes it down to a child.
    // seems confusing, but it's possible to do.
    return (
        <div className="Comment">
          <UserInfo user={props.author} />
          <div className="Comment-text">
            {props.text}
          </div>
          <div className="Comment-date">
            {props.date}
          </div>
        </div>
      );
}


const element = <Comment author={{ avatarUrl: "https://12books12monthsdotcom.files.wordpress.com/2011/11/gir_salute.png", name: "Matt" }} text="Hello, React" date={JSON.stringify(new Date().toString())} />;

ReactDOM.render(element, document.getElementById('root'));
