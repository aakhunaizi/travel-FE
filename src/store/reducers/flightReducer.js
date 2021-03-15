import * as types from "../actions/types";

const initialState = {
  inbound: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_FLIGHTS:
      return {
        ...state,
        inbound: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
