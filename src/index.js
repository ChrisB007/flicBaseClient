import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import authReducer from "./reducers/authReducer";
import reduxThunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";

import App from "./App";

//Action generators

//Store creation
const store = createStore(
  combineReducers({
    auth: authReducer,
  }),
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
