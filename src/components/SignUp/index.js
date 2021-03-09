import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signup } from "../../store/actions/authActions";
import { useState } from "react";
import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// const schema = yup.object().shape({
//   email:,
//   firstName:,
//   lastName: ,
//   phoneNumber:,
//   username:,
//   password:

// });

export default function Signup() {
  const { register, handleSubmit, errors, control } = useForm({
    defaultValues: {
      gender: "M",
      dateOfBirth: "",
    },
    // resolver: yupResolver(schema),
  });
  const [password, setPassword] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = (data) => {
    dispatch(signup(data, history));
  };

  return (
    <div
      className="container"
      style={{
        width: "20%",
      }}
    >
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up</h1>
        <br />
        <label className="form-label">Email</label>
        <input
          type="text"
          name="email"
          className="form-control mb-2"
          ref={register({ required: true })}
        />
        <div style={{ color: "red" }}>
          {errors.email && "Email is required"}
        </div>
        <br />
        <label className="form-label">First Name</label>
        <input
          type="text"
          name="firstName"
          className="form-control mb-2"
          ref={register({ required: true })}
        />
        <div style={{ color: "red" }}>
          {errors.firstName && "First Name is required"}
        </div>
        <br />
        <label className="form-label">Last Name</label>
        <input
          type="text"
          name="lastName"
          className="form-control mb-2"
          ref={register({ required: true })}
        />
        <div style={{ color: "red" }}>
          {errors.lastName && "Last Name is required"}
        </div>
        <br />
        <label>Date of Birth</label>
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
        <div style={{ color: "red" }}>
          {errors.value && "Date of Birth is required"}
        </div>
        <label>Gender</label>
        <Controller
          as={
            <RadioGroup aria-label="gender">
              <FormControlLabel value="M" control={<Radio />} label="Male" />
              <FormControlLabel value="F" control={<Radio />} label="Female" />
            </RadioGroup>
          }
          name="gender"
          control={control}
        />
        <label className="form-label">Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          className="form-control mb-2"
          ref={register({ required: true })}
        />
        <div style={{ color: "red" }}>
          {errors.phoneNumber && "Phone Number is required"}
        </div>
        <br />
        <label className="form-label">Username</label>
        <input
          type="text"
          name="username"
          className="form-control mb-2"
          ref={register({ required: true })}
        />
        <div style={{ color: "red" }}>
          {errors.username && "Username is required"}
        </div>
        <br />
        <label className="form-label">Password</label>
        <input
          type={password ? "password" : "text"}
          name="password"
          className="form-control mb-2"
          ref={register({
            required: true,
            pattern: "/^(?=.[a-z])(?=.[A-Z])(?=.*d)[a-zA-Zd]{8,}$/",
          })}
        />
        <div style={{ color: "red" }}>
          {errors.password &&
            " Password must contain a minimum of eight characters, at least one uppercase letter, one lowercase letter and one number"}
        </div>
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
          value="Sign Up"
        />
      </form>
    </div>
  );
}
