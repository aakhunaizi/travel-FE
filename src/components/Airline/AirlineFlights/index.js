//React Imports
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

//Components
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, CircularProgress } from "@material-ui/core";
import { Modal } from "react-bootstrap";
import CreateFlight from "../CreateAirlineFlight";
import EditFlight from "../EditAirlineFlight";
import {
  Loading,
  StyledButtonContainer,
  StyledModal,
  StyledTableContainer,
} from "./styles";
import { Helmet } from "react-helmet";

//Actions
import { fetchAirlineFlights } from "../../../store/actions/airlineActions";

const AirlineFlights = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.airlineReducer.loading);
  const flights = useSelector((state) => state.airlineReducer.flights);
  const [createFlightShow, setCreateFlightShow] = useState(false);
  const [editFlightShow, setEditFlightShow] = useState(false);
  const [editFlightId, seteditFlightId] = useState();

  //Create Flight Modal
  const handleCreateClose = () => setCreateFlightShow(false);
  const handleCreateShow = () => setCreateFlightShow(true);

  //Edit Flight Modal
  const handleEditClose = () => setEditFlightShow(false);
  const handleEditShow = (flightId) => {
    seteditFlightId(flightId);
    setEditFlightShow(true);
  };

  if (loading) dispatch(fetchAirlineFlights());

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
      <TableCell>{flight.economySeats}</TableCell>
      <TableCell>{flight.businessSeats}</TableCell>
      <TableCell>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => handleEditShow(flight.id)}
          value={flight.id}
        >
          Edit
        </Button>
      </TableCell>
    </TableRow>
  ));

  if (loading)
    return (
      <Loading>
        <CircularProgress color="primary" />
      </Loading>
    );
  else
    return (
      <>
        <Helmet>
          <title>Flights</title>
        </Helmet>

        <StyledTableContainer
          component={Paper}
          className="container-fluid"
          variant="outlined"
        >
          <StyledButtonContainer>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleCreateShow}
            >
              Add Flight
            </Button>
          </StyledButtonContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell> Flight Number</TableCell>
                <TableCell>Departure Airport</TableCell>
                <TableCell>Arrival Airport</TableCell>
                <TableCell>Departure Date / Departure Time </TableCell>
                <TableCell>Arrival Date / Arrival Time</TableCell>
                <TableCell>Price (BD)</TableCell>
                <TableCell>Economy Seats</TableCell>
                <TableCell>Business Seats</TableCell>
                <TableCell>Options</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{row}</TableBody>
          </Table>
        </StyledTableContainer>
        <StyledModal //Add flight modal
          show={createFlightShow}
          onHide={handleCreateClose}
          size="xl"
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Flight</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CreateFlight />
          </Modal.Body>
        </StyledModal>
        <StyledModal //Edit flight modal
          show={editFlightShow}
          onHide={handleEditClose}
          size="xl"
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Flight</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditFlight flightEditId={editFlightId} />
          </Modal.Body>
        </StyledModal>
      </>
    );
};

export default AirlineFlights;
