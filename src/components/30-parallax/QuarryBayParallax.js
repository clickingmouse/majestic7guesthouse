import React from "react";
import { Parallax, Background } from "react-parallax";
import quarryBay from "../../media/parallax/quarrybay.jpg";
export default function QuarryBayParallax() {
  return (
    <Parallax
      blur={0}
      bgImage={quarryBay}
      bgImageAlt="Quarry Bay Land Mark"
      strength={450}
    >
      <div style={{ height: "50vh" }} />
    </Parallax>
  );
}
