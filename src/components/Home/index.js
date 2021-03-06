//React Imports
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
//Components
import { Button } from "@material-ui/core";
import Select from "react-select";
import {
  BackgroundContainer,
  StyledCard,
  StyledCardActions,
  StyledCardContainer,
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
    <BackgroundContainer className="vh-100">
      <ToastContainer autoClose={2000} />
      <StyledSearch className="container">
        <br />
        <br />
        <br />
        <StyledCardContainer>
          <StyledCard variant="outlined" className="shadow">
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
            <div className="row mt-2 p-2 d-flex justify-content-around">
              <div className="col-md-6">
                <StyledFaPlaneDeparture />
                <ReactDatePicker
                  className="form-control p-2 "
                  placeholderText="Select date"
                  onChange={(departureDate) => {
                    setFlight({ ...flight, departureDate });
                  }}
                  selected={flight.departureDate}
                  withPortal
                />
              </div>
              {flight.flightType.value === "roundtrip" && (
                <div className="col-md-6">
                  <StyledFaPlaneArrival />
                  <ReactDatePicker
                    className="form-control p-2"
                    placeholderText="Select date"
                    onChange={(arrivalDate) =>
                      setFlight({ ...flight, arrivalDate })
                    }
                    selected={flight.arrivalDate}
                    withPortal
                  />
                </div>
              )}
            </div>
            <StyledCardActions>
              <Button variant="outlined" color="primary" onClick={handleSearch}>
                Search
              </Button>
            </StyledCardActions>
          </StyledCard>
        </StyledCardContainer>
      </StyledSearch>
    </BackgroundContainer>
  );
};

export default Home;
