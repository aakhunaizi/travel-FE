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

const Routes = () => {
  const user = useSelector((state) => state.authReducer.user);
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
          } else return <Home />;
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

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
