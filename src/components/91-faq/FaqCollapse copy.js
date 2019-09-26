import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleDown,
  faAngleDoubleRight,
  faAngleUp,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";
export default function FaqCollapse(props) {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const iconClass = open ? faAngleUp : faAngleDown;
  const iconClass1 = open1 ? faAngleDoubleDown : faAngleDoubleRight;
  const iconClass2 = open2 ? faAngleDoubleDown : faAngleDoubleRight;

  return (
    <>
      <Button
        style={{ width: "100%" }}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="d-flex"
      >
        <span className="mr-auto">{props.title}</span>
        <FontAwesomeIcon icon={iconClass} />
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">{props.text}</div>
      </Collapse>
    </>
  );
}
