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

  const iconClass = open ? faAngleUp : faAngleDown;

  return (
    <>
      <div
        style={{ width: "100%" }}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="d-flex py-3"
      >
        <span className="mr-auto">{props.title}</span>
        <FontAwesomeIcon icon={iconClass} />
      </div>
      <Collapse in={open}>
        <div id="example-collapse-text">{props.text}</div>
      </Collapse>
      <hr />
    </>
  );
}
