//Imports
import instance from "./instance";
import moment from "moment";
//Action Types
import * as types from "../actions/types";

//Actions
export const fetchFlights = (flight) => {
  return async (dispatch) => {
    try {
      const departureDate = moment(flight.departureDate).format("LLLL");
      const res = await instance.get(
        `flights/search/inbound/?departureId=${
          flight.departureAirport.value
        }&arrivalId=${flight.arrivalAirport.value}&${
          flight.seatType === "Economy"
            ? `economySeats=${flight.passengers.value}`
            : `businessSeats=${flight.passengers.value}`
        }&departureDate=${departureDate}`
      );
      dispatch({
        type: types.FETCH_FLIGHTS,
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
