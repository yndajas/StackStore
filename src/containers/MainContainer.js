import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import HomeContainer from "./main/HomeContainer";
import SavedQuestions from "../components/savedQuestions/SavedQuestions";
import SearchContainer from "./main/SearchContainer";
import TagsContainer from "./main/TagsContainer";

class MainContainer extends React.Component {
  render() {
    const AuthRoute = ({ ...args }) => {
      if (this.props.user) {
        return <Route {...args} />;
      } else {
        return <Redirect to="/" />;
      }
    };

    return (
      <main>
        <div className="container">
          <Switch>
            {/* set title in these routes? */}
            <Route exact path="/">
              {this.props.user ? (
                <Redirect to="/questions" />
              ) : (
                <HomeContainer />
              )}
            </Route>
            <AuthRoute exact path="/questions" component={SavedQuestions} />
            <AuthRoute exact path="/search" component={SearchContainer} />
            <AuthRoute exact path="/tags" component={TagsContainer} />
          </Switch>
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
