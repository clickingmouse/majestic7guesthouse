import React from "react";
import { Card, Button, Image } from "react-bootstrap";
import file from "../../media/amenities/freewifi.svg";
//<Image src={props.icon} style={{ width: "100%" }} />
// <img src={props.icon} fill={props.color} />
//<Card.Text>{props.title}</Card.Text>
//<Card.Img variant="top" src={file} fillColor="#007bff" />
//<Image src={props.icon} style={{ fill: props.color }} />

export default function FeatureCard(props) {
  console.log(props.icon);
  return (
    <Card
      className="shadow p-3 mb-5 bg-white rounded"
      style={{ width: "auto", textAlign: "center" }}
    >
      <div className="pt-2">{props.icon}</div>

      <Card.Body className="px-0 pb-0 pt-2">
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}
