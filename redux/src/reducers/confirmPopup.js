import { store } from "../index";

import { TOGGLE, ACCEPT, REJECT, ONHIDE, CUSTOM } from "../actionTypes/confirmPopup";

const initialState = {
  message: "Are you sure you want to proceed?",
  header: "Confirmation",
  icon: "pi pi-exclamation-triangle",
  visible: false,
  onHide: () => {
    store.dispatch({ type: TOGGLE, payload: false });
  }
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE:
      return { ...initialState, visible: payload };
    case ACCEPT:
      return { ...state, accept: payload };
    case REJECT:
      return { ...state, reject: payload };
    case ONHIDE:
      return {
        ...state,
        onHide: () => {
          store.dispatch({ type: TOGGLE, payload: false });
          payload();
        }
      };
    case CUSTOM:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default reducer;
