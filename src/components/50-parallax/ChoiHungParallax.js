import React from "react";
import { Parallax, Background } from "react-parallax";
import choiHung from "../../media/parallax/choihung.jpg";
export default function ChoiHungParallax() {
  return (
    <Parallax
      blur={0}
      bgImage={choiHung}
      bgImageAlt="Quarry Bay Land Mark"
      strength={450}
    >
      <div style={{ height: "50vh" }} />
    </Parallax>
  );
}
