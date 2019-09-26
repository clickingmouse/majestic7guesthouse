import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div>
      <Container
        style={{ display: "flex", backgroundColor: "#424242" }}
        className="py-3"
      >
        <span className="mr-auto" style={{ color: "white" }}>
          &copy; {new Date().getFullYear()} Majestic7Guesthouse{" "}
        </span>
        <a href="https://www.facebook.com/majestic7guesthouse/" target="_blank">
          <FontAwesomeIcon icon={faFacebook} size="4x" fill="blue" />
        </a>
      </Container>
    </div>
  );
}
