import React from "react";
import { connect } from "react-redux";

import { logIn } from "../../../actions/logIn";

class LogInInput extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleClick = (event) => {
    const register = event.target.name === "register";
    this.props.logIn(this.state, register);
  };

  render() {
    return (
      <form id="log-in" onSubmit={this.handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <button
          name="log-in"
          className="btn btn-primary"
          onClick={this.handleClick}
        >
          Log in
        </button>
        <br />
        <br />
        <button
          name="register"
          className="btn btn-success"
          onClick={this.handleClick}
        >
          Register
        </button>
      </form>
    );
  }
}

export default connect(null, { logIn })(LogInInput);
