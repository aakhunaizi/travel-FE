//Components
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import FlightListData from "../FlightListData";
import { StyledTableContainer } from "./styles";
import { useState } from "react";

export default function FlightList({
  flightList,
  setflightId,
  oneway,
  type,
  setSecondDate,
}) {
  const row = flightList.map((flight) => (
    <FlightListData
      flight={flight}
      setflightId={setflightId}
      oneway={oneway}
      type={type}
      setSecondDate={setSecondDate}
    />
  ));
  return (
    <>
      <StyledTableContainer
        component={Paper}
        className="container-fluid"
        variant="outlined"
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> Flight Number</TableCell>
              <TableCell>Departure Airport</TableCell>
              <TableCell>Arrival Airport</TableCell>
              <TableCell>Airline</TableCell>
              <TableCell>Departure Date / Departure Time </TableCell>
              <TableCell>Arrival Date / Arrival Time</TableCell>
              <TableCell>Price (BD)</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{row}</TableBody>
        </Table>
      </StyledTableContainer>
    </>
  );
}
