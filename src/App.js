import React from "react";

import NavBar from "../src/components/01-nav/NavBar";
import TSTParallax from "../src/components/10-parallax/TSTParallax";
import AboutUs from "../src/components/20-about-us/AboutUs";
import QuarryBayParallax from "../src/components/30-parallax/QuarryBayParallax";
import RoomFeatures from "../src/components/40-amenities/RoomFeatures";
import ChoiHungParallax from "../src/components/50-parallax/ChoiHungParallax";
import Rooms from "../src/components/60-rooms/Rooms";
import FerryParallax from "../src/components/70-parallax/FerryParallax";
//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <TSTParallax />
      <AboutUs />
      <QuarryBayParallax />
      <RoomFeatures />
      <ChoiHungParallax />
      <Rooms />
      <FerryParallax />
    </div>
  );
}

export default App;
