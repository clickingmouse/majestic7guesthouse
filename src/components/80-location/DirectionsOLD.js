import React from "react";
import { Accordion, Card } from "react-bootstrap";
import TransportCardL from "./TransportCardL";
import TransportCardR from "./TransportCardR";

import bus from "../../media/transport/cityflyer-a21-bus.jpg";
import train from "../../media/transport/Airport-Express-Train.jpg";
import cab from "../../media/transport/HK-Taxi.jpg";

export default function Directions() {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Via Air
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            Hello! I'm the body
            <TransportCardL
              photo={bus}
              title="City Flyer Bus"
              subtitle1="A21/N21 Airport Bus - HKD33.00"
              subtitle2="( Preferred & Recommended)"
              text="Our advice is to take the Cityflyer bus. It's MUCH cheaper and
            has beautiful views (especially if you can snag one of the front
            seats on the upper deck). The Cityflyer bus costs HK$33 and takes 1
            hour and 22 minutes; whereas, the Airport Express Train costs about
            HK $100 (and takes about 1 hour) and a taxi costs about HK$270 (and
            takes about 40 minutes)."
            />{" "}
            <TransportCardR
              photo={train}
              title="Airport Express"
              subtitle1="Airport Express - HKD100.00-105.00"
              subtitle2="( !Recommended)"
              text="Unless your destination is right next to one of the train stations I would think twice before riding the Airport Express. The rail system serves the 7.8 million population of Hong Kong, and in order to better manage the crowd, there' a bit of a walk between the Airport Shuttle line and the other train lines."
            />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
          Via Land!
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
        <Accordion.Toggle as={Card.Header} eventKey="1">
          Via Sea!
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
