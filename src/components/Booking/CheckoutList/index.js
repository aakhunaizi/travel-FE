import { useState } from "react";
import { ListGroup, Collapse, Card } from "react-bootstrap";
import ChechoutForm from "../CheckoutForm";

export default function ChcekoutList({ passengerNumber }) {
  const [open, setOpen] = useState(passengerNumber === 1 ? true : false);

  return (
    <>
      <ListGroup.Item onClick={() => setOpen(!open)}>
        Passenger {passengerNumber}
      </ListGroup.Item>
      <Collapse in={open}>
        <Card>
          <Card.Body>
            <ChechoutForm />
          </Card.Body>
        </Card>
      </Collapse>
    </>
  );
}
