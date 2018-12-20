import React, { Component } from "react";
import { render } from "react-dom";

const app = document.getElementById("root");

class Post extends Component {
  render() {
    return React.createElement(
      "div",
      {
        className: "post" //#C
      },
      React.createElement(
        "h2",
        {
          className: "postAuthor",
          id: this.props.id
        },
        this.props.user, //#D
        React.createElement(
          "span",
          {
            className: "postBody" //#E
          },
          this.props.content //#F
        )
      )
    );
  }
}


const App = React.createElement(Post, {
  id: 1, 
  content: " said: This is a React app built using Webpack, Babel, and Webpack Dev Server. Just the basics!", //#H
  user: "Matt"
});

render(App, app);








// don't overwrite this!
module.hot.accept();