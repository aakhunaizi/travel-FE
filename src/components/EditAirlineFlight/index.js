//React Imports
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Actions
// import { CreateAirlineFlight } from "../../store/actions/airlineActions";

//Components
import ReactDatePicker from "react-datepicker";
import Select from "react-select";

//Styles
import { StyledCard, StyledForm } from "./styles";
import "react-datepicker/dist/react-datepicker.css";

export default function EditFlight() {
  const [flight, setFlight] = useState({
    departureAirport: { value: "", label: "" },
    arrivalAirport: { value: "", label: "" },
    departureDate: new Date(),
    arrivalDate: new Date(),
    economySeats: 1,
    businessSeats: 1,
    price: 1,
  });

  const airports = useSelector((state) => state.airportReducer.airports);
  const flights = useSelector((state) => state.airlineReducer.flights);

  const airportDepartureList = airports
    .filter((airport) => airport.id !== flight.arrivalAirport.value)
    .map((airport) => ({
      value: airport.id,
      label: `${airport.name}, ${airport.location}`,
    }));

  const airportArrivalList = airports
    .filter((airport) => airport.id !== flight.departureAirport.value)
    .map((airport) => ({
      value: airport.id,
      label: `${airport.name}, ${airport.location}`,
    }));

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    console.log("Submitted");
  };

  const handleChange = (event) => {
    setFlight({ ...flight, [event.target.name]: event.target.value });
  };

  return (
    <>
      <StyledForm>
        <StyledCard variant="outlined">
          <form className="form" onSubmit={handleSubmit}>
            <div className="row">
              <label className="form-label">Departure Airport</label>
              <Select
                className="col-md-4"
                value={flight.departureAirport}
                placeholder="From"
                isSearchable="true"
                name="departureAirport"
                options={airportDepartureList}
                onChange={(departureAirport) =>
                  setFlight({ ...flight, departureAirport })
                }
              />
              <label className="form-label">Arrival Airport</label>
              <Select
                className="col-md-4"
                value={flight.arrivalAirport}
                placeholder="To"
                isSearchable="true"
                isDisabled={flight.departureAirport ? false : true}
                name="arrivalAirport"
                options={airportArrivalList}
                onChange={(arrivalAirport) =>
                  setFlight({ ...flight, arrivalAirport })
                }
              />
            </div>
            <div className="row" style={{ marginTop: "2%" }}>
              <label className="form-label" style={{ margin: "1%" }}>
                Departure Date / Departure Time
              </label>
              <ReactDatePicker
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mm aa"
                className="form-control p-3"
                onChange={(departureDate) =>
                  setFlight({ ...flight, departureDate })
                }
                selected={flight.departureDate}
              />
              <label className="form-label" style={{ margin: "1%" }}>
                Arrival Date / Arrival Time
              </label>
              <ReactDatePicker
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mm aa"
                className="form-control p-3"
                onChange={(arrivalDate) =>
                  setFlight({ ...flight, arrivalDate })
                }
                selected={flight.arrivalDate}
              />
            </div>
            <div className="row p-2">
              <div className="col-md-3">
                <label className="form-label">Economy Seats</label>
                <input
                  type="number"
                  name="economySeats"
                  placeholder="Economy seats"
                  className="form-control"
                  onChange={handleChange}
                  value={flight.economySeats}
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">Business Seats</label>
                <input
                  type="number"
                  name="businessSeats"
                  placeholder="Business seats"
                  className="form-control"
                  onChange={handleChange}
                  value={flight.businessSeats}
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">Price</label>
                <input
                  type="number"
                  name="price"
                  className="form-control"
                  placeholder="Price"
                  onChange={handleChange}
                  value={flight.price}
                />
              </div>
            </div>

            <input
              type="submit"
              className="form-control btn btn-success"
              value="Save Changes"
              style={{
                display: "flex",
                width: "20%",
                justifyContent: "center",
                margin: "2% auto",
              }}
            />
          </form>
        </StyledCard>
      </StyledForm>
    </>
  );
}
