import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import LoginModal from "../../auth/LoginModal";
import RegisterModal from "../../auth/RegisterModal";
import Logout from "../../auth/Logout";
import PropTypes from "prop-types";
function NavBar(props) {
  const { isAuthenticated, user } = props.auth;
  const authLinks = (
    <Fragment>
      <span className="navbar-text mr-3">
        <strong>{user ? `welcome ${user.name}` : null}</strong>
      </span>
      <Logout />
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <RegisterModal />
      <LoginModal />
    </Fragment>
  );

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
            <NavDropdown.Item href="#" disable>
              Breakfast
            </NavDropdown.Item>
            <NavDropdown.Item href="#" disable>
              Late Night
            </NavDropdown.Item>
            <NavDropdown.Item href="#" disable>
              Supermarkets
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#" disable>
              Tidbits
            </NavDropdown.Item>
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
          {isAuthenticated ? authLinks : guestLinks}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

Navbar.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(NavBar);
