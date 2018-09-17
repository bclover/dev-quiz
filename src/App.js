import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { Main } from "./views/main/main.jsx";
import { A11y } from "./views/a11y/a11y.jsx";
import { Css } from "./views/css/css.jsx";
import { Git } from "./views/git/git.jsx";
import { Html } from "./views/html/html.jsx";
import { Javascript } from "./views/js/javascript.jsx";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/a11y" component={A11y} />
          <Route path="/css" component={Css} />
          <Route path="/git" component={Git} />
          <Route path="/html" component={Html} />
          <Route path="/js" component={Javascript} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
