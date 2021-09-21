import React from "react";
import { connect } from "react-redux";

import { fetchSavedQuestions } from "../../../actions/fetchSavedQuestions";
import { clearQuestions } from "../../../actions/clearQuestions";
import SavedQuestionsAccordion from "./SavedQuestionsAccordion";

class SavedQuestions extends React.Component {
  componentDidMount() {
    document.title = "Questions - StackStore";
    this.props.fetchSavedQuestions(this.props.user);
  }

  componentWillUnmount() {
    this.props.clearQuestions();
  }

  render() {
    return (
      <div>
        <h2>Saved questions</h2>
        {this.props.questions && this.props.questions.length > 0 ? (
          <SavedQuestionsAccordion questions={this.props.questions} />
        ) : (
          "Loading or no saved questions"
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    questions: state.questions,
  };
};

export default connect(mapStateToProps, {
  fetchSavedQuestions,
  clearQuestions,
})(SavedQuestions);
