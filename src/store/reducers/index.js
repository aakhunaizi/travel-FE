import { combineReducers } from "redux";
import authReducer from "./authReducer";
import airportReducer from "./airportReducer";
import airlineReducer from "./airlineReducer";
import flightReducer from "./flightReducer";
import bookingReducer from "./bookingReducer";
const rootReducer = combineReducers({
  authReducer,
  airportReducer,
  airlineReducer,
  flightReducer,
  bookingReducer,
});

export default rootReducer;
