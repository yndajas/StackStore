import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import LogOutButton from "./LogOutButton";

class HeaderContainer extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "/images/logo.png"}
                className="logo"
                alt="logo"
                title="StackStore logo"
              />
            </Link>
            <button
              aria-controls="navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navbar"
              data-toggle="collapse"
              type="button"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar">
              <ul className="navbar-nav mr-auto mt-2" id="nav-elements">
                {this.props.user ? (
                  <>
                    <li className="nav-item">
                      <Link to="/questions" className="nav-link">
                        Questions
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/tags" className="nav-link">
                        Tags
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/search" className="nav-link">
                        Search
                      </Link>
                    </li>
                  </>
                ) : (
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      About
                    </Link>
                  </li>
                )}
              </ul>
              <ul className="navbar-nav ml-auto mt-2" id="log-out">
                {this.props.user ? <LogOutButton /> : ""}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(HeaderContainer);
