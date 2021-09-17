import React from "react";
import { connect } from "react-redux";

import SearchInput from "../../components/search/SearchInput";
import SearchResults from "../../components/search/SearchResults";
import { clearSearch } from "../../actions/clearSearch";

class SearchContainer extends React.Component {
  componentDidMount() {
    document.title = "Search - StackStore";
  }

  componentWillUnmount() {
    this.props.clearSearch();
  }

  render() {
    return (
      <div>
        <SearchInput />
        <br />
        <SearchResults />
      </div>
    );
  }
}

export default connect(null, { clearSearch })(SearchContainer);
