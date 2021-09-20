import React from "react";
import { connect } from "react-redux";

import { logOut } from "../../actions/logOut";

class LogOutButton extends React.Component {
  render() {
    return (
      <button
        name="log-out"
        className="btn btn-primary"
        onClick={this.props.logOut}
      >
        Log out
      </button>
    );
  }
}

export default connect(null, { logOut })(LogOutButton);
