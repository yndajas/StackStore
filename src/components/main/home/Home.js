import React from "react";
import { Link } from "react-router-dom";

import LogInInput from "./LogInInput";

class Home extends React.Component {
  componentDidMount() {
    document.title = "StackStore";
  }

  render() {
    return (
      <div id="home">
        <h2>Get started</h2>
        <br />
        <LogInInput />
        <br />
        <p>
          <Link to="/about">What is StackStore?</Link>
        </p>
      </div>
    );
  }
}

export default Home;
