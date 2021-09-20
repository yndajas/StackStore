import React from "react";
import { connect } from "react-redux";

import { updateQuestionFromExternalData } from "../../../actions/updateQuestionFromExternalData";

class UpdateQuestionDataButton extends React.Component {
  render() {
    return (
      <button
        name="update-question-data"
        className="btn btn-success"
        onClick={() =>
          this.props.updateQuestionFromExternalData(
            this.props.user,
            this.props.question
          )
        }
      >
        Update question data
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { updateQuestionFromExternalData })(
  UpdateQuestionDataButton
);
