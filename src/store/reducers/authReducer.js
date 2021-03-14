import * as types from "../actions/types";

const initialState = {
  user: null,
  profile: null,
  booking: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case types.FETCH_PROFILE:
      console.log(action.payload);
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
    case types.UPDATE_PROFILE:
      return {
        ...state,
        profile: action.payload.updatedProfile,
      };
    default:
      return state;
  }
};

export default reducer;
