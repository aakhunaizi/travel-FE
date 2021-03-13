//Imports
import instance from "./instance";
import decode from "jwt-decode";

//Action Types
import * as types from "../actions/types";

//Actions
const setUser = (token, profile) => {
  localStorage.setItem("token", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return {
    type: types.SET_USER,
    payload: decode(token),
  };
};

export const signup = (newUser, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", newUser);
      localStorage.setItem("token", res.data.token);
      dispatch(setUser(res.data.token));
      history.replace("/");
    } catch (error) {
      console.error(error);
    }
  };
};

export const userSignIn = (user, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", user);
      localStorage.setItem("token", res.data.token);
      dispatch(setUser(res.data.token));
      history.replace("/");
    } catch (error) {
      console.error(error);
    }
  };
};

export const airlineSignIn = (user, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/airline-signin", user);
      localStorage.setItem("token", res.data.token);
      dispatch(setUser(res.data.token));
      history.replace("/");
    } catch (error) {
      console.error(error);
    }
  };
};

export const signout = () => {
  localStorage.removeItem("token");
  delete instance.defaults.headers.common.Authorization;
  return {
    type: types.SET_USER,
    payload: null,
  };
};

export const checkForToken = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    const user = decode(token);
    const currentTime = Date.now();
    if (currentTime <= user.exp) {
      dispatch(setUser(token));
    } else {
      localStorage.removeItem("token");
      dispatch(signout());
    }
  }
};

export const profile = () => async (dispatch) => {
  try {
    const res = await instance.get("/profile");
    dispatch({
      type: types.FETCH_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const clearProfile = () => {
  return {
    type: types.FETCH_PROFILE,
    payload: null,
  };
};

export const updateProfile = (updatedProfile) => {
  return async (dispatch) => {
    try {
      const res = await instance.put("/profile/edit", updatedProfile);
      dispatch({
        type: "UPDATE_PROFILE",
        payload: { updatedProfile: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
