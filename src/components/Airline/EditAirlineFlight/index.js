//React Imports
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Actions
import { editAirlineFlight } from "../../../store/actions/airlineActions";

//Components
import ReactDatePicker from "react-datepicker";
import Select from "react-select";

//Styles
import {
  DateContainer,
  DateLabel,
  StyledCard,
  StyledForm,
  StyledSaveButton,
} from "./styles";
import "react-datepicker/dist/react-datepicker.css";

export default function EditFlight({ flightEditId }) {
  const airports = useSelector((state) => state.airportReducer.airports);
  const foundFlight = useSelector((state) =>
    state.airlineReducer.flights.find((flight) => flight.id === flightEditId)
  );

  const [flight, setFlight] = useState({
    ...foundFlight,
    departureDate: new Date(foundFlight.departureDate),
    arrivalDate: new Date(foundFlight.arrivalDate),
  });

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
    dispatch(editAirlineFlight(flight));
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
            <DateContainer className="row">
              <DateLabel className="form-label">
                Departure Date / Departure Time
              </DateLabel>
              <ReactDatePicker
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mm aa"
                className="form-control p-3"
                onChange={(departureDate) =>
                  setFlight({ ...flight, departureDate })
                }
                selected={flight.departureDate}
              />
              <DateLabel className="form-label">
                Arrival Date / Arrival Time
              </DateLabel>
              <ReactDatePicker
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mm aa"
                className="form-control p-3"
                onChange={(arrivalDate) =>
                  setFlight({ ...flight, arrivalDate })
                }
                selected={flight.arrivalDate}
              />
            </DateContainer>
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

            <StyledSaveButton
              type="submit"
              className="form-control btn btn-success"
              value="Save Changes"
            />
          </form>
        </StyledCard>
      </StyledForm>
    </>
  );
}
