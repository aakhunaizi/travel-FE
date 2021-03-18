import { ListGroup } from "react-bootstrap";
import CheckoutList from "../CheckoutList";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { bookFlight } from "../../../store/actions/bookingActions";
import { useHistory } from "react-router-dom";
export default function Checkout() {
  const dispatch = useDispatch();
  const history = useHistory();
  const booking = useSelector((state) => state.bookingReducer);
  const user = useSelector((state) => state.authReducer.user);
  const flightSeatsType = booking.flightInfo.seatType.value;
  const passengers = booking.flightInfo.passengers.value;
  const passengersBooking = booking.passengers.length;

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
