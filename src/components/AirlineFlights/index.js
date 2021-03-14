//React Imports
import { useDispatch, useSelector } from "react-redux";

//Components

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { Modal } from "react-bootstrap";

//Actions
import { fetchAirlineFlights } from "../../store/actions/airlineActions";
import { useState } from "react";

const AirlineFlights = () => {
  const dispatch = useDispatch();
  const flights = useSelector((state) => state.airlineReducer.flights);
  flights.length === 0 && dispatch(fetchAirlineFlights());

  const row = flights.map((flight) => (
    <TableRow key={flight.id}>
      <TableCell component="th" scope="row">
        {flight.id}
      </TableCell>
      <TableCell>{flight.departureDate}</TableCell>
      <TableCell>{flight.arrivalDate}</TableCell>
      <TableCell>{flight.price}</TableCell>
      <TableCell>{flight.economySeats}</TableCell>
      <TableCell>{flight.businessSeats}</TableCell>
      <TableCell>
        <Button variant="outlined" color="primary">
          Edit
        </Button>
      </TableCell>
    </TableRow>
  ));

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <TableContainer
        component={Paper}
        className="container"
        style={{ width: "60%", marginTop: "2%" }}
        variant="outlined"
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> Flight Number</TableCell>
              <TableCell>Departure Date / Departure Time </TableCell>
              <TableCell>Arrival Date / Arrival Time</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Economy Seats</TableCell>
              <TableCell>Business Seats</TableCell>
              <TableCell>Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{row}</TableBody>
        </Table>
      </TableContainer>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}
      >
        <Button variant="outlined" color="primary" onClick={handleShow}>
          Add Flight
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} style={{ marginTop: "5%" }}>
        <Modal.Header closeButton>
          <Modal.Title>Add Flight</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Placeholder for add flight form</h1>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AirlineFlights;