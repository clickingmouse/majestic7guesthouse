import React from "react";
import { Card, CardColumns, Container } from "react-bootstrap";
import AppCard from "./AppCard";
import hkg from "../../media/apps/hkgMyFlight.png";
import mtrc from "../../media/apps/mtr.png";
import openRice from "../../media/apps/openRice.png";
import hkMyGuide from "../../media/apps/hkMyGuide.png";
import hkTaxi from "../../media/apps/hkTaxi.png";
import gogoVan from "../../media/apps/gogoVan.png";
import lalaMove from "../../media/apps/lalaMove.png";

export default function HandyApps() {
  return (
    <Container>
      <CardColumns>
        <AppCard
          icon={hkg}
          title="HKG My Flight App"
          descr="An app by the Hong Kong international airport. This app aiport related info including, floor plan, various transportation location, flight schedules... etc."
        />
        <AppCard
          icon={openRice}
          title="Open Rice App"
          descr="Restaurants Yelp, seems to be popular in Asia, restaurants are categorized pretty impressively."
        />{" "}
        <AppCard
          icon={lalaMove}
          title="Lala Move App"
          descr="like its counterpart/competitor - lalamove, this app's main service is to provide help in the transportion of 'goods', obviously this app wont stand out if they do not allow courier to 'ride along'.  They reserve the right to deny service to anyone without a parcel"
        />{" "}
        <AppCard
          icon={hkTaxi}
          title="HK Taxi App"
          descr="like many places, paying an unlicensed vehicle for private personal commuting service is debatably technially illegal.  This app is an attempt to fill the 'void'.  Personally, during peak hours, app or no app, can't find a cab when you need one"
        />{" "}
        <AppCard
          icon={hkMyGuide}
          title="HK My Guide App"
          descr="An app by the Hong Kong Tourism board, lots of touristy useful information, history, self guided guides, tips, ...etc"
        />{" "}
        <AppCard
          icon={mtrc}
          title="MTRC App"
          descr="App from HK's mtrc (metro train), good place to lookup mtr stations, travel time, schedules, etc "
        />{" "}
        <AppCard
          icon={gogoVan}
          title="GoGo Van App"
          descr="like its counterpart/competitor - lalamove, this app's main service is to provide help in the transportion of 'goods', obviously this app wont stand out if they do not allow courier to 'ride along'.  They reserve the right to deny service to anyone without a parcel"
        />{" "}
      </CardColumns>
    </Container>
  );
}
