import * as types from "../actions/types";

const initialState = {
  user: null,
  profile: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case types.FETCH_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
