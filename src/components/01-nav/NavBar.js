import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
export default function NavBar() {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand href="/">Majestic7Guesthouse</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#rooms" style={{ textDecoration: "none" }}>
            <Link
              smooth
              to="/#rooms"
              style={{ textDecoration: "none", color: "#fafafa" }}
            >
              Rooms
            </Link>
          </Nav.Link>
          <Nav.Link href="#gettingHere">
            <Link
              smooth
              to="/#gettingHere"
              style={{ textDecoration: "none", color: "#fafafa" }}
            >
              Getting Here
            </Link>
          </Nav.Link>
          <NavDropdown
            title={
              <span style={{ textDecoration: "none", color: "#fafafa" }}>
                Around Us
              </span>
            }
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Breakfast</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Late Night</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Supermarkets</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Tidbits</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link
            href="https://hotels.cloudbeds.com/reservation/IOlzSh"
            target="_blank"
            style={{ textDecoration: "none", color: "#fafafa" }}
          >
            Book
          </Nav.Link>
          <Nav.Link eventKey={2} href="#faq">
            <Link
              to="/faq"
              style={{ textDecoration: "none", color: "#fafafa" }}
            >
              FAQ
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
