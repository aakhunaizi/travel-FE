//React Imports
import { useState } from "react";
import { useSelector } from "react-redux";

//Components
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "@material-ui/core";

export default function FlightListData() {
  const flights = useSelector((state) => state.flightReducer.inbound);
  const [flightId, setFlightId] = useState();
  const handleChange = (flightId) => {
    setFlightId(flightId);
  };

  const row = flights.map((flight) => (
    <TableRow key={flight.id}>
      <TableCell component="th" scope="row">
        {flight.id}
      </TableCell>
      <TableCell>{flight.departureAirport.name}</TableCell>
      <TableCell>{flight.arrivalAirport.name}</TableCell>
      <TableCell>{flight.departureDate}</TableCell>
      <TableCell>{flight.arrivalDate}</TableCell>
      <TableCell>{flight.price}</TableCell>
      <TableCell>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => handleChange(flight.id)}
          value={flight.id}
        >
          Book
        </Button>
      </TableCell>
    </TableRow>
  ));
  return row;
}
