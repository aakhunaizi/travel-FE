//React Imports
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//Components
import { Button } from "@material-ui/core";
import Select from "react-select";
import {
  StyledCard,
  StyledCardActions,
  StyledCardHeader,
  StyledFaPlaneArrival,
  StyledFaPlaneDeparture,
  StyledSearch,
} from "./styles";
import ReactDatePicker from "react-datepicker";

//Actions
import { fetchFlights } from "../../store/actions/flightActions";
import { getFlightInfo } from "../../store/actions/bookingActions";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [flight, setFlight] = useState({
    departureAirport: { value: "", label: "" },
    arrivalAirport: { value: "", label: "" },
    departureDate: new Date(),
    arrivalDate: new Date(),
    flightType: "oneway",
    seatType: "economy",
    passengers: 1,
  });

  const _flightType = [
    {
      value: "oneway",
      label: "One Way",
    },
    {
      value: "roundtrip",
      label: "Round Trip",
    },
  ];

  const _seatType = [
    {
      value: "economy",
      label: "Economy",
    },
    {
      value: "business",
      label: "Business",
    },
  ];

  const _passengers = [];
  for (let index = 1; index < 6; index++) {
    _passengers.push({
      value: index,
      label: `${index}`,
    });
  }

  const airports = useSelector((state) => state.airportReducer.airports);

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

  const handleSearch = () => {
    dispatch(
      fetchFlights(
        {
          ...flight,
          departureAirportId: flight.departureAirport.value,
          arrivalAirportId: flight.arrivalAirport.value,
        },
        history
      )
    );
    dispatch(
      getFlightInfo({
        ...flight,
        departureAirportId: flight.departureAirport.value,
        arrivalAirportId: flight.arrivalAirport.value,
      })
    );
  };

  return (
    <div
      className="vh-100"
      style={{
        backgroundImage: `url("https://i.redd.it/cy1vbp2axhy41.png")`,
      }}
    >
      <StyledSearch className="container">
        <br />
        <br />
        <br />
        <div style={{ margin: "10% auto" }}>
          <StyledCard variant="outlined">
            <StyledCardHeader title="Search for your next destination" />
            <div className="row p-2">
              <div className="col-md-4">
                <Select
                  name="flightType"
                  placeholder="Flight Type"
                  value={flight.flightType}
                  options={_flightType}
                  onChange={(flightType) => {
                    setFlight({ ...flight, flightType });
                  }}
                />
              </div>
              <Select
                className="col-md-4"
                placeholder="Passengers"
                value={flight.passengers}
                isClearable="true"
                name="passengers"
                options={_passengers}
                onChange={(passengers) => setFlight({ ...flight, passengers })}
              />
              <Select
                className="col-md-4"
                name="seatType"
                placeholder="Seat Type"
                value={flight.seatType}
                options={_seatType}
                onChange={(seatType) => setFlight({ ...flight, seatType })}
              />
            </div>
            <div className="row mt-2 p-2">
              <div className="col-md-6">
                <Select
                  placeholder={<div>From</div>}
                  isSearchable="true"
                  isClearable="true"
                  name="departureAirport"
                  options={airportDepartureList}
                  onChange={(departureAirport) =>
                    setFlight({ ...flight, departureAirport })
                  }
                />
              </div>
              <div className="col-md-6">
                <Select
                  placeholder="To"
                  isSearchable="true"
                  isClearable="true"
                  isDisabled={flight.departureAirport ? false : true}
                  name="arrivalAirport"
                  options={airportArrivalList}
                  onChange={(arrivalAirport) =>
                    setFlight({ ...flight, arrivalAirport })
                  }
                />
              </div>
            </div>
            <div className="row mt-2 p-2">
              <StyledFaPlaneDeparture />
              <ReactDatePicker
                className="form-control p-2"
                placeholderText="Select date"
                onChange={(departureDate) => {
                  setFlight({ ...flight, departureDate });
                }}
                selected={flight.departureDate}
              />
              {flight.flightType.value === "roundtrip" && (
                <>
                  <StyledFaPlaneArrival />
                  <ReactDatePicker
                    className="form-control p-2"
                    placeholderText="Select date"
                    onChange={(arrivalDate) =>
                      setFlight({ ...flight, arrivalDate })
                    }
                    selected={flight.arrivalDate}
                  />
                </>
              )}
            </div>
            <StyledCardActions>
              <Button variant="outlined" color="primary" onClick={handleSearch}>
                Search
              </Button>
            </StyledCardActions>
          </StyledCard>
        </div>
      </StyledSearch>
    </div>
  );
};

export default Home;
