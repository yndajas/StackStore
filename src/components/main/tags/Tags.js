import React from "react";
import { connect } from "react-redux";

import { fetchSavedTags } from "../../../actions/fetchSavedTags";
import { clearTags } from "../../../actions/clearTags";
import TagLinkButton from "./TagLinkButton";

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
        {this.props.tags ? (
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
          "No saved tags"
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
