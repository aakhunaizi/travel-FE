//Imports
import instance from "./instance";
import moment from "moment";
import { toast } from "react-toastify";

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
      if (res.data.length === 0) {
        throw new Error("No Trips Avaiable on This Date");
      }
      dispatch({
        type: types.FETCH_FLIGHTS,
        payload: res.data,
      });
      history.replace("/search");
    } catch (error) {
      toast.error(error.message);
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
      if (res.data.length === 0) {
        throw new Error("No Roundtrips Avaiable on This Date");
      }
      dispatch({
        type: types.FETCH_ROUNDWAY_FLIGHT,
        payload: res.data,
      });
    } catch (error) {
      toast.error(error.message);
    }
  };
};
