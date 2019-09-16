import React from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
export default function RoomCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <ListGroup variant="flush">
          <ListGroupItem>{props.bullet1}</ListGroupItem>
          <ListGroupItem>{props.bullet2}</ListGroupItem>
          <ListGroupItem>{props.bullet3}</ListGroupItem>
        </ListGroup>
        <a
          href="https://hotels.cloudbeds.com/reservation/IOlzSh"
          target="_blank"
        >
          <Button variant="primary">Book Now</Button>
        </a>
      </Card.Body>
    </Card>
  );
}
