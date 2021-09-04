import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import App from "./App";
import userReducer from "./reducers/userReducer";

const store = createStore(
  userReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
// test fetch request

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
