import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./home/Home";
import About from "./About";
import SavedQuestions from "./savedQuestions/SavedQuestions";
import EditQuesion from "./editQuestion/EditQuestion";
import Tags from "./tags/Tags";
import Search from "./search/Search";

class Main extends React.Component {
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
            <Route exact path="/">
              {this.props.user ? <Redirect to="/questions" /> : <Home />}
            </Route>
            <Route exact path="/about" component={About} />
            <AuthRoute exact path="/questions" component={SavedQuestions} />
            <AuthRoute
              exact
              path="/questions/:id/edit"
              component={EditQuesion}
            />
            <AuthRoute exact path="/tags" component={Tags} />
            <AuthRoute exact path="/search" component={Search} />
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

export default connect(mapStateToProps)(Main);
