//React Imports
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

//Actions
import { profile } from "../../store/actions/authActions";

//Components
import { useForm, Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";

//Styles
import { StyledForm, StyledValidationText } from "./styles";
import "react-datepicker/dist/react-datepicker.css";
import { FaTemperatureHigh } from "react-icons/fa";

export default function UpdateProfile() {
  const username = useSelector((state) => state.authReducer.user.username);
  const checkProfile = useSelector((state) => state.authReducer.profile);
  checkProfile === null && dispatch(profile(username));
  const { register, handleSubmit, errors, control } = useForm();

  const dispatch = useDispatch();

  const submitAction = (data) => {
    console.log("Submitted", data); //Update action here
    //Buffer to execute action before reloading page
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <>
      <StyledForm className="container">
        <form className="form" onSubmit={handleSubmit(submitAction)}>
          <label className="form-label">First Name</label>
          <input
            type="text"
            name="firstName"
            defaultValue={checkProfile.firstName}
            className="form-control mb-2"
            ref={register({ required: true })}
          />
          <StyledValidationText>
            {errors.firstName && "First Name is required"}
          </StyledValidationText>
          <br />
          <label className="form-label">Last Name</label>
          <input
            type="text"
            name="lastName"
            defaultValue={checkProfile.lastName}
            className="form-control mb-2"
            ref={register({ required: true })}
          />
          <StyledValidationText>
            {errors.lastName && "Last Name is required"}
          </StyledValidationText>
          <br />
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            defaultValue={checkProfile.phoneNumber}
            className="form-control mb-2"
            ref={register({ required: true })}
          />
          <StyledValidationText>
            {errors.phoneNumber && "Phone Number is required"}
          </StyledValidationText>
          <br />
          <label className="form-label">Email</label>
          <input
            type="text"
            name="email"
            defaultValue={checkProfile.email}
            className="form-control mb-2"
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
          <br />
          <input
            type="submit"
            className="form-control btn btn-success"
            value="Save Changes"
          />
        </form>
      </StyledForm>
    </>
  );
}
