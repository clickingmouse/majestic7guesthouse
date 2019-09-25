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
    <Container style={{ backgroundColor: "#FAFAFA" }}>
      <div>RoomFeatures</div>
      <Row className="my-3">
        <Col xs={4} sm={2}>
          <FeatureCard
            icon={<FreeWifi fill="#50c2ff" width="80%" height="auto " />}
            title="Free WiFi"
          ></FeatureCard>
        </Col>
        <Col xs={4} sm={2}>
          <FeatureCard
            icon={<AirCon width="80%" height="auto " fill="#569a35" />}
            title="Air Con"
          />
        </Col>
        <Col xs={4} sm={2}>
          <FeatureCard
            icon={<Bathroom width="80%" height="auto " fill="#efbd78" />}
            title="Bathroom"
          />
        </Col>{" "}
        <Col xs={4} sm={2}>
          <FeatureCard
            icon={<Television width="80%" height="auto " fill="#0371be" />}
            title="Television"
          />
        </Col>{" "}
        <Col xs={4} sm={2}>
          <FeatureCard
            icon={<Towel width="80%" height="auto " fill="#edf176" />}
            title="Towel"
          />
        </Col>
        <Col xs={4} sm={2}>
          <FeatureCard
            icon={<Toiletries width="80%" height="auto " fill="#d5450c" />}
            title="Toiletries"
          />
        </Col>
      </Row>

      <Row>
        <Col xs={4} sm={2}>
          <FeatureCard
            icon={<FreeMaps fill="#fb3739" width="80%" height="auto " />}
            title="Free Maps"
            color="#1565c0"
          ></FeatureCard>
        </Col>
        <Col xs={4} sm={2}>
          <FeatureCard
            icon={<HairDryer width="80%" height="auto " fill="#ecc0bc" />}
            title="Hair Dryer"
            color="#ecc0bc"
          />
        </Col>
        <Col xs={4} sm={2}>
          <FeatureCard
            icon={<RackHanger width="80%" height="auto " fill="#dd5a9c" />}
            title="Rack hanger"
            color="#1565c0"
          />
        </Col>{" "}
        <Col xs={4} sm={2}>
          <FeatureCard
            icon={<BottledWater width="80%" height="auto " fill="#7db8c4" />}
            title="Bottled Water"
            color="#1565c0"
          />
        </Col>
        <Col xs={4} sm={2}>
          <FeatureCard
            icon={<Refrigerator width="80%" height="auto " fill="#e66256" />}
            title="Refrigerator"
            color="#1565c0"
          />
        </Col>
        <Col xs={4} sm={2}>
          <FeatureCard
            icon={<ElectricKettle width="80%" height="auto " fill="#f4fb3b" />}
            title="Electric Kettle"
            color="#f4fb3b"
          />
        </Col>
      </Row>
    </Container>
  );
}
