//Components
import { Button, Card, CardActions } from "@material-ui/core";
import { useState } from "react";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import { StyledCard, StyledCardHeader, StyledSearch } from "./styles";
import ReactDatePicker from "react-datepicker";
const Home = () => {
  const dispatch = useDispatch();
  const [flight, setFlight] = useState({
    departureAirport: null,
    arrivalAirport: "",
    departureDate: "",
    arrivalDate: null,
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

  const _passengers = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 4,
      label: "4",
    },
    {
      value: 5,
      label: "5",
    },
    {
      value: 6,
      label: "6",
    },
    {
      value: 7,
      label: "7",
    },
    {
      value: 8,
      label: "8",
    },
    {
      value: 9,
      label: "9",
    },
  ];

  const airports = useSelector((state) => state.airportReducer.airports);
  const airportDepartureList = airports
    .filter((airport) => airport.id !== flight.arrivalAirport)
    .map((airport) => ({
      value: airport.id,
      label: `${airport.name}, ${airport.location}`,
    }));

  const airportArrivalList = airports
    .filter((airport) => airport.id !== flight.departureAirport)
    .map((airport) => ({
      value: airport.id,
      label: `${airport.name}, ${airport.location}`,
    }));

  const handleSearch = () => {
    console.log(flight);
    alert("Flight", flight);
  };
  return (
    <StyledSearch className="container">
      <br />
      <StyledCard variant="outlined">
        <StyledCardHeader title="Search for your next destination" />
        <div className="row">
          <Select
            className="col-md-3"
            name="flightType"
            defaultValue={_flightType[0]}
            value={flight.flightType}
            options={_flightType}
            onChange={(flightType) => {
              setFlight({ ...flight, flightType });
            }}
          />
          <Select
            className="col-md-3"
            defaultValue={_passengers[0]}
            value={flight.passengers}
            isClearable="true"
            name="passengers"
            options={_passengers}
            onChange={(passengers) => setFlight({ ...flight, passengers })}
          />
          <Select
            className="col-md-3"
            name="seatType"
            defaultValue={_seatType[0]}
            value={flight.seatType}
            options={_seatType}
            onChange={(seatType) => setFlight({ ...flight, seatType })}
          />
        </div>
        <br />
        <div className="row">
          <Select
            className="col-md-6"
            value={flight.departureAirport}
            placeholder="From"
            isSearchable="true"
            isClearable="true"
            name="departureAirport"
            options={airportDepartureList}
            onChange={(departureAirport) =>
              setFlight({ ...flight, departureAirport })
            }
          />
          <Select
            className="col-md-6"
            value={flight.arrivalAirport}
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
        <br />
        <div className="row">
          <FaPlaneDeparture style={{ margin: "2%" }} />
          <ReactDatePicker
            className="form-control p-4"
            placeholderText="Select date"
            onChange={(departureDate) =>
              setFlight({ ...flight, departureDate })
            }
            selected={flight.departureDate}
          />
          {flight.flightType.value === "roundtrip" && (
            <>
              <FaPlaneArrival style={{ margin: "2%" }} />
              <ReactDatePicker
                className="form-control p-4"
                placeholderText="Select date"
                onChange={(arrivalDate) =>
                  setFlight({ ...flight, arrivalDate })
                }
                selected={flight.arrivalDate}
              />
            </>
          )}
        </div>
        <CardActions style={{ float: "right" }}>
          <Button variant="outlined" color="primary" onClick={handleSearch}>
            Search
          </Button>
        </CardActions>
      </StyledCard>
    </StyledSearch>
  );
};

export default Home;
