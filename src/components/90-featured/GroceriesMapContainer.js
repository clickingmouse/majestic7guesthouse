import React from "react";
import GroceryMap from "./GroceryMap";
import { Container } from "react-bootstrap";
const parknshopGeoCoords = { lat: 22.298201, lng: 114.172474 };
const wellcomeGeoCoords = { lat: 22.3009595, lng: 114.1742452 };
const vanguardGeoCoords = { lat: 22.298507, lng: 114.174177 };
export default function GroceriesMapContainer() {
  return (
    <div style={{ height: "50vw" }}>
      <GroceryMap
        id="supermarkets-map"
        destinationcoords={wellcomeGeoCoords}
        options={{
          center: {
            lat: 22.2995,
            lng: 114.17228420963512
          },
          zoom: 17
        }}
        onMapLoad={map => {
          var marker = new window.google.maps.Marker({
            position: {
              lat: 22.298606176308525,
              lng: 114.17228420963512
            },
            map: map,
            title: "Majestic House"
          });
          var parknshopMarker2 = new window.google.maps.Marker({
            icon: {
              url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            },
            position: parknshopGeoCoords,
            map: map,
            title: "Park n'shop"
          });

          var wellcomMarker = new window.google.maps.Marker({
            icon: {
              url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
            },
            position: wellcomeGeoCoords,
            map: map,
            title: "Wellcome"
          });

          var vanguardMarker2 = new window.google.maps.Marker({
            icon: {
              url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
            },
            position: vanguardGeoCoords,
            map: map,
            title: "Vanguard !"
          });
        }}
      />
    </div>
  );
}
