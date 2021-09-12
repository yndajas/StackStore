import React from "react";
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
      <Router>
        <Switch>
          <Route exact path="/">
            {/* create loggedIn function/action and call it here to find out if there's a logged in user */}
            {/* {loggedIn ? <Redirect to="/dashboard" /> : <HomeContainer />}  */}
            <HomeContainer />
          </Route>
          <Route exact path="/dashboard">
            {/* {loggedIn ? <DashboardContainer /> : <Redirect to="/" />}  */}
            <DashboardContainer />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default MainContainer;
