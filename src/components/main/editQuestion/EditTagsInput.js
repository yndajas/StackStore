import React from "react";
import { connect } from "react-redux";

import { updateQuestion } from "../../../actions/updateQuestion";
import { formatTags } from "../../../helpers/formatTags";

class EditTagsInput extends React.Component {
  state = {
    tags: formatTags(this.props.question.tags),
  };

  componentDidUpdate(prevProps) {
    if (
      formatTags(prevProps.question.tags) !==
      formatTags(this.props.question.tags)
    ) {
      this.setState({ tags: formatTags(this.props.question.tags) });
    }
  }

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
      tags: this.state.tags,
    });
  };

  render() {
    const checkIfUnsavedChanges = () => {
      return formatTags(this.props.question.tags) !== this.state.tags;
    };

    return (
      <form id="edit-tags" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="tags"
          value={this.state.tags}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <button
          disabled={!checkIfUnsavedChanges()}
          name="save-tags"
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

export default connect(mapStateToProps, { updateQuestion })(EditTagsInput);
