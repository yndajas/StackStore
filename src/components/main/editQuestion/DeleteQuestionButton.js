import React from "react";
import { connect } from "react-redux";

import { deleteQuestion } from "../../../actions/deleteQuestion";

class DeleteQuestionButton extends React.Component {
  render() {
    return (
      <button
        name="delete-question"
        className="btn btn-danger"
        onClick={() =>
          this.props.deleteQuestion(this.props.user, this.props.question)
        }
      >
        Delete question
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { deleteQuestion })(
  DeleteQuestionButton
);
