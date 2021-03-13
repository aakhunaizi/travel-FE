//React Imports
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

//Actions
import { airlineSignIn } from "../../store/actions/authActions";

//Components
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { Card } from "@material-ui/core";

//Styles
import { StyledForm } from "./styles";
import { StyledCardHeader } from "./styles";

export default function AirlineSignin() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [password, setPassword] = useState(true);

  const history = useHistory();

  const onSubmit = (data) => {
    dispatch(airlineSignIn(data, history));
  };

  return (
    <>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <StyledForm className="container">
        <Card variant="outlined">
          <StyledCardHeader title="Sign In" />
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              className="form-control mb-2"
              ref={register({ required: true })}
            />

            <label className="form-label">Password</label>
            <input
              type={password ? "password" : "text"}
              name="password"
              className="form-control mb-2"
              ref={register({ required: true })}
            />

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                onClick={() => setPassword(!password)}
              />
              <label className="form-check-label">Show password</label>
            </div>

            <input
              type="submit"
              className="form-control btn btn-success"
              value="Sign In"
            />
          </form>
        </Card>
      </StyledForm>
    </>
  );
}
