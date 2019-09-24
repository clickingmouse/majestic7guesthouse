import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

import TransportCardL from "./TransportCardL";
import TransportCardR from "./TransportCardR";

import bus from "../../media/transport/cityflyer-a21-bus.jpg";
import train from "../../media/transport/Airport-Express-Train.jpg";
import cab from "../../media/transport/HK-Taxi.jpg";
import "./fromAirport.css";
export default function FromAirport() {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle
            className="panel-title"
            anchorClass="panel-toggle"
            as={Card.Header}
            variant="link"
            eventKey="0"
          >
            City Flyer Bus
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
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
            />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
            Airport Express Train!
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
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
        <Card.Header>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
            The Cab
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>For the first high risk exciting adventurers!</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
