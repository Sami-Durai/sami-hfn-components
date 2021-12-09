import { BREADCRUMB } from "../actionTypes/breadcrumb";

const initialState = {
  menu: [],
  hasHome: false
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case BREADCRUMB:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default reducer;
