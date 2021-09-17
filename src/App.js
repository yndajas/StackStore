import React from "react";

import "./App.scss";
import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
