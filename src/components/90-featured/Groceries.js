import React from "react";
import GroceryMap from "./GroceryMap";
import { Container, Row, Col } from "react-bootstrap";
import wellcome from "../../media/supermarkets/wellcome-logo.jpg";
import parknshop from "../../media/supermarkets/parknshop-logo.png";
import vanguard from "../../media/supermarkets/vanguard-logo.png";
import GroceriesMapContainer from "./GroceriesMapContainer";
import SupermarketCard from "./SupermarketCard";
export default function Groceries() {
  return (
    <Container>
      <Row>
        <Col sm={7}>
          <GroceriesMapContainer />
        </Col>
        <Col>
          <SupermarketCard
            logo={wellcome}
            title="Wellcome"
            subtitle="53-54 Kimberley Rd"
            summary="24 hours!"
          />
          <SupermarketCard
            logo={vanguard}
            title="Vanguard"
            subtitle="4 Prat Ave"
            summary="closest 24 hours depot!"
          />{" "}
          <SupermarketCard
            logo={parknshop}
            title="Park N Shop"
            subtitle="Basement, Manson House, Nathan Rd"
            summary="Literally just around the corner!"
          />
        </Col>
      </Row>
    </Container>
  );
}
