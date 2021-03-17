import { useState } from "react";
import { ListGroup, Collapse, Card } from "react-bootstrap";
import ChechoutForm from "../CheckoutForm";

export default function Checkout() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div class="container mt-5">
        <ListGroup variant="flush">
          <ListGroup.Item onClick={() => setOpen(!open)}>
            Passenger 1
          </ListGroup.Item>
          <Collapse in={open}>
            <Card>
              <Card.Body>
                <ChechoutForm />
              </Card.Body>
            </Card>
          </Collapse>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
}
