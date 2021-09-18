import React from "react";
import { connect } from "react-redux";

import { fetchSavedQuestions } from "../../actions/fetchSavedQuestions";
import QuestionCard from "../QuestionCard";

class SavedQuestions extends React.Component {
  componentDidMount() {
    document.title = "Questions - StackStore";
    this.props.fetchSavedQuestions(this.props.user);
  }

  render() {
    return (
      <div>
        <h2>Saved questions</h2>
        {this.props.questions && this.props.questions.length > 0 ? (
          <div id="accordion">
            {this.props.questions.map((question) => (
              <QuestionCard question={question} type={"saved"} />
            ))}
          </div>
        ) : (
          "No saved questions"
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

export default connect(mapStateToProps, { fetchSavedQuestions })(
  SavedQuestions
);
