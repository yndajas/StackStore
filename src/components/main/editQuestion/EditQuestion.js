import React from "react";
import { connect } from "react-redux";

import { fetchSavedQuestion } from "../../../actions/fetchSavedQuestion";
import { clearQuestion } from "../../../actions/clearQuestion";
import EditNotesInput from "./EditNotesInput";
import EditTagsInput from "./EditTagsInput";
import UpdateQuestionDataButton from "./UpdateQuestionDataButton";
import DeleteQuestionButton from "./DeleteQuestionButton";
import QuestionData from "../QuestionData";
import AnswerData from "../AnswerData";

class EditQuestionContainer extends React.Component {
  componentDidMount() {
    document.title = "Edit question - StackStore";
    this.props.fetchSavedQuestion(this.props.user, this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearQuestion();
  }

  render() {
    return (
      <div>
        {this.props.question ? (
          <>
            <h3>Edit question</h3>
            <h4>Notes</h4>
            <EditNotesInput question={this.props.question} />
            <hr />
            <h4>Tags</h4>
            <EditTagsInput question={this.props.question} />
            <hr />
            <h4>Question data</h4>
            <p>Update question and answer data from Stack Overflow</p>
            <UpdateQuestionDataButton question={this.props.question} />
            <hr />
            <h4>Delete question</h4>
            <p>
              If you delete a question, you save it again via the search
              feature, however all notes and tags will be lost permanently
            </p>
            <DeleteQuestionButton question={this.props.question} />
            <hr />
            <h3>Question</h3>
            <QuestionData question={this.props.question} />
            <hr />
            <h3>Answers</h3>
            {this.props.question.answers &&
            this.props.question.answers.length > 0
              ? this.props.question.answers.map((answer, index) => (
                  <>
                    <AnswerData answer={answer} />
                    {index < this.props.question.answers.length - 1 ? (
                      <hr />
                    ) : (
                      ""
                    )}
                  </>
                ))
              : "No answers"}
          </>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    question: state.question,
  };
};

export default connect(mapStateToProps, {
  fetchSavedQuestion,
  clearQuestion,
})(EditQuestionContainer);
