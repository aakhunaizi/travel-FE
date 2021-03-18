import * as types from "../actions/types";

const initialState = {
  passengers: [],
  flights: [],
  flightInfo: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SEATS:
      return {
        ...state,
        flightInfo: action.payload,
      };
    case types.GET_FLIGHT_ID:
      return {
        ...state,
        flights: action.payload,
      };
    case types.GET_PASSENGER:
      return {
        ...state,
        passengers: [...state.passengers, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
