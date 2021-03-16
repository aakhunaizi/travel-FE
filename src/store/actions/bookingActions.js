//Imports
import instance from "./instance";
//Action Types

//Actions
export const bookFlight = async (flightInfo) => {
  try {
    const res = await instance.post("/booking", flightInfo);
    console.log(res.status);
  } catch (error) {
    console.error(error);
  }
};
