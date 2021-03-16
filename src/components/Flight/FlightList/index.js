//Components
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import FlightListData from "../FlightListData";
import { StyledButtonContainer, StyledTableContainer } from "./styles";

export default function FlightList() {
  return (
    <>
      <StyledTableContainer
        component={Paper}
        className="container-fluid"
        variant="outlined"
      >
        <StyledButtonContainer>
          {/* <Button //For Filter
          variant="outlined"
          color="primary"
          onClick={handleCreateShow}
        >
          Filter
        </Button> */}
        </StyledButtonContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> Flight Number</TableCell>
              <TableCell>Departure Airport</TableCell>
              <TableCell>Arrival Airport</TableCell>
              <TableCell>Departure Date / Departure Time </TableCell>
              <TableCell>Arrival Date / Arrival Time</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <FlightListData />
          </TableBody>
        </Table>
      </StyledTableContainer>
    </>
  );
}
