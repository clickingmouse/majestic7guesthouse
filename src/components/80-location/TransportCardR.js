import React from "react";
import { Card, Row, Col, Container, Accordion, Button } from "react-bootstrap";

export default function TransportCard(props) {
  return (
    <Card style={{ width: "auto" }}>
      <Row noGutters>
        <Col px-0>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle>{props.subtitle1}</Card.Subtitle>
          </Card.Body>
        </Col>
        <Col sm={5}>
          <Card.Img variant="top" src={props.photo} width="100%" />
        </Col>
      </Row>
      <Card.Body>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
