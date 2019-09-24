import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
export default function SupermarketCard(props) {
  return (
    <Card style={{ width: "auto" }}>
      <Row>
        <Col xs={4}>
          <Card.Img variant="top" src={props.logo} />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle>Address:{props.subtitle}</Card.Subtitle>
            <Card.Text>{props.summary}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
