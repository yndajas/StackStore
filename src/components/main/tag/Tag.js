import React from "react";
import { connect } from "react-redux";

import { fetchSavedTag } from "../../../actions/fetchSavedTag";
import { clearTag } from "../../../actions/clearTag";
import { clearQuestions } from "../../../actions/clearQuestions";
import SavedQuestionsAccordion from "../savedQuestions/SavedQuestionsAccordion";

class Tag extends React.Component {
  componentDidMount() {
    document.title = "Questions by tag - StackStore";
    this.props.fetchSavedTag(this.props.user, this.props.match.params.tagSlug);
  }

  componentWillUnmount() {
    this.props.clearTag();
    this.props.clearQuestions();
  }

  render() {
    return (
      <div>
        <h2>
          Saved questions by tag{this.props.tag ? <>: {this.props.tag}</> : ""}
        </h2>
        {this.props.questions ? (
          <SavedQuestionsAccordion questions={this.props.questions} />
        ) : (
          "Loading questions"
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    tag: state.tag,
    questions: state.questions,
  };
};

export default connect(mapStateToProps, {
  fetchSavedTag,
  clearQuestions,
  clearTag,
})(Tag);
