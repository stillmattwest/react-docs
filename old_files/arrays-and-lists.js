import React from 'react';
import ReactDOM from 'react-dom';

function UserList(props){
    const users = [{id:1,name:"Matt"},{id:2,name:"Lynne"},{id:3,name:"Logan"},{id:4,name:"Riley"},{id:5,name:"Cameron"},{id:6,name:"Maya"}];

    // in the statement below, "key" is not passed to the DOM. It is used for React to keep track of list items.
    return(
        <ul>
            {users.map((user) => <li key={user.id.toString()}>{user.name}</li>)} 
        </ul>
    );
}


ReactDOM.render(
    <UserList />,document.getElementById('root'),
);



