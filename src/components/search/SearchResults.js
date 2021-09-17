import React from "react";
import { connect } from "react-redux";

import SearchResultCard from "./SearchResultCard";

class SearchResults extends React.Component {
  render() {
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
                <SearchResultCard searchResult={searchResult} />
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
