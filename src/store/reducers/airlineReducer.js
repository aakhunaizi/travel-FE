import * as types from "../actions/types";

const initialState = {
  flights: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_AIRLINE_FLIGHTS:
      return {
        ...state,
        flights: action.payload,
        loading: false,
      };
    case types.CREATE_AIRLINE_FLIGHT:
      return {
        ...state,
        flights: [...state.flights, action.payload.newFlight],
      };
    default:
      return state;
  }
};

export default reducer;
