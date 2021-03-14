import { combineReducers } from "redux";
import authReducer from "./authReducer";
import airportReducer from "./airportReducer";
import airlineReducer from "./airlineReducer";

const rootReducer = combineReducers({
  authReducer,
  airportReducer,
  airlineReducer,
});

export default rootReducer;
