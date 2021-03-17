import { useState } from "react";
import FlightList from "../FlightList";
import { useSelector } from "react-redux";
import { fetchSecondFlights } from "../../store/actions/flightActions";
import { getFightId } from "../../store/actions/bookingActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
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

  console.log(firstFlightId, secondFlightId);

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
            <button
              className="btn btn-outline-success"
              style={{ width: "20%" }}
              onClick={() =>
                dispatch(fetchSecondFlights(flightInfo, secondDate))
              }
              disabled={firstFlightId === null ? true : false}
            >
              Search
            </button>
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
        <button
          className="btn btn-outline-success"
          style={{ width: "20%" }}
          // disabled={
          //   flightInfo.flightType.value === "oneway" && firstFlightId === null
          //     ? true
          //     : false
          // }
          onClick={handleGetIds}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
