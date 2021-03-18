//React Imports
import { useState } from "react";

//Components
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";

export default function FlightListData(props) {
  const handelBooking = (flightId, arrivalDate) => {
    if (props.oneway === "oneway" && props.type === "inbound") {
      props.setflightId(flightId);
    } else if (props.oneway === "roundtrip" && props.type === "inbound") {
      props.setflightId(flightId);
      props.setSecondDate(arrivalDate);
    } else if (props.oneway === "roundtrip" && props.type === "outbound") {
      props.setflightId(flightId);
    }
    toast.info(`Flight Number ${flightId} selected`);
  };

  return (
    <>
      <ToastContainer autoClose={5000} closeOnClick />
      <TableRow
        key={props.flight.id}
      >
        <TableCell component="th" scope="row" className="text-center">
          {props.flight.id}
        </TableCell>
        <TableCell>{props.flight.departureAirport.name}</TableCell>
        <TableCell>{props.flight.arrivalAirport.name}</TableCell>
        <TableCell>{props.flight.airline.name}</TableCell>
        <TableCell>{props.flight.departureDate}</TableCell>
        <TableCell>{props.flight.arrivalDate}</TableCell>
        <TableCell className="text-center">{props.flight.price}</TableCell>
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
    </>
  );
}
