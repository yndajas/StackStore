import React from "react";
import { connect } from "react-redux";

import { searchQuestions } from "../../../actions/searchQuestions";

class SearchInput extends React.Component {
  state = {
    query: "",
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
    this.props.searchQuestions(this.state.query);
  };

  render() {
    return (
      <form id="search" onSubmit={this.handleSubmit}>
        <p>Search for questions from Stack Overflow by words in their title</p>
        <input
          type="text"
          name="query"
          placeholder="Keyword(s)"
          value={this.state.query}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <button
          name="search"
          className="btn btn-primary"
          onClick={this.handleClick}
        >
          Search
        </button>
      </form>
    );
  }
}

export default connect(null, { searchQuestions })(SearchInput);
