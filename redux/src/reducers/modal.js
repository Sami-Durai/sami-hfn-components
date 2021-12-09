import { store } from "../index";

import { TOGGLE, ONHIDE, ONSHOW, CUSTOM } from "../actionTypes/modal";

const initialState = {
  header: "",
  footer: null,
  visible: false,
  className: "sdm-popup",
  blockScroll: true,
  onHide: () => { store.dispatch({ type: TOGGLE, payload: false }); }
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE:
      return { ...state, visible: payload, footer: payload ? state.footer : null };
    case ONSHOW:
      return { ...state, onShow: payload };
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
