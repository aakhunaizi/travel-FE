//React Imports
import { useDispatch, useSelector } from "react-redux";

//Actions
import { profile, updateProfile } from "../../store/actions/authActions";

//Components
import { useForm } from "react-hook-form";

//Styles
import { StyledForm, StyledValidationText } from "./styles";
import "react-datepicker/dist/react-datepicker.css";

export default function UpdateProfile() {
  const username = useSelector((state) => state.authReducer.user.username);
  const checkProfile = useSelector((state) => state.authReducer.profile);
  const dispatch = useDispatch();
  checkProfile === null && dispatch(profile(username));
  const { register, handleSubmit, errors } = useForm();

  const submitAction = (data) => {
    dispatch(updateProfile(data));
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
