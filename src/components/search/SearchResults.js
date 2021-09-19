import React from "react";
import { connect } from "react-redux";

import QuestionCard from "../QuestionCard";

class SearchResults extends React.Component {
  render() {
    const rekeyedAnswerData = (searchResultAnswerData) => {
      return {
        stack_id: searchResultAnswerData.answer_id,
        stack_question_id: searchResultAnswerData.question_id,
        accepted: searchResultAnswerData.is_accepted,
        score: searchResultAnswerData.score,
        body: searchResultAnswerData.body,
        stack_created: searchResultAnswerData.creation_date * 1000,
        stack_updated: searchResultAnswerData.last_edit_date * 1000 || null,
      };
    };

    const rekeyedQuestionData = (searchResultQuestionData) => {
      const answers = searchResultQuestionData.answers
        ? searchResultQuestionData.answers.map((answer) =>
            rekeyedAnswerData(answer)
          )
        : null;

      return {
        stack_id: searchResultQuestionData.question_id,
        score: searchResultQuestionData.score,
        title: searchResultQuestionData.title,
        body: searchResultQuestionData.body,
        stack_created: searchResultQuestionData.creation_date * 1000,
        stack_updated: searchResultQuestionData.last_activity_date * 1000,
        answers: answers,
      };
    };

    return (
      <div>
        <h2>Search results</h2>
        {this.props.searchResults && this.props.searchResults.length > 0 ? (
          <>
            <p>
              Showing {this.props.searchResults.length} of{" "}
              {this.props.searchResultsTotal} results for "
              {this.props.searchQuery}"
              {this.props.searchResults.length <
              this.props.searchResultsTotal ? (
                <>
                  &nbsp;[
                  <a
                    href={`https://stackoverflow.com/search?q=${this.props.searchQuery}`}
                    title="Search on Stack Overflow"
                  >
                    view full results on Stack Overflow
                  </a>
                  ]
                </>
              ) : (
                ""
              )}
            </p>
            <div id="accordion">
              {this.props.searchResults.map((searchResult) => (
                <QuestionCard
                  question={rekeyedQuestionData(searchResult)}
                  type={"search"}
                />
              ))}
            </div>
          </>
        ) : (
          "No results"
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchQuery: state.searchQuery,
    searchResults: state.searchResults,
    searchResultsTotal: state.searchResultsTotal,
  };
};

export default connect(mapStateToProps)(SearchResults);
