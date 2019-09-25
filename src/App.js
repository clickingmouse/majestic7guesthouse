import React from "react";
//import { BrowserRouter as Route, Router, Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "../src/components/01-nav/NavBar";
import TSTParallax from "../src/components/10-parallax/TSTParallax";
import AboutUs from "../src/components/20-about-us/AboutUs";
import QuarryBayParallax from "../src/components/30-parallax/QuarryBayParallax";
import RoomFeatures from "../src/components/40-amenities/RoomFeatures";
import ChoiHungParallax from "../src/components/50-parallax/ChoiHungParallax";
import Rooms from "../src/components/60-rooms/Rooms";
import FerryParallax from "../src/components/70-parallax/FerryParallax";
import Location from "../src/components/80-location/Location";
import Featured from "../src/components/90-featured/Featured";
import HandyApps from "../src/components/90-featured/HandyApps";
import Groceries from "../src/components/90-featured/Groceries";
//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#E1F5FE" }}>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={TSTParallax} />
      <Route exact path="/" component={AboutUs} />
      <Route exact path="/" component={QuarryBayParallax} />
      <Route exact path="/" component={RoomFeatures} />
      <Route exact path="/" component={ChoiHungParallax} />
      <Route exact path="/" component={Rooms} />
      <Route exact path="/" component={FerryParallax} />
      <Route exact path="/" component={Location} />
      <Route exact path="/" component={Featured} />
      <Route exact path="/handy-apps" component={HandyApps} />
      <Route exact path="/supermarkets" component={Groceries} />
    </div>
  );
}

export default App;
