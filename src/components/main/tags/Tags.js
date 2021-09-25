import React from "react";
import { connect } from "react-redux";

import TagLinkButton from "./TagLinkButton";
import { fetchSavedTags } from "../../../actions/fetchSavedTags";
import { clearTags } from "../../../actions/clearTags";

class Tags extends React.Component {
  componentDidMount() {
    document.title = "Tags - StackStore";
    this.props.fetchSavedTags(this.props.user);
  }

  componentWillUnmount() {
    this.props.clearTags();
  }

  render() {
    return (
      <div>
        <h2>Tags</h2>
        {this.props.tags && this.props.tags.length > 0 ? (
          <>
            <p>View questions by tag</p>
            <div id="tag-link-buttons">
              {this.props.tags.map((tag, index) => (
                <>
                  <TagLinkButton tag={tag} />
                  {index < this.props.tags.length - 1 ? <>&nbsp;</> : ""}
                </>
              ))}
            </div>
          </>
        ) : (
          "Loading or no saved tags"
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    tags: state.tags,
  };
};

export default connect(mapStateToProps, { fetchSavedTags, clearTags })(Tags);
