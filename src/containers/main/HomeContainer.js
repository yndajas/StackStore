import React from "react";

class HomeContainer extends React.Component {
  componentDidMount() {
    document.title = "StackStore";
  }

  render() {
    return <div>Home container</div>;
  }
}

export default HomeContainer;
