import { SIDEBAR } from "../actionTypes/sidebar";

const initialState = {
  visible: false
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIDEBAR:
      return { visible: payload !== undefined ? payload : !state.visible };
    default:
      return state;
  }
};

export default reducer;
