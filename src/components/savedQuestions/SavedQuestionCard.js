import React from "react";

import QuestionData from "../QuestionData";
import NotesContainer from "../../containers/main/NotesContainer";
import TagsContainer from "../../containers/main/TagsContainer";
import AnswerData from "../AnswerData";

class SavedQuestionCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-header" id={`heading${this.props.question.id}`}>
          <button
            className="btn"
            data-toggle="collapse"
            data-target={`#collapse${this.props.question.id}`}
            aria-expanded="false"
            aria-controls={`collapse${this.props.question.id}`}
          >
            <h3
              dangerouslySetInnerHTML={{
                __html: this.props.question.title,
              }}
            />
          </button>
        </div>
        <div
          className="collapse"
          id={`collapse${this.props.question.id}`}
          aria-labelledby={`heading${this.props.question.id}`}
          data-parent="#accordion"
        >
          <div className="card-body">
            <QuestionData question={this.props.question} />
            {/* route/switch/if for notes: add button/show with edit button/edit form */}
            <NotesContainer question={this.props.question} />
            {/* route/switch/if for tags: add button/show with remove button or text/edit with comma-separated tags and save button */}
            <TagsContainer question={this.props.question} />
            <hr />
            {this.props.question.answers.map((answer) => (
              <AnswerData answer={answer} />
              //   answer notes container
            ))}
            {/* update from Stack Overflow button */}
            {/* delete button */}
          </div>
        </div>
      </div>
    );
  }
}

export default SavedQuestionCard;
