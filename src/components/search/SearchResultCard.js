import React from "react";

import QuestionData from "../QuestionData";
import AnswerData from "../AnswerData";

// abstract this (for reuse in saved question card) to a card with the props ID, title, question data, answer data and type, then create a new sub-component for the card body, passing down question data and answer data
class SearchResultCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div
          className="card-header"
          id={`heading${this.props.searchResult.question_id}`}
        >
          <button
            className="btn"
            data-toggle="collapse"
            data-target={`#collapse${this.props.searchResult.question_id}`}
            aria-expanded="false"
            aria-controls={`collapse${this.props.searchResult.question_id}`}
          >
            <h3
              dangerouslySetInnerHTML={{
                __html: this.props.searchResult.title,
              }}
            />
          </button>
        </div>
        <div
          className="collapse"
          id={`collapse${this.props.searchResult.question_id}`}
          aria-labelledby={`heading${this.props.searchResult.question_id}`}
          data-parent="#accordion"
        >
          <div className="card-body">
            <p>Placeholder for question data</p>
            {/* the line below won't work because the search result isn't structured properly for the QuestionData component - make it flexible or tweak it */}
            {/* <QuestionData question={this.props.searchResult} /> */}
            <hr />
            {this.props.searchResult.answers
              ? this.props.searchResult.answers.map((answer) => (
                  <p>Placeholder for answer data</p>
                  // the AnswerData line below won't work because the search result isn't structured properly for the AnswerData component - make it flexible or tweak it
                  //   <AnswerData answer={answer} />
                ))
              : "No answers"}
            {/* button to save question (use Stack question_id and package the data from the search results state object corresponding to that ID) */}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResultCard;
