//Imports
import instance from "./instance";
import { toast } from "react-toastify";

//Action Types
import * as types from "../actions/types";

//Actions
export const bookFlight = async (flightInfo) => {
  try {
    const res = await instance.post("/booking", flightInfo);
    toast.success("Booked Successfully");
  } catch (error) {
    toast.error("Error While Booking");
  }
};

export const getFlightInfo = (flight) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: types.GET_SEATS,
        payload: flight,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getFightId = (flightIds, history) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: types.GET_FLIGHT_ID,
        payload: flightIds,
      });
      history.replace("/checkout");
    } catch (error) {
      console.error(error);
    }
  };
};
export const getPassengerInfo = (passengerInfo) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: types.GET_PASSENGER,
        payload: passengerInfo,
      });
      toast.success(
        `${passengerInfo.firstName} ${passengerInfo.lastName} Added`
      );
    } catch (error) {
      console.error(error);
    }
  };
};
