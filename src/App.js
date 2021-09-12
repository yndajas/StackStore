import React from "react";

import "./App.scss";
import HeaderContainer from "./containers/HeaderContainer";
import MainContainer from "./containers/MainContainer";
import FooterContainer from "./containers/FooterContainer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <MainContainer />
        <FooterContainer />
      </div>
    );
  }
}

export default App;
