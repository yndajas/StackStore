import React from "react";
import { connect } from "react-redux";

import { saveQuestion } from "../../actions/saveQuestion";

class SaveQuestionButton extends React.Component {
  render() {
    const checkIfSavedOrUpdated = () => {
      if (this.props.savedQuestions) {
        let savedQuestion = this.props.savedQuestions.find(
          (savedQuestion) =>
            savedQuestion.data.attributes.stack_id ===
            this.props.question.stack_id
        );

        if (savedQuestion) {
          if (savedQuestion.new) {
            return "Saved";
          } else {
            return "Updated";
          }
        }
      } else {
        return false;
      }
    };

    return (
      <button
        disabled={!!checkIfSavedOrUpdated()}
        name="save-question"
        className="btn btn-success"
        onClick={() =>
          this.props.saveQuestion(this.props.user, this.props.question)
        }
      >
        {checkIfSavedOrUpdated() || "Save"}
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    savedQuestions: state.savedQuestions,
  };
};

export default connect(mapStateToProps, { saveQuestion })(SaveQuestionButton);
