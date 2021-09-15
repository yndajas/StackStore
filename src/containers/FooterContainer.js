import React from "react";
import { connect } from "react-redux";

import UserInfo from "../components/UserInfo";

class FooterContainer extends React.Component {
  render() {
    const year = new Date().getFullYear();

    return (
      <footer>
        <nav className="navbar navbar-light">
          <div className="container">
            <ul id="user-info" className="navbar-nav d-none d-sm-block">
              {this.props.user ? (
                <UserInfo email={this.props.user.email} />
              ) : (
                ""
              )}
            </ul>
            <ul className="navbar-nav" id="copyright">
              <li className="nav-item">
                <span className="navbar-text">© Ynda Jas {year}</span>
              </li>
            </ul>
          </div>
        </nav>
      </footer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(FooterContainer);
