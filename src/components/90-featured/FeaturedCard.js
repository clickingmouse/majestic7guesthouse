import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
export default function FeaturedCard(props) {
  return (
    <Card>
      <Link to="/handy-apps" style={{ textDecoration: "none" }}>
        <Card.Img variant="top" src={props.pic} />{" "}
      </Link>
      <Card.Body>
        <Card.Title style={{ color: "black" }}>{props.title}</Card.Title>
        <Card.Text style={{ color: "black" }}>{props.summary}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">by Majestic7Guesthouse</small>
      </Card.Footer>{" "}
    </Card>
  );
}
