import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Map from "./Map";
import Directions from "./Directions";
export default function Location() {
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
      <Container id="gettingHere" style={{ backgroundColor: "#FAFAFA" }}>
        <div>here we are</div>
        <Row>
          <Col>
            <Map
              id="myMap"
              options={{
                center: { lat: 22.298606176308525, lng: 114.17228420963512 },
                zoom: 14
              }}
              onMapLoad={map => {
                var marker = new window.google.maps.Marker({
                  position: {
                    lat: 22.298606176308525,
                    lng: 114.17228420963512
                  },
                  map: map,
                  title: "Hello !"
                });
              }}
            />
          </Col>
          <Col>
            DIRECTIONS
            <hr />
            <Directions />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
