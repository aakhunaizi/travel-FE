//Imports
import instance from "./instance";

//Action Types
import * as types from "../actions/types";

//Actions

export const fetchAirlineFlights = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/airlines/flights");
      dispatch({
        type: types.FETCH_AIRLINE_FLIGHTS,
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const CreateAirlineFlight = (newFlight) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/airlines/flights/add", newFlight);
      dispatch({
        type: types.CREATE_AIRLINE_FLIGHT,
        payload: { newFlight: res.data },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const editAirlineFlight = (editFlight) => {
  return async () => {
    try {
      await instance.put(`/airlines/flights/${editFlight.id}`, editFlight);
    } catch (error) {
      console.error(error);
    }
  };
};
