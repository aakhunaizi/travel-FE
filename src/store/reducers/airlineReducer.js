import * as types from "../actions/types";

const initialState = {
  flights: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_AIRLINE_FLIGHTS:
      return {
        ...state,
        flights: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
