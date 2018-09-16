import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Main } from './views/main/main.jsx';
import { View1 } from './views/view1/view1.jsx';
import { View2 } from './views/view2/view2.jsx';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/view1" component={View1} />
          <Route path="/view2" component={View2} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));

