import React from "react";
import { connect } from "react-redux";

import { updateQuestion } from "../../../actions/updateQuestion";

class EditNotesInput extends React.Component {
  state = {
    notes: this.props.question.notes,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleClick = () => {
    this.props.updateQuestion(this.props.user, {
      id: this.props.question.id,
      notes: this.state.notes,
    });
  };

  render() {
    const checkIfUnsavedChanges = () => {
      return this.props.question.notes !== this.state.notes;
    };

    return (
      <form id="edit-notes" onSubmit={this.handleSubmit}>
        <textarea
          name="notes"
          value={this.state.notes}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <button
          disabled={!checkIfUnsavedChanges()}
          name="save-notes"
          className="btn btn-success"
          onClick={this.handleClick}
        >
          {checkIfUnsavedChanges() ? "Save" : "Saved"}
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { updateQuestion })(EditNotesInput);
