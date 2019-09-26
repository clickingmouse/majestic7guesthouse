import React from "react";
import { Tab, Row, Col, Nav, Container } from "react-bootstrap";
import CheckInOut from "./CheckInOut";
import Facilities from "./Facilities";
import Misc from "./Misc";
import Policies from "./Policies";
export default function Faq() {
  return (
    <div style={{ minHeight: "100vh" }} className="h-100  ">
      <Container style={{ backgroundColor: "#FAFAFA", minHeight: "100vh" }}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column ">
                <Nav.Item>
                  <Nav.Link eventKey="first">Checking In / Out</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="second">Facilities</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="third">Misc</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="fourth">Policies</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <CheckInOut />
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <Facilities />
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <Misc />
                </Tab.Pane>

                <Tab.Pane eventKey="fourth">
                  <Policies />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
}
