//React Imports
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

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
import CreateFlight from "../CreateAirlineFlight";
import EditFlight from "../EditAirlineFlight";

//Actions
import { fetchAirlineFlights } from "../../store/actions/airlineActions";

const AirlineFlights = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.airlineReducer.loading);
  const flights = useSelector((state) => state.airlineReducer.flights);
  const [createFlightShow, setCreateFlightShow] = useState(false);
  const [editFlightShow, setEditFlightShow] = useState(false);

  //Create Flight Modal
  const handleCreateClose = () => setCreateFlightShow(false);
  const handleCreateShow = () => setCreateFlightShow(true);

  //Edit Flight Modal
  const handleEditClose = () => setEditFlightShow(false);
  const handleEditShow = () => {
    setEditFlightShow(true);
  };

  if (loading) dispatch(fetchAirlineFlights());

  const flightData = flights.map((flight) => flight.id);

  const row = flights.map((flight) => (
    // Make into component
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
          onClick={handleEditShow}
          value={flight.id}
        >
          Edit
        </Button>
      </TableCell>
    </TableRow>
  ));

  if (loading) return <h1>Loading</h1>;
  else
    return (
      <>
        <TableContainer
          component={Paper}
          className="container-fluid"
          style={{ width: "70%", marginTop: "2%", marginBottom: "2%" }}
          variant="outlined"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2%",
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              onClick={handleCreateShow}
            >
              Add Flight
            </Button>
          </div>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell> Flight Number</TableCell>
                <TableCell>Departure Airport</TableCell>
                <TableCell>Arrival Airport</TableCell>
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
        <Modal //Add flight modal
          show={createFlightShow}
          onHide={handleCreateClose}
          style={{ marginTop: "5%" }}
          size="xl"
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Flight</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CreateFlight />
          </Modal.Body>
        </Modal>

        <Modal //Edit flight modal
          show={editFlightShow}
          onHide={handleEditClose}
          style={{ marginTop: "5%" }}
          size="xl"
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Flight</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditFlight />
          </Modal.Body>
        </Modal>
      </>
    );
};

export default AirlineFlights;
