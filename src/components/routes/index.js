//React Imports
import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";

//Components
import Signup from "../SignUp";
import PassengerSignIn from "../UserSignIn";
import AirlineSignIn from "../AirlineSignIn";

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
      <Route path="/">
        <div>Pretend this is a home page</div>
      </Route>
    </Switch>
  );
};

export default Routes;
