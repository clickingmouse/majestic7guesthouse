import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
export default function FeaturedCard(props) {
  return (
    <Card>
      <Button>
        <Link to="/handy-apps">
          <Card.Img variant="top" src={props.pic} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.summary}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">by Majestic7Guesthouse</small>
          </Card.Footer>{" "}
        </Link>
      </Button>
    </Card>
  );
}
