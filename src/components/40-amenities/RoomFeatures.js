import React from "react";
import FeatureCard from "./FeatureCard";
import { ReactComponent as FreeWifi } from "../../media/amenities/freewifi.svg";
import freeWifiIcon from "../../media/amenities/freewifi.svg";
import { ReactComponent as AirCon } from "../../media/amenities/aircon.svg";
import { ReactComponent as Bathroom } from "../../media/amenities/bathroom.svg";
import { ReactComponent as Television } from "../../media/amenities/television.svg";
import { ReactComponent as Towel } from "../../media/amenities/towel.svg";
import { ReactComponent as Toiletries } from "../../media/amenities/toiletries.svg";
import { ReactComponent as FreeMaps } from "../../media/amenities/maps.svg";
import { ReactComponent as HairDryer } from "../../media/amenities/hairdryer.svg";
import { ReactComponent as RackHanger } from "../../media/amenities/coathangers.svg";
import { ReactComponent as BottledWater } from "../../media/amenities/bottledwater.svg";
import { ReactComponent as Refrigerator } from "../../media/amenities/refrigerator.svg";
import { ReactComponent as ElectricKettle } from "../../media/amenities/kettle.svg";
import { Container, Row, Col } from "react-bootstrap";
export default function RoomFeatures() {
  return (
    <Container>
      <div>RoomFeatures</div>
      <Row>
        <Col xs={4} sm={2}>
          <FeatureCard
            icon={<FreeWifi fill="#1565c0" width="auto" height="auto " />}
            title="Free WiFi"
          ></FeatureCard>
        </Col>
        <Col xs={4} sm={2}>
          <FeatureCard
            icon={<AirCon width="auto" height="auto " />}
            title="Air Con"
          />
        </Col>
        <Col xs={4} sm={2}>
          <FeatureCard
            icon={<Bathroom width="auto" height="auto " />}
            title="Bathroom"
          />
        </Col>{" "}
        <Col xs={4} sm={2}>
          <FeatureCard
            icon={<Television width="auto" height="auto " />}
            title="Television"
          />
        </Col>{" "}
        <Col xs={4} sm={2}>
          <FeatureCard
            icon={<Towel width="auto" height="auto " />}
            title="Towel"
          />
        </Col>
        <Col xs={4} sm={2}>
          <FeatureCard
            icon={<Toiletries width="auto" height="auto " />}
            title="Toiletries"
          />
        </Col>
      </Row>

      <Row>
        <Col xs={4} sm={2}>
          <FeatureCard
            icon={<FreeMaps fill="#1565c0" width="auto" height="auto " />}
            title="Free Maps"
            color="#1565c0"
          ></FeatureCard>
        </Col>
        <Col xs={4} sm={2}>
          <FeatureCard
            icon={<HairDryer width="auto" height="auto " />}
            title="Hair Dryer"
            color="#1565c0"
          />
        </Col>
        <Col xs={4} sm={2}>
          <FeatureCard
            icon={<RackHanger width="auto" height="auto " />}
            title="Rack hanger"
            color="#1565c0"
          />
        </Col>{" "}
        <Col xs={4} sm={2}>
          <FeatureCard
            icon={<BottledWater width="auto" height="auto " />}
            title="Bottled Water"
            color="#1565c0"
          />
        </Col>
        <Col xs={4} sm={2}>
          <FeatureCard
            icon={<Refrigerator width="auto" height="auto " />}
            title="Refrigerator"
            color="#1565c0"
          />
        </Col>
        <Col xs={4} sm={2}>
          <FeatureCard
            icon={<ElectricKettle width="auto" height="auto " />}
            title="Electric Kettle"
            color="#1565c0"
          />
        </Col>
      </Row>
    </Container>
  );
}
