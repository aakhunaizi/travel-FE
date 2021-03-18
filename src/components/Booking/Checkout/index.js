import { ListGroup } from "react-bootstrap";
import CheckoutList from "../CheckoutList";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { bookFlight } from "../../../store/actions/bookingActions";
export default function Checkout() {
  const dispatch = useDispatch();
  const booking = useSelector((state) => state.bookingReducer);
  const flightSeatsType = booking.flightInfo.seatType.value;
  const passengers = booking.flightInfo.passengers.value;
  const passengersBooking = booking.passengers.length;

  const handleBooking = () => {
    if (flightSeatsType === "economy") {
      bookFlight({
        passengers: booking.passengers,
        flights: booking.flights,
        economySeats: passengers,
      });
    } else if (flightSeatsType === "business") {
      bookFlight({
        passengers: booking.passengers,
        flights: booking.flights,
        businessSeats: passengers,
      });
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
