import React from "react";
import FaqCollapse from "./FaqCollapse";
export default function CheckInOut() {
  return (
    <div>
      <center>
        <strong> Policies</strong>
      </center>
      <hr />
      <FaqCollapse title="1. Tarriff" text="TBA" />
      <FaqCollapse title="2. Deposit / Prepayment" text="TBA" />
      <FaqCollapse title="3. Cancellation" text="TBA" />
      <FaqCollapse title="4. Settlement of Bills" text="TBA" />
      <FaqCollapse
        title="5. Company's Lien on Guest Luggage & Belongings"
        text="TBA"
      />
      <FaqCollapse title="Departure" text="TBA" />
      <FaqCollapse title="Luggage Storage" text="TBA" />
      <FaqCollapse title="Guests' Belongings" text="TBA" />
      <FaqCollapse title="Pets" text="TBA" />
      <FaqCollapse title="Hazardous Goods" text="TBA" />
      <FaqCollapse title="Damage to Property" text="TBA" />
      <FaqCollapse title="Managemenet's Rights" text="TBA" />
      <FaqCollapse
        title="Relationship between Management and Guest"
        text="TBA"
      />
      <FaqCollapse
        title="Government rules and regulations and application of laws"
        text="TBA"
      />
      <FaqCollapse title="" text="TBA" />
    </div>
  );
}
