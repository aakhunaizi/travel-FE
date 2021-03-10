//Components
import { useState } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";

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
    <div
      className="container"
      style={{ width: "30%", border: "2px solid black", marginTop: "15%" }}
    >
      <Select
        className="react-select-container"
        placeholder="From"
        isSearchable="true"
        isClearable="true"
        name="departureAirport"
        options={airportDepartureList}
        onChange={handleChangeDeparture}
      />

      <Select
        className="react-select-container"
        placeholder="To"
        isSearchable="true"
        isClearable="true"
        isDisabled={departureFlight.flight ? false : true}
        name="arrivalAirport"
        options={airportArrivalList}
        onChange={handleChangeArrival}
      />
      <Select
        className="react-select-container"
        name="flightType"
        defaultValue={_flightType[0]}
        options={_flightType}
        onChange={handleChangeFlightType}
      />
      <Select
        className="react-select-container"
        name="seatType"
        defaultValue={_seatType[0]}
        options={_seatType}
        onChange={handleChangeSeatType}
      />
      <Select
        className="react-select-container"
        placeholder="Number of Passengers"
        isClearable="true"
        name="numberOfSeats"
        options={_numberOfSeats}
        onChange={handleChangeNumberOfSeats}
      />
      <label>Departure Date</label>
      <input
        className="form-control"
        value={departureFlightDate.departuredate}
        type="date"
        name="departuredate"
        onChange={handleChangeDepartureDate}
      />
      {flightType === "roundtrip" && (
        <>
          <label>Arrival Date</label>
          <input
            className="form-control"
            value={arrivalFlightDate.arrivaldate}
            type="date"
            name="arrivaldate"
            onChange={handleChangeArrivalDate}
          />
        </>
      )}
    </div>
  );
};

export default Home;
