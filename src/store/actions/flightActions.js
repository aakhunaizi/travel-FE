//Imports
import instance from "./instance";

//Action Types
import * as types from "../actions/types";

//Actions
export const fetchFlights = (departure, arrival, economySeats) => {
  return async (dispatch) => {
    try {
      console.log("res", departure, arrival, economySeats);
      const res = await instance.get(
        `flights/search/inbound/?departureId=${departure}&arrivalId=${arrival}&economySeats=${economySeats}`
      );
      console.log(res);
      dispatch({
        type: types.FETCH_AIRPORTS,
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
