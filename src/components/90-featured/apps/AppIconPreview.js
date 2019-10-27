import React from "react";
import { Image } from "react-bootstrap";
export default function AppIconPreview(props) {
  console.log(props);
  return (
    <div>
      <Image src={props.icon.fileBuffer} thumbnail />
    </div>
  );
}

//<p>{props.icon.file.name}</p>
