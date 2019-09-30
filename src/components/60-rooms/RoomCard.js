import React from "react";
import {
  Container,
  Card,
  Button,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

export default function RoomCard(props) {
  return (
    <Container>
      <Card style={{ width: "auto" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <ListGroup variant="flush">
            <ListGroupItem>
              <FontAwesomeIcon icon={faPlane} />
              &emsp;
              {props.bullet1}
            </ListGroupItem>
            <ListGroupItem>
              <FontAwesomeIcon icon={faPlane} />
              &emsp;{props.bullet2}
            </ListGroupItem>
            <ListGroupItem>
              <FontAwesomeIcon icon={faPlane} />
              &emsp;{props.bullet3}
            </ListGroupItem>
          </ListGroup>
          <a
            href="https://hotels.cloudbeds.com/reservation/IOlzSh"
            target="_blank"
          >
            <Button variant="primary">Book Now</Button>
          </a>
        </Card.Body>
      </Card>
    </Container>
  );
}
