//Components
import { Card } from "@material-ui/core";
import { useState } from "react";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { useSelector } from "react-redux";
import Select from "react-select";
import { StyledCardHeader, StyledSearch } from "./styles";

const Home = () => {
  const [departureFlight, setDepartureFlight] = useState({ flight: "" });
  const [arrivalFlight, setArrivalFlight] = useState({ flight: "" });
  const [departureFlightDate, setDepartureFlightDate] = useState({
    departuredate: "",
  });
  const [arrivalFlightDate, setArrivalFlightDate] = useState({
    arrivaldate: "",
  });
  const [flightType, setFlightType] = useState("oneway");
  const [seatType, setSeatType] = useState("economy");
  const [numberOfSeats, setNumberOfSeats] = useState(1);

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

  const _numberOfSeats = [
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
    .filter((airport) => airport.id !== arrivalFlight.flight)
    .map((airport) => ({
      value: airport.id,
      label: `${airport.name}, ${airport.location}`,
    }));

  const airportArrivalList = airports
    .filter((airport) => airport.id !== departureFlight.flight)
    .map((airport) => ({
      value: airport.id,
      label: `${airport.name}, ${airport.location}`,
    }));

  const handleChangeDeparture = (event) => {
    if (event !== null) setDepartureFlight({ flight: event.value });
  };

  const handleChangeArrival = (event) => {
    if (event !== null) setArrivalFlight({ flight: event.value });
  };

  const handleChangeDepartureDate = (event) => {
    setDepartureFlightDate({ departuredate: event.target.value });
  };

  const handleChangeArrivalDate = (event) => {
    setArrivalFlightDate({ arrivaldate: event.target.value });
  };

  const handleChangeFlightType = (event) => {
    setFlightType(event.value);
  };

  const handleChangeSeatType = (event) => {
    setSeatType(event.value);
  };

  const handleChangeNumberOfSeats = (event) => {
    if (event !== null) setNumberOfSeats(event.value);
  };

  return (
    <StyledSearch className="container">
      <br />
      <Card variant="outlined">
        <StyledCardHeader title="Search for your next destination" />
        <div className="row">
          <Select
            className="col-md-3"
            name="flightType"
            defaultValue={_flightType[0]}
            options={_flightType}
            onChange={handleChangeFlightType}
          />
          <Select
            className="col-md-3"
            defaultValue={_numberOfSeats[0]}
            isClearable="true"
            name="numberOfSeats"
            options={_numberOfSeats}
            onChange={handleChangeNumberOfSeats}
          />
          <Select
            className="col-md-3"
            name="seatType"
            defaultValue={_seatType[0]}
            options={_seatType}
            onChange={handleChangeSeatType}
          />
        </div>
        <br />
        <div className="row">
          <Select
            className="col-md-6"
            placeholder="From"
            isSearchable="true"
            isClearable="true"
            name="departureAirport"
            options={airportDepartureList}
            onChange={handleChangeDeparture}
          />
          <Select
            className="col-md-6"
            placeholder="To"
            isSearchable="true"
            isClearable="true"
            isDisabled={departureFlight.flight ? false : true}
            name="arrivalAirport"
            options={airportArrivalList}
            onChange={handleChangeArrival}
          />
        </div>
        <br />
        <div className="row">
          <FaPlaneDeparture style={{ margin: "2%" }} />
          <input
            className="col-md-4"
            value={departureFlightDate.departuredate}
            type="date"
            name="departuredate"
            onChange={handleChangeDepartureDate}
          />
          {flightType === "roundtrip" && (
            <>
              <FaPlaneArrival style={{ margin: "2%" }} />
              <input
                className="col-md-4 "
                value={arrivalFlightDate.arrivaldate}
                type="date"
                name="arrivaldate"
                onChange={handleChangeArrivalDate}
              />
            </>
          )}
        </div>
        <br />
      </Card>
    </StyledSearch>
  );
};

export default Home;
