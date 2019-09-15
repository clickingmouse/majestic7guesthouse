import React from "react";
import { Parallax, Background } from "react-parallax";
import tstAriel from "../../media/parallax/Tsim_Sha_Tsui_Ariel.jpg";
export default function TSTParallax() {
  return (
    <Parallax
      blur={0}
      bgImage={tstAriel}
      bgImageAlt="Ariel View of Tsim Sha Tsui Peninsula"
      strength={450}
    >
      <div style={{ height: "50vh" }} />
    </Parallax>
  );
}
