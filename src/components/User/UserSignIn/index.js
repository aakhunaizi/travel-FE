//React Imports
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

//Actions
import { userSignIn } from "../../../store/actions/authActions";

//Components
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";

//Styles
import { StyledCard, StyledForm, StyledCardHeader, StyledP } from "./styles";

export default function PassengerSignIn() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [password, setPassword] = useState(true);

  const history = useHistory();

  const onSubmit = (data) => {
    dispatch(userSignIn(data, history));
  };

  return (
    <>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <StyledForm className="container">
        <StyledCard variant="outlined">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <StyledCardHeader title="Sign In" />
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
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
          <Link to="/signup">
            <StyledP>Don't have an account?</StyledP>
          </Link>
        </StyledCard>
      </StyledForm>
    </>
  );
}
