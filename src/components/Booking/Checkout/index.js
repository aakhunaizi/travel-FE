import { useState } from "react";
import { ListGroup, Collapse, Card } from "react-bootstrap";
import CheckoutList from "../CheckoutList";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { bookFlight } from "../../../store/actions/bookingActions";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Checkout() {
  const dispatch = useDispatch();
  const history = useHistory();
  const booking = useSelector((state) => state.bookingReducer);
  const user = useSelector((state) => state.authReducer.user);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  const flightSeatsType = booking.flightInfo.seatType.value;
  const passengers = booking.flightInfo.passengers.value;
  const passengersBooking = booking.passengers.length;
  const [open, setOpen] = useState(false);

  const handleBooking = () => {
    if (flightSeatsType === "economy") {
      bookFlight(
        {
          passengers: booking.passengers,
          flights: booking.flights,
          economySeats: passengers,
        },
        user,
        history
      );
    } else if (flightSeatsType === "business") {
      bookFlight(
        {
          passengers: booking.passengers,
          flights: booking.flights,
          businessSeats: passengers,
        },
        user,
        history
      );
    }
  };

  return (
    <div className="container mt-5">
      <ToastContainer autoClose={2000} />
      <ListGroup variant="flush" style={{ marginTop: "10%" }}>
        {Array.from({ length: passengers }, (_, index) => (
          <CheckoutList passengerNumber={index + 1} />
        ))}
      </ListGroup>
      {!user ? (
        <>
          <ListGroup.Item onClick={() => setOpen(!open)}>
            Guest Information
          </ListGroup.Item>
          <Collapse in={open}>
            <Card>
              <Card.Body>
                <div className="container p-2">
                  <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-3">
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone Number"
                        name="PhoneNumber"
                        ref={register}
                      />
                      <div className="text-danger mt-2">
                        {errors.PhoneNumber && "First Name is Required"}
                      </div>
                    </div>
                    <div className="col-md-3">
                      <label>Phone Number</label>
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email"
                        name="Email"
                        ref={register}
                      />
                      <div className="text-danger mt-2">
                        {errors.Email && "First Name is Required"}
                      </div>
                    </div>
                    <div className="col-sm-12 mt-2">
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
              </Card.Body>
            </Card>
          </Collapse>
        </>
      ) : (
        ""
      )}
      <div className="row d-flex align-item-end">
        <button
          className="btn btn-outline-success mt-2 ml-auto"
          disabled={passengers === passengersBooking ? false : true}
          onClick={handleBooking}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
