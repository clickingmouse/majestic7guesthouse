import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
export default function NavBar() {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Majestic7Guesthouse</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">
            <Link smooth to="/#rooms">
              Rooms
            </Link>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <Link smooth to="/#gettingHere">
              Getting Here
            </Link>
          </Nav.Link>
          <NavDropdown title="Around Us" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Book</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            FAQ
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
