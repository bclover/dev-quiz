import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise';

import Main from './main/Main.js';
import { A11y } from './a11y/a11y.jsx';
import { Css } from './css/css.jsx';
import { Git } from './git/git.jsx';
import { Html } from './html/html.jsx';
import { Javascript } from './js/javascript.jsx';

import './App.css';
import rootReducer from '../reducers';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(promise)));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Main}/>
            <Route path="/a11y" component={A11y}/>
            <Route path="/css" component={Css}/>
            <Route path="/git" component={Git}/>
            <Route path="/html" component={Html}/>
            <Route path="/js" component={Javascript}/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

ReactDOM.render(<App/>, document.getElementById('app'));
