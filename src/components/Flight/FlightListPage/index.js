//React Imports
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

//Actions
import { fetchSecondFlights } from "../../../store/actions/flightActions";
import { getFightId } from "../../../store/actions/bookingActions";

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
    } else if (flightInfo.flightType.value === "roundtrip") {
      dispatch(getFightId([firstFlightId, secondFlightId], history));
    }
  };
  return (
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
      {flightInfo.flightType.value === "roundtrip" ? (
        <>
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
        <StyledButton
          className="btn btn-outline-success"
          onClick={handleGetIds}
        >
          Checkout
        </StyledButton>
      </div>
    </div>
  );
}
