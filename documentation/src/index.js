import React from "react";

import ReactDOM from "react-dom";

// router
import { BrowserRouter as Router, } from "react-router-dom";

// state
import { Provider } from "react-redux";

import HFNProvider from "sami-redux";

import store from "store";

// components
import App from "App";

// styles
import "index.scss";

ReactDOM.render(
  <Provider store={store}>
    <HFNProvider>
      <Router>
        <App />
      </Router>
    </HFNProvider>
  </Provider>,
  document.getElementById("root")
);
