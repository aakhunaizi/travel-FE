import * as types from "../actions/types";

const initialState = {
  inbound: [],
  outbound: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_FLIGHTS:
      return {
        ...state,
        inbound: action.payload,
      };
    case types.FETCH_ROUNDWAY_FLIGHT:
      return {
        ...state,
        outbound: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
