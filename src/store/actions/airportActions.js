//Imports
import instance from "./instance";

//Action Types
import * as types from "../actions/types";

//Actions

export const fetchAirports = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/airports");
      dispatch({
        type: types.FETCH_AIRPORTS,
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
