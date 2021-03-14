//React Imports
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

//Actions
import { signup } from "../../store/actions/authActions";

import { useForm, Controller } from "react-hook-form";

//Components
import ReactDatePicker from "react-datepicker";
import { Card, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { Helmet } from "react-helmet";

//Styles
import {
  StyledCard,
  StyledCardHeader,
  StyledForm,
  StyledP,
  StyledValidationText,
} from "./styles";
import "react-datepicker/dist/react-datepicker.css";

export default function Signup() {
  const { register, handleSubmit, errors, control } = useForm({
    defaultValues: {
      gender: "M",
      dateOfBirth: "",
    },
  });
  const [password, setPassword] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = (data) => {
    dispatch(signup(data, history));
  };

  return (
    <>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>

      <StyledForm className="container">
        <StyledCard variant="outlined">
          <StyledCardHeader title="Sign Up" />
          <form className="form row g-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-12">
              <label className="form-label">Email</label>
              <input
                type="text"
                name="email"
                className="form-control"
                ref={register({
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              <StyledValidationText>
                {errors.email && <span>{errors.email.message}</span>}
              </StyledValidationText>
            </div>

            <div className="col-md-6">
              <label className="form-label">First Name</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                ref={register({ required: true })}
              />
              <StyledValidationText>
                {errors.firstName && "First Name is required"}
              </StyledValidationText>
            </div>
            <div className="col-md-6">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                ref={register({ required: true })}
              />
              <StyledValidationText>
                {errors.lastName && "Last Name is required"}
              </StyledValidationText>
            </div>
            <div className="col-12">
              <label className="form-label">Date of Birth</label>
              <br />
              <Controller
                control={control}
                name="dateOfBirth"
                render={(props) => (
                  <ReactDatePicker
                    dateFormat="yyyy/MM/dd"
                    className="form-control mb-2"
                    placeholderText="Select date"
                    onChange={(e) => props.onChange(e)}
                    selected={props.value}
                  />
                )}
              />
            </div>
            <div className="col-md-12">
              <label>Gender</label>
              <Controller
                as={
                  <RadioGroup aria-label="gender">
                    <FormControlLabel
                      value="M"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="F"
                      control={<Radio />}
                      label="Female"
                    />
                  </RadioGroup>
                }
                name="gender"
                control={control}
              />
            </div>
            <div className="col-md-12">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                className="form-control mb-2"
                ref={register({ required: true })}
              />
              <StyledValidationText>
                {errors.phoneNumber && "Phone Number is required"}
              </StyledValidationText>
            </div>
            <div className="col-md-6">
              <label className="form-label">Username</label>
              <input
                type="text"
                name="username"
                className="form-control mb-2"
                ref={register({ required: true })}
              />
              <StyledValidationText>
                {errors.username && "Username is required"}
              </StyledValidationText>
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type={password ? "password" : "text"}
                name="password"
                className="form-control mb-2"
                ref={register({
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                    message:
                      "The password must contain a minimum of 8 characters, an uppercase letter, a lowercase letter, and a number.",
                  },
                })}
              />
              <StyledValidationText>
                {errors.password && <span>{errors.password.message}</span>}
              </StyledValidationText>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  onClick={() => setPassword(!password)}
                />
                <label className="form-check-label">Show password</label>
              </div>
            </div>
            <input
              type="submit"
              className="form-control btn btn-success"
              value="Sign Up"
            />
          </form>
          <Link to="/signin">
            <StyledP>Already have an account?</StyledP>
          </Link>
        </StyledCard>
      </StyledForm>
    </>
  );
}
