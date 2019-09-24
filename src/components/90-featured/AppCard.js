import React from "react";
import { Card } from "react-bootstrap";
export default function AppCard(props) {
  // <img src={props.icon} width="140" />
  return (
    <Card>
      <Card.Img variant="top" src={props.icon} className="p-4" />

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.descr}</Card.Text>
      </Card.Body>
    </Card>
  );
}
