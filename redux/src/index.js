import React from "react";

import { createStore } from "redux";

import { Provider } from "react-redux";

import rootReducer from "./reducers/index";

import * as toast          from "./actionTypes/toast";
import * as modal          from "./actionTypes/modal";
import * as breadcrumb     from "./actionTypes/breadcrumb";
import * as confirmPopup   from "./actionTypes/confirmPopup";
import * as sidebar        from "./actionTypes/sidebar";

const store = createStore(rootReducer);

const HFNContext = React.createContext();

const HFNProvider = ({ children }) => {
  return (
    <Provider store={store} context={HFNContext}>
      {children}
    </Provider>
  );
};

export {
  store,
  HFNContext,
  toast,
  modal,
  breadcrumb,
  confirmPopup,
  sidebar
};

export default HFNProvider;
