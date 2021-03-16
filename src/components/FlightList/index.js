//Components
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import FlightListData from "../FlightListData";

export default function FlightList() {
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
          {/* <Button
          variant="outlined"
          color="primary"
          onClick={handleCreateShow}
        >
          Add Flight
        </Button> */}
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
            </TableRow>
          </TableHead>
          <TableBody>
            <FlightListData />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
