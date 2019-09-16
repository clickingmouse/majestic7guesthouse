import React from "react";
import { Parallax } from "react-parallax";
import ferry from "../../media/parallax/ferry02.jpg";

export default function FerryParallax() {
  return (
    <Parallax
      blur={0}
      bgImage={ferry}
      bgImageAlt="Colorful Ferry"
      strength={450}
    >
      <div style={{ height: "50vh" }} />
    </Parallax>
  );
}
