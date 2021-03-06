import * as types from "../actions/types";

const initialState = {
  user: null,
  profile: null,
  booking: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CLEAR_INFO:
      return {
        ...state,
        user: null,
        profile: null,
        booking: null,
      };
    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case types.FETCH_PROFILE:
      if (action.payload) {
        const {
          email,
          firstName,
          lastName,
          phoneNumber,
          dateOfBirth,
        } = action.payload;
        return {
          ...state,
          profile: { email, firstName, lastName, phoneNumber, dateOfBirth },
          booking: action.payload.booking,
        };
      }
      break;
    case types.UPDATE_PROFILE:
      if (action.payload) {
        return {
          ...state,
          profile: action.payload.updatedProfile,
        };
      }
      break;
    default:
      return state;
  }
};

export default reducer;
