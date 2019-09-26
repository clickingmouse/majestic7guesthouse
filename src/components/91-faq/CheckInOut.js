import React from "react";
import FaqCollapse from "./FaqCollapse";
export default function CheckInOut() {
  return (
    <div height="auto">
      <center>
        <strong>Checking In / Out</strong>
      </center>
      <hr />
      <FaqCollapse
        title="What time is Check-in & Check-out?"
        text="Check-in: 2pm~
      Check-out: ~11am
      Please inform the reception if you wish to retain your room beyond this time. Extension will be given depending on the availability. If the room is available, normal tariff will be charged. On failure of the guest to vacate the room on expiry or period the management shall have the right to remove the guest and his/her belongings from the room occupied by the Guest."
      />
      <FaqCollapse
        title="Can I Check-in early?"
        text="If your arrive before the check-in time, please let know! We cannot gaurantee that your room will be ready but we are (most likely) able to store your luggage for you."
      />
      <FaqCollapse
        title="Can I have a late Check-out?"
        text="Maybe. An extension will be given depending on the availability; please contact us for more information."
      />
      <FaqCollapse
        title="Can I store my luggage?"
        text="Yes, at the guest's sole risk as to loss or damage from any cause.
        However, you must make prior arrangements with reception!"
      />
      <FaqCollapse
        title="What payment options do you accept?"
        text="We accept (and prefer) cash (Hong Kong Dollars).
        We can accept credit cards, but please note that there is a surcharge for all credit card transactions. (This surcharge is applied because credit card companies charge us!)
        We don't accept personal cheques."
      />
      <FaqCollapse
        title="Is smoking allowed somewhere on the premises?"
        text="By law there is no absolutely no smoking indoors.
        Smoking is permited on the balcony located just outside the guesthouse entrance."
      />
    </div>
  );
}
