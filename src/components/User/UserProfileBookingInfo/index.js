//Components
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { StyledTableContainer } from "./styles";

const UserProfileBookingInfo = ({ booking }) => {
  const row = booking.map((book) => (
    <TableRow key={book.id}>
      <TableCell component="th" scope="row">
        {book.id}
      </TableCell>
      <TableCell>{new Date(book.createdAt).toLocaleDateString()}</TableCell>
      <TableCell>
        {book.flights.length === 2 ? "Round trip" : "One way"}
      </TableCell>
      <TableCell>{book.flights[0].airline.name}</TableCell>
      <TableCell>{book.flights[0].departureAirport.name}</TableCell>
      <TableCell>{book.flights[0].departureDate}</TableCell>
      <TableCell>{book.flights[0].arrivalAirport.name}</TableCell>
      <TableCell>{book.flights[0].arrivalDate}</TableCell>
      <TableCell>{book.flights[0].price} BD</TableCell>
      <TableCell>
        <Button variant="outlined" color="secondary" disabled="true">
          Cancel
        </Button>
      </TableCell>
    </TableRow>
  ));

  return (
    <StyledTableContainer
      component={Paper}
      className="container-fluid"
      variant="outlined"
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> Reference</TableCell>
            <TableCell>Booking Date </TableCell>
            <TableCell>Flight Type</TableCell>
            <TableCell>Airline</TableCell>
            <TableCell>Departure Airport</TableCell>
            <TableCell>Departure Date/Time</TableCell>
            <TableCell>Arrival Airport</TableCell>
            <TableCell>Arrival Date/Time</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{row}</TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default UserProfileBookingInfo;
