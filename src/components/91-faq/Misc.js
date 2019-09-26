import React from "react";
import FaqCollapse from "./FaqCollapse";
export default function Misc() {
  return (
    <div>
      <center>
        <strong> Misc</strong>
      </center>
      <hr />
      <FaqCollapse
        title="What languages do you speak?"
        text="We have native Cantonese, native English and native Tagalog speakering staff, but we can also accomodate Mandarin speakers."
      />
      <FaqCollapse
        title="Can I bring my pet?"
        text="No pets are allowed within the premises."
      />
      <FaqCollapse
        title="Where is the nearest post office?"
        text="Please see the Other helpful tidbits page."
      />
      <FaqCollapse
        title="Where is the nearest laundromat"
        text="Please see the Other helpful tidbits page."
      />
      <FaqCollapse
        title="Where can I pick up toiletries?"
        text="We provide shampoo, conditioner, soap, a toothbrush and toothpaste in each room. If you require additional toiletries, there is a Watson's across the street.
        Watson's Address: Shop 5, G/F & Basement, Hang Seng Bank Building, 18 Carnarvon Road, Tsim Sha Tsui, Hong Kong
        Hours: Daily, 9am-11pm"
      />
      <FaqCollapse
        title="Do you accept walk-ins?"
        text="Yes but based on availability. It is very strongly encouraged that you make a book in advanced! Contact Us now!"
      />
      <FaqCollapse
        title="Are children allowed?"
        text="Children under 3 years-old are NOT allowed. No exceptions.
        A guest who brings a child (3 year-old and above) takes full responsibility over the safety, well-being and noise-level of the child. Limit 1 child per room. Prior notification is required.
        There is no room for an extra bed.
        Majestic7Guesthouse takes no responsibility over the safety of the child and reserves right to evict you (without refund) if your child causes a disturbance to other guests."
      />
    </div>
  );
}
