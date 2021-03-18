import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import ReactDatePicker from "react-datepicker";
import { getPassengerInfo } from "../../../store/actions/bookingActions";

export default function ChechoutForm() {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const [startDate, setStartDate] = useState(new Date());
  const onSubmit = (data) => {
    dispatch(
      getPassengerInfo({ ...data, dateOfBirth: startDate.toLocaleDateString() })
    );
  };

  return (
    <div className="container p-2">
      <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-md-3">
          <label>Title</label>
          <select
            name="gender"
            ref={register({ required: true })}
            className="form-control"
          >
            <option value="M">Mr.</option>
            <option value="F">Ms.</option>
          </select>
        </div>
        <div className="col-md-3">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            ref={register({ required: true })}
          />
          <div className="text-danger mt-2">
            {errors.firstName && "First Name is Required"}
          </div>
        </div>
        <div className="col-md-3">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            ref={register({ required: true })}
          />
          <div className="text-danger mt-2">
            {errors.lastName && "Last Name is Required"}
          </div>
        </div>

        <div className="col-md-3 ">
          <label>Date of Birth</label>
          <ReactDatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            withPortal
            className="form-control"
          />
        </div>
        <div class="col-md-12 mt-4 ">
          <button
            type="submit"
            className="btn btn-success"
            style={{ width: "12%" }}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
