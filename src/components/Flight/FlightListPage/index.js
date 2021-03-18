//React Imports
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

//Actions
import { fetchSecondFlights } from "../../../store/actions/flightActions";
import {
  getFightId,
  changeFlightType,
} from "../../../store/actions/bookingActions";

//Components
import FlightList from "../FlightList";
import { StyledButton } from "./styles";

export default function FlightListPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const flightList = useSelector((state) => state.flightReducer.inbound);

  const flightListOutbound = useSelector(
    (state) => state.flightReducer.outbound
  );

  const flightInfo = useSelector((state) => state.bookingReducer.flightInfo);

  const [firstFlightId, setFirstflightId] = useState(null);
  const [secondFlightId, setSecondflightId] = useState();
  const [secondDate, setSecondDate] = useState();

  const handleGetIds = () => {
    if (flightInfo.flightType.value === "oneway") {
      dispatch(getFightId([firstFlightId], history));
    } else if (
      flightInfo.flightType.value === "roundtrip" &&
      flightListOutbound.length === 0
    ) {
      dispatch(changeFlightType());
      dispatch(getFightId([firstFlightId], history));
    } else if (flightInfo.flightType.value === "roundtrip") {
      dispatch(getFightId([firstFlightId, secondFlightId], history));
    }
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row">
          <FlightList
            flightList={flightList}
            setflightId={setFirstflightId}
            oneway={flightInfo.flightType.value}
            type={"inbound"}
            setSecondDate={setSecondDate}
          />
        </div>
        {flightInfo.flightType.value === "roundtrip" &&
        firstFlightId !== null ? (
          <div className="row d-flex justify-content-md-center">
            <StyledButton
              className="btn btn-outline-success"
              onClick={() =>
                dispatch(fetchSecondFlights(flightInfo, secondDate))
              }
              disabled={firstFlightId === null ? true : false}
            >
              Search
            </StyledButton>
          </div>
        ) : (
          ""
        )}
        {flightInfo.flightType.value === "roundtrip" &&
        flightListOutbound.length !== 0 ? (
          <>
            <div className="row">
              <FlightList
                flightList={flightListOutbound}
                setflightId={setSecondflightId}
                oneway={flightInfo.flightType.value}
                type={"outbound"}
              />
            </div>
          </>
        ) : (
          ""
        )}
        <div className="row d-flex justify-content-md-center">
          {flightInfo.flightType.value === "oneway" ? (
            <StyledButton
              className="btn btn-outline-success m-5"
              onClick={handleGetIds}
              data-mdb-ripple-color="dark"
            >
              Checkout
            </StyledButton>
          ) : (
            <StyledButton
              className={`btn ${
                flightListOutbound.length === 0
                  ? "btn-outline-danger"
                  : "btn-outline-success"
              } m-5`}
              onClick={
                flightListOutbound.length === 0 ? handleShow : handleGetIds
              }
              data-mdb-ripple-color="dark"
            >
              {flightListOutbound.length === 0 ? "Confirm" : "Checkout"}
            </StyledButton>
          )}
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="lg" className="mt-5">
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div>
              <p>Unfortunately there is no roundtrip on this date</p>
            </div>
          </div>

          <div className="row d-flex justify-content-center">
            <button
              className="btn btn-outline-success m-5"
              onClick={handleGetIds}
              data-mdb-ripple-color="dark"
            >
              Book Oneway Trip
            </button>
            <Link
              to="/"
              className="btn btn-outline-danger m-5"
              onClick={handleGetIds}
              data-mdb-ripple-color="dark"
            >
              Go Back
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
