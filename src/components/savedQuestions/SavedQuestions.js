import React from "react";
import { connect } from "react-redux";

import { fetchSavedQuestions } from "../../actions/fetchSavedQuestions";
import { clearQuestions } from "../../actions/clearQuestions";
import QuestionCard from "../QuestionCard";

class SavedQuestions extends React.Component {
  componentDidMount() {
    document.title = "Questions - StackStore";
    this.props.fetchSavedQuestions(this.props.user);
  }

  componentWillUnmount() {
    this.props.clearQuestions();
  }

  render() {
    const rekeyedAnswerData = (answerData) => {
      return {
        id: answerData.id,
        ...answerData.attributes,
        stack_created: Date.parse(answerData.attributes.stack_created),
        stack_updated: Date.parse(answerData.attributes.stack_updated),
      };
    };

    const rekeyedTagData = (questionTagData) => {
      return { id: questionTagData.id, ...questionTagData.attributes };
    };

    const rekeyedQuestionData = (question) => {
      const included = this.props.questions.included.filter(
        (includedData) =>
          includedData.attributes.stack_question_id ===
          question.attributes.stack_id
      );

      const answers = included
        .filter((includedData) => includedData.type === "answer")
        .map((answer) => rekeyedAnswerData(answer));

      const tags = included
        .filter((includedData) => includedData.type === "question_tag")
        .map((question_tag) => rekeyedTagData(question_tag));

      const questionData = {
        id: question.id,
        ...question.attributes,
        stack_created: Date.parse(question.attributes.stack_created),
        stack_updated: Date.parse(question.attributes.stack_updated),
        answers: answers,
        tags: tags,
      };

      delete questionData.user_id;

      return questionData;
    };

    return (
      <div>
        <h2>Saved questions</h2>
        {this.props.questions && this.props.questions.data.length > 0 ? (
          <div id="accordion">
            {this.props.questions.data.map((question) => (
              <QuestionCard
                question={rekeyedQuestionData(question)}
                type={"saved"}
              />
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

export default connect(mapStateToProps, {
  fetchSavedQuestions,
  clearQuestions,
})(SavedQuestions);
