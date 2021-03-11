//React Imports
import { Route, Switch } from "react-router";

//Components
import Signup from "../SignUp";
import PassengerSignIn from "../UserSignIn";
import AirlineSignIn from "../AirlineSignIn";
import Home from "../Home";
import UserProfile from "../UserProfile";

const Routes = () => {
  return (
    <Switch>
      <Route path={"/signin/airlines"}>
        <AirlineSignIn />
      </Route>
      <Route path={"/signup"}>
        <Signup />
      </Route>
      <Route path={"/signin"}>
        <PassengerSignIn />
      </Route>
      <Route path={"/profile"}>
        <UserProfile />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
