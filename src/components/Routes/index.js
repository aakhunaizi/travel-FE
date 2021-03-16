//React Imports
import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";

//Components
import Signup from "../SignUp";
import UserSignIn from "../UserSignIn";
import AirlineSignIn from "../AirlineSignIn";
import Home from "../Home";
import UserProfile from "../UserProfile";
import AirlineFlights from "../AirlineFlights";
import Checkout from "../Checkout";
import FlightList from "../FlightList";

const Routes = () => {
  const user = useSelector((state) => state.authReducer.user);
  const inbound = useSelector((state) => state.flightReducer.inbound);

  return (
    <Switch>
      <Route path={"/signin/airlines"}>
        <AirlineSignIn />
      </Route>
      <Route path={"/signup"}>
        <Signup />
      </Route>
      <Route path={"/signin"}>
        <UserSignIn />
      </Route>
      <Route
        path={"/profile"}
        component={() => {
          if (user === null) {
            return <UserSignIn />;
          } else if (user && user.role === "user") {
            return <UserProfile />;
          } else if (user && user.role === "airline") {
            return <AirlineFlights />;
          }
        }}
      />
      <Route
        path={"/flights"}
        component={() => {
          if (user === null) {
            return <AirlineSignIn />;
          } else if (user && user.role === "airline") {
            return <AirlineFlights />;
          } else return <Home />;
        }}
      />
      <Route path="/checkout">
        <Checkout />
      </Route>
      <Route
        path={"/search"}
        component={() => {
          if (inbound.length === 0) {
            return <Home />;
          } else return <FlightList />;
        }}
      />
      <Route
        path={"/"}
        component={() => {
          if (user === null || (user && user.role === "user")) {
            return <Home />;
          } else if (user && user.role === "airline") {
            return <AirlineFlights />;
          }
        }}
      />
    </Switch>
  );
};

export default Routes;
