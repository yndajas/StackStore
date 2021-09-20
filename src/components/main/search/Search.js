import React from "react";
import { connect } from "react-redux";

import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import { clearSearch } from "../../../actions/clearSearch";

class Search extends React.Component {
  componentDidMount() {
    document.title = "Search - StackStore";
  }

  componentWillUnmount() {
    this.props.clearSearch();
  }

  render() {
    return (
      <div>
        <h2>Search</h2>
        <SearchInput />
        <br />
        <SearchResults />
      </div>
    );
  }
}

export default connect(null, { clearSearch })(Search);
