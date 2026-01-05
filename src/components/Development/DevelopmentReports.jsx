import React, { useState } from "react";
import DonationReporting from "./Reports/DonationReporting";
import EventsReporting from "./Reports/EventsReporting";

export default function DevelopmentReports() {
  const [activeTab, setActiveTab] = useState("donations");

  return (
    <>
      <h2>Development Reports</h2>

      <div className="tabs">
        <button
          className={activeTab === "donations" ? "active" : ""}
          onClick={() => setActiveTab("donations")}
        >
          Donations
        </button>
        <button
          className={activeTab === "events" ? "active" : ""}
          onClick={() => setActiveTab("events")}
        >
          Events
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "donations" && <DonationReporting />}
        {activeTab === "events" && <EventsReporting />}
      </div>
    </>
  );
}


// import React from "react";
// import DonationReporting from "./Reports/DonationReporting";
// import EventsReporting from "./Reports/EventsReporting";

// export default function DevelopmentReports() {
//   return (
//     <>
//       <h2>Development Reports</h2>

//       <section style={{ marginBottom: "2rem" }}>
//         <DonationReporting />
//       </section>
//       {/* todo - should these two be tabs? */}
//       <section>
//         <EventsReporting />
//       </section>
//     </>
//   );
// }
