import React, { useState } from "react";
import { Accordion, Card, Button, Collapse } from "react-bootstrap";
import TransportCardL from "./TransportCardL";
import TransportCardR from "./TransportCardR";
import FromAirport from "./FromAirport";
import bus from "../../media/transport/cityflyer-a21-bus.jpg";
import train from "../../media/transport/Airport-Express-Train.jpg";
import cab from "../../media/transport/HK-Taxi.jpg";
import {
  faAngleDoubleDown,
  faAngleDoubleRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Directions() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const iconClass = open ? faAngleDoubleDown : faAngleDoubleRight;
  const iconClass1 = open1 ? faAngleDoubleDown : faAngleDoubleRight;
  const iconClass2 = open2 ? faAngleDoubleDown : faAngleDoubleRight;
  return (
    <>
      <Button
        style={{ width: "100%" }}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Via Air
        <FontAwesomeIcon icon={iconClass} />
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <FromAirport />
        </div>
      </Collapse>
      <Button
        style={{ width: "100%" }}
        onClick={() => setOpen1(!open1)}
        aria-controls="example-collapse-text1"
        aria-expanded={open1}
      >
        Via land
      </Button>{" "}
      <Collapse in={open1}>
        <div id="example-collapse-text1">Comming Soon!</div>
      </Collapse>{" "}
      <Button
        style={{ width: "100%" }}
        onClick={() => setOpen2(!open2)}
        aria-controls="example-collapse-text2"
        aria-expanded={open2}
      >
        Via Sea
        <FontAwesomeIcon icon={iconClass2} />
      </Button>
      <Collapse in={open2}>
        <div id="example-collapse-text2">Coming Soon!</div>
      </Collapse>
    </>
  );
}
