import React from "react";

import NavBar from "../src/components/01-nav/NavBar";
import TSTParallax from "../src/components/10-parallax/TSTParallax";
import AboutUs from "../src/components/20-about-us/AboutUs";
import QuarryBayParallax from "../src/components/30-parallax/QuarryBayParallax";

//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <TSTParallax />
      <AboutUs />
      <QuarryBayParallax />
    </div>
  );
}

export default App;
