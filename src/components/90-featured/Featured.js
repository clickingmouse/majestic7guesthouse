import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, CardDeck, Card, Button } from "react-bootstrap";
import FeaturedCard from "./FeaturedCard";
import apps from "../../media/featured/apps.png";
import grocery from "../../media/featured/supermarket.jpg";
import breakfast from "../../media/featured/breakfast.jpg";
import siuyeh from "../../media/featured/siuyeh.jpg";

export default function Featured() {
  return (
    <div>
      <hr />
      <Container>
        <CardDeck>
          <FeaturedCard
            title="Handy Apps"
            summary="When in Rome, use as the romans. Although some apps are
                globally recognizeds, some apps do have their niche locally."
            pic={apps}
          />

          <FeaturedCard
            title="Nearby Supermarkets"
            summary="Usually the first thing after airport and check-in is to head
            off to restock one's supplies, often in a foreign land without
            your the familiar Safeway, Carrefour, or Tesco, its easy to lose
            one bearings. Here are some options to help travellers off their
            feet"
            pic={grocery}
          />

          <FeaturedCard
            title="Breakfast for the early bird"
            summary=" Hong Kong is also known as the city of the night, the city
            doesn't wake up till 10:30 AM. It's not uncommon to see a coffee
            house not open at nine; Here are some morning options..."
            pic={breakfast}
          />

          <Card>
            <Card.Img variant="top" src={siuyeh} />
            <Card.Body>
              <Card.Title>Siu yeh</Card.Title>
              <Card.Text>
                Siu yeh (Chinese: 宵夜 / 消夜; pinyin: Xiāoyè), also known as
                yexiao (夜宵; pinyin: yèxiāo), is a late night meal in the food
                culture of Hong Kong, Taiwan, and some parts of southern
                mainland China. It comes after dinner, and is similar to supper.
                Mealtime may start from about 9pm onwards until 4am, which would
                be early morning yum cha time. It can range anywhere from a
                snack to a full-fledged meal. For people working late night
                shifts, siu yeh is also associated with their post-midnight
                meals.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">by Majestic7Guesthouse</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Container>
    </div>
  );
}
