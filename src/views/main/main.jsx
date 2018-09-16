import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './main.css';

export class Main extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="header">
          <h1>React, React-Router, Redux, & Webpack 4 Boilerplate</h1>
        </section>
        <section className="table-of-contents">
          <ul>
            <li>
              <Link to="/view1">View 1</Link>
            </li>
            <li>
              <Link to="/view2">View 2</Link>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}