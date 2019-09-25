import React from "react";
import { Container, Nav, Tabs, Tab, Row, Col } from "react-bootstrap";
import RoomCard from "./RoomCard";

import budget from "../../media/rooms/budget.jpg";
import single from "../../media/rooms/single.jpg";
import double from "../../media/rooms/double.png";
import twin from "../../media/rooms/twin.png";
import quadruple from "../../media/rooms/quadruple.jpg";
import quintet from "../../media/rooms/family.jpg";

export default function Rooms() {
  return (
    <React.Fragment>
      <span
        style={{
          marginTop: "-54px",
          display: "block",
          visibility: "hidden",
          position: "relatives",
          height: "54px"
        }}
      />
      <Container id="rooms" style={{ backgroundColor: "#FAFAFA" }}>
        <Tabs
          justify
          defaultActiveKey="solo"
          id="uncontrolled-tab-example"
          className="mt-2"
        >
          <Tab eventKey="solo" title="solo">
            <br />
            <Container>
              <Row>
                <Col sm={4}>
                  <RoomCard
                    image={budget}
                    title="Budget (no window)"
                    bullet1="Best Value"
                    bullet2="1 pax"
                    bullet3="1 x standard twin bed"
                  />
                </Col>
                <Col sm={4}>
                  <RoomCard
                    image={single}
                    title="Budget (no window)"
                    bullet1="Most Popular"
                    bullet2="1 pax"
                    bullet3="1 x standard twin bed"
                  />
                </Col>
                <Col sm={4}>
                  <RoomCard
                    image={double}
                    title="Double Room"
                    bullet1="Most Favorite"
                    bullet2="1-2 pax"
                    bullet3="1 x small double bed"
                  />
                </Col>
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="duet" title="duet">
            <br />
            <Container>
              <Row>
                <Col sm={4}>
                  <RoomCard
                    image={double}
                    title="Double Room"
                    bullet1="Most Favorite"
                    bullet2="1-2 pax"
                    bullet3="1 x small double bed"
                  />
                </Col>
                <Col sm={4}>
                  <RoomCard
                    image={twin}
                    title="Twin Room"
                    bullet1="Best Seller"
                    bullet2="1-2 pax"
                    bullet3="2 x standard twin beds"
                  />
                </Col>
                <Col sm={4}>
                  <RoomCard
                    image={quadruple}
                    title="Quadruple"
                    bullet1="Most Economical"
                    bullet2="1-4 pax"
                    bullet3="2 x small double beds"
                  />
                </Col>
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="Family" title="Family">
            <br />
            <Container>
              <Row>
                <Col sm={4}>
                  <RoomCard
                    image={quadruple}
                    title="Quadruple"
                    bullet1="Most Economical"
                    bullet2="1-4 pax"
                    bullet3="2 x small double beds"
                  />
                </Col>
                <Col sm={4}>
                  <RoomCard
                    image={quintet}
                    title="Family"
                    bullet1="Great for groups"
                    bullet2="1-5 pax"
                    bullet3="
                  1 x bunk bed; 1 x small double"
                  />
                </Col>
              </Row>
            </Container>
          </Tab>
        </Tabs>
      </Container>
    </React.Fragment>
  );
}
