import React from "react";
import FaqCollapse from "./FaqCollapse";
export default function Facilities() {
  return (
    <div>
      <center>
        <strong> Facilities</strong>
      </center>
      <hr />
      <FaqCollapse
        title="How do I get to the guesthouse"
        text="When you get to Majestic House, go up to the 7th floor. The guest house is flat 7D, and it is the first flat that you will see! If you are checking in, ring the doorbell and one of us will let you in. (Let us know ahead of time of your check-in ETA to help ensure that we are there!)
        If you area already checked-in, you will be given a card that you can use to get into the flat.
        Please note, the building has an outer door that is closed/locked from 11pm to 6am daily. A key is required to unlock this door but you will be given this key at check-in. A fine will be imposed on those that forget or lose this key!"
      />
      <FaqCollapse
        title="Is there Wi-Fi?"
        text="Yes. The Wi-Fi is complimentary to our guests, and the SSN and password will be given to you at check-in. Please contact reception if you have any problems!If your arrive before the check-in time, please let know! We cannot gaurantee that your room will be ready but we are (most likely) able to store your luggage for you."
      />
      <FaqCollapse
        title="Can I have a late Check-out?"
        text="Maybe. An extension will be given depending on the availability; please contact us for more information."
      />
      <FaqCollapse
        title="Are there 'quiet times'?"
        text="Yes. Respect your fellow guests and do not make excessive noise past 10pm."
      />
      <FaqCollapse
        title="Is there Washer / Dryer"
        text="No, there is no washer or dryer in the building but there are laundromats nearby. Please see the Other helpful tidbits page.."
      />
      <FaqCollapse
        title="Is there air conditioning?"
        text="Yes. There is an air conditioning unit in each room (that you can control!) as well as the reception."
      />
      <FaqCollapse
        title="Is there a curfew / do I need to be home by a certain - time?"
        text="No. There is no curfew. But remember that the outside door to the building is closed/locked from 11pm to 6am; however, you will be given a key that will unlock this gate. You need this key to get in!!!"
      />{" "}
      <FaqCollapse
        title="Is there air conditioning?"
        text="Yes. There is an air conditioning unit in each room (that you can control!) as well as the reception."
      />{" "}
      <FaqCollapse
        title="Are outside visitors allowed?"
        text="Yes. There is an air conditioning unit in each room (that you can control!) as well as the reception."
      />{" "}
      <FaqCollapse
        title="Is there a fridge?"
        text="Yes. There is an air conditioning unit in each room (that you can control!) as well as the reception."
      />{" "}
      <FaqCollapse
        title="Is there hot water?"
        text="Yes. There is an air conditioning unit in each room (that you can control!) as well as the reception."
      />{" "}
      <FaqCollapse
        title="I am quite tall, will your beds accomodate me? What is the length of your beds"
        text="Yes. Our beds do not have a 'foot-board' and most are not 'flush' against the wall.

        Each bed is about 190-200cm in length; and most have at least 1 foot between the end of the bed and the wall.
        
        If you have any concerns, please don't hesistate to reach out!"
      />{" "}
      <FaqCollapse
        title="Do you clean the rooms or bathrooms everyday"
        text="No, not everyday!

        We run this guesthouse ourselves and do not have all the 'bells and whistles' as a full-service hotel! Before you check in, we fully clean the rooms and bathrooms, change the linens, give fresh towels, empty the trash, etc. but we do not do this every day.
        
        If you need a new towel, just ask us!"
      />
    </div>
  );
}
