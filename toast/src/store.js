import { createStore } from "redux";

import { PROP, MERGE, CLEAR, REF, SHOW, CLOSE } from "./actionTypes";

const initialState = {
  ref: {
    current: null
  },
  props: null
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PROP:
      return { ...state, props: payload };
    case MERGE:
      return { ...state, props: Object.assign({}, state.props, payload) };
    case CLEAR:
      return { ...state, props: null };
    case CLOSE:
      if (state.ref.current) {
        state.ref.current.clear();
      }
      return state;
    case SHOW:
      if (state.ref.current) {
        state.ref.current.show(payload);
      }
      return state;
    case REF:
      return { ...state, ref: payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
