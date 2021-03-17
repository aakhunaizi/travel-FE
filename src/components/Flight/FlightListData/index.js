//React Imports
import { useState } from "react";

//Components
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "@material-ui/core";

export default function FlightListData(props) {
  const [selected, setselected] = useState(false);
  const handelBooking = (flightId, arrivalDate) => {
    if (props.oneway === "oneway" && props.type === "inbound") {
      props.setflightId(flightId);
    } else if (props.oneway === "roundtrip" && props.type === "inbound") {
      props.setflightId(flightId);
      props.setSecondDate(arrivalDate);
    } else if (props.oneway === "roundtrip" && props.type === "outbound") {
      props.setflightId(flightId);
    }
    setselected(!selected);
  };

  return (
    <TableRow key={props.flight.id} selected={selected}>
      <TableCell component="th" scope="row">
        {props.flight.id}
      </TableCell>
      <TableCell>{props.flight.departureAirport.name}</TableCell>
      <TableCell>{props.flight.arrivalAirport.name}</TableCell>
      <TableCell>{props.flight.airline.name}</TableCell>
      <TableCell>{props.flight.departureDate}</TableCell>
      <TableCell>{props.flight.arrivalDate}</TableCell>
      <TableCell>{props.flight.price}</TableCell>
      <TableCell>
        <Button
          variant="outlined"
          color="primary"
          onClick={() =>
            handelBooking(props.flight.id, props.flight.arrivalDate)
          }
          value={props.flight.id}
        >
          Select
        </Button>
      </TableCell>
    </TableRow>
  );
}
