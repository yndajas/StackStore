import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

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
          this.props.question.deleted ? (
            <Redirect to="/questions" />
          ) : (
            <>
              <h2>Edit question</h2>
              <h3>Notes</h3>
              <EditNotesInput question={this.props.question} />
              <hr />
              <h3>Tags</h3>
              <p>Add tags in a comma-separated list</p>
              <EditTagsInput question={this.props.question} />
              <hr />
              <h3>Question data</h3>
              <p>Update question and answer data from Stack Overflow</p>
              <UpdateQuestionDataButton question={this.props.question} />
              <br />
              <br />
              <h4>{this.props.question.title}</h4>
              <QuestionData question={this.props.question} />
              <hr />
              <h4>Answers</h4>
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
              <hr />
              <h3>Delete question</h3>
              <p>
                If you delete a question, you can save it again via the search
                feature, however all notes and tags will be lost permanently
              </p>
              <DeleteQuestionButton question={this.props.question} />
            </>
          )
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
