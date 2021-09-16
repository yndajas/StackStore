import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import HomeContainer from "./main/HomeContainer";
import DashboardContainer from "./main/DashboardContainer";

class MainContainer extends React.Component {
  render() {
    return (
      <main>
        <div className="container">
          <Router>
            <Switch>
              <Route exact path="/">
                {this.props.user ? (
                  <Redirect to="/dashboard" />
                ) : (
                  <HomeContainer />
                )}
              </Route>
              <Route exact path="/dashboard">
                {this.props.user ? <DashboardContainer /> : <Redirect to="/" />}
              </Route>
            </Switch>
          </Router>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(MainContainer);
