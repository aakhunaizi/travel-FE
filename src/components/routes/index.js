//React Imports
import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";

//Components
import Signup from "../SignUp";
import UserSignIn from "../UserSignIn";
import AirlineSignIn from "../AirlineSignIn";
import Home from "../Home";
import UserProfile from "../UserProfile";

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
        component={() => (user === null ? <UserSignIn /> : <UserProfile />)}
      />

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
