import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./main.css";

export class Main extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="header">
          <h1>The Ultimate Front-End Development Quiz</h1>
        </section>
        <section className="table-of-contents">
          <ul className="main-nav">
            <Button
              color="primary"
              component={Link}
              to="/a11y"
              variant="outlined"
            >
              Accessibility
            </Button>
            <Button
              color="primary"
              component={Link}
              to="/css"
              variant="outlined"
            >
              CSS
            </Button>
            <Button
              color="primary"
              component={Link}
              to="/git"
              variant="outlined"
            >
              Git
            </Button>
            <Button
              color="primary"
              component={Link}
              to="/html"
              variant="outlined"
            >
              HTML
            </Button>
            <Button
              color="primary"
              component={Link}
              to="/js"
              variant="outlined"
            >
              Javascript
            </Button>
          </ul>
        </section>
      </div>
    );
  }
}
