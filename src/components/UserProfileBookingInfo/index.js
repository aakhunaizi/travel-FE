//Components

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";

function createData(
  reference,
  date,
  type,
  departure,
  arrival,
  price,
  details,
  options
) {
  return { reference, date, type, departure, arrival, price, details, options };
}

const rows = [
  createData(
    "32",
    "2020-07-05",
    "Round Trip",
    "Manama Airport",
    "Samboosa Airport",
    "128 BD",
    <Button variant="outlined" color="primary">
      Details
    </Button>,
    <Button variant="outlined" color="secondary" disabled="true">
      Cancel
    </Button>
  ),
  createData(
    "32",
    "2020-07-05",
    "Round Trip",
    "Samboosa Airport",
    "Manama Airport",
    "128 BD",
    <Button variant="outlined" color="primary">
      Details
    </Button>,
    <Button variant="outlined" color="secondary" disabled="true">
      Cancel
    </Button>
  ),
  createData(
    "158",
    "2021-03-12",
    "One Way",
    "Manama Airport",
    "Samboosa Airport",
    "92 BD",
    <Button variant="outlined" color="primary">
      Details
    </Button>,
    <Button variant="outlined" color="secondary">
      Cancel
    </Button>
  ),
];

const UserProfileBookingInfo = () => {
  return (
    <TableContainer
      component={Paper}
      className="container"
      style={{ width: "60%", marginTop: "2%" }}
      variant="outlined"
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> Reference</TableCell>
            <TableCell>Booking Date </TableCell>
            <TableCell>Flight Type</TableCell>
            <TableCell>Departure Airport</TableCell>
            <TableCell>Arrival Airport</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Details</TableCell>
            <TableCell>Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.reference}
              </TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.departure}</TableCell>
              <TableCell>{row.arrival}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.details}</TableCell>
              <TableCell>{row.options}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserProfileBookingInfo;
