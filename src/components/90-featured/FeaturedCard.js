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
        <Link to={props.link} style={{ textDecoration: "none" }}>
          <Card.Title
            className="px-0"
            style={{ color: "black", fontSize: "1vmin" }}
          >
            {props.title}
          </Card.Title>
        </Link>

        <Link to={props.link} style={{ textDecoration: "none" }}>
          <Card.Text style={{ color: "black" }}>{props.summary}</Card.Text>
        </Link>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">by Majestic7Guesthouse</small>
      </Card.Footer>{" "}
    </Card>
  );
}
