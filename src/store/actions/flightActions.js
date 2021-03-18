//Imports
import instance from "./instance";
import moment from "moment";
//Action Types
import * as types from "../actions/types";

//Actions
export const fetchFlights = (flight, history) => {
  return async (dispatch) => {
    try {
      const departureDate = moment(flight.departureDate).format("LLLL");
      const res = await instance.get(
        `flights/search/inbound/?departureId=${
          flight.departureAirportId
        }&arrivalId=${flight.arrivalAirportId}&${
          flight.seatType.value === "economy"
            ? `economySeats=${flight.passengers.value}`
            : `businessSeats=${flight.passengers.value}`
        }&departureDate=${departureDate}`
      );
      dispatch({
        type: types.FETCH_FLIGHTS,
        payload: res.data,
      });
      history.replace("/search");
    } catch (error) {
      console.error(error);
    }
  };
};
export const fetchSecondFlights = (flight, arrivalDate) => {
  return async (dispatch) => {
    try {
      const departureDateFrom = moment(flight.arrivalDate).format("LLLL");
      const res = await instance.get(
        `flights/search/outbound/?departureId=${
          flight.departureAirportId
        }&arrivalId=${flight.arrivalAirportId}&${
          flight.seatType.value === "economy"
            ? `economySeats=${flight.passengers.value}`
            : `businessSeats=${flight.passengers.value}`
        }&departureDate=${departureDateFrom}&arrivalDate=${arrivalDate}`
      );
      dispatch({
        type: types.FETCH_ROUNDWAY_FLIGHT,
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
