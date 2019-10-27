import React from "react";
import { Card, CardColumns, Container, Col, Row } from "react-bootstrap";
import AppCard from "./AppCard";
import hkg from "../../../media/apps/hkgMyFlight.png";
import mtrc from "../../../media/apps/mtr.png";
import openRice from "../../../media/apps/openRice.png";
import hkMyGuide from "../../../media/apps/hkMyGuide.png";
import hkTaxi from "../../../media/apps/hkTaxi.png";
import gogoVan from "../../../media/apps/gogoVan.png";
import lalaMove from "../../../media/apps/lalaMove.png";
import AppModal from "./AppModal";
export default function HandyApps() {
  return (
    <Container>
      <Row>
        <Col sm={9}>
          <CardColumns>
            <AppCard
              icon={hkg}
              title="HKG My Flight"
              descr="An app by the Hong Kong international airport. This app aiport related info including, floor plan, various transportation location, flight schedules... etc."
            />
            <AppCard
              icon={openRice}
              title="Open Rice"
              descr="Restaurants Yelp, seems to be popular in Asia, restaurants are categorized pretty impressively."
            />{" "}
            <AppCard
              icon={lalaMove}
              title="Lala Move"
              descr="Like its counterpart/competitor - lalamove, this app's main service is to provide help in the transportion of 'goods', obviously this app wont stand out if they do not allow courier to 'ride along'.  They reserve the right to deny service to anyone without a parcel"
            />{" "}
            <AppCard
              icon={hkTaxi}
              title="HK Taxi"
              descr="Like many places, paying an unlicensed vehicle for private personal commuting service is debatably technially illegal.  This app is an attempt to fill the 'void'.  Personally, during peak hours, app or no app, can't find a cab when you need one"
            />{" "}
            <AppCard
              icon={hkMyGuide}
              title="HK My Guide"
              descr="An app by the Hong Kong Tourism board, lots of touristy useful information, history, self guided guides, tips, ...etc"
            />{" "}
            <AppCard
              icon={mtrc}
              title="MTRC"
              descr="App from HK's mtrc (metro train), good place to lookup mtr stations, travel time, schedules, etc "
            />{" "}
            <AppCard
              icon={gogoVan}
              title="GoGo Van"
              descr="Like its counterpart/competitor - lalamove, this app's main service is to provide help in the transportion of 'goods', obviously this app wont stand out if they do not allow courier to 'ride along'.  They reserve the right to deny service to anyone without a parcel"
            />{" "}
          </CardColumns>
        </Col>

        <Col sm={3}>
          <h5>Login to Suggest Apps</h5>
          <AppModal />
          <h3>Featured Apps</h3>
          <hr />
        </Col>
      </Row>
    </Container>
  );
}
