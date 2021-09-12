import React from "react";
// import { Link } from "react-router-dom";

// import logo from ;

class HeaderContainer extends React.Component {
  render() {
    return (
      <div>
        <img
          src={process.env.PUBLIC_URL + "/images/logo.png"}
          className="logo"
          alt="logo"
        />
        <p>
          <a href="/">Home</a>
        </p>
        <p>Log in placeholder</p>
      </div>
    );
  }
}

export default HeaderContainer;
