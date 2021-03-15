import { combineReducers } from "redux";
import authReducer from "./authReducer";
import airportReducer from "./airportReducer";
import airlineReducer from "./airlineReducer";
import flightReducer from "./flightReducer";
const rootReducer = combineReducers({
  authReducer,
  airportReducer,
  airlineReducer,
  flightReducer,
});

export default rootReducer;
