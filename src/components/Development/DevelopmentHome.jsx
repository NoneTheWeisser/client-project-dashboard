import { Link } from "react-router-dom";
import React from "react";
import DevelopmentReporting from "../Development/DevelopmentReporting";
import EventsReporting from "../Development/EventsReporting";

export default function DevelopmentHome() {
  const sections = [
    { path: "/development/donors", label: "Donors" },
    { path: "/development/donations", label: "Donations" },
    { path: "/development/events", label: "Upcoming Events" },
  ];

  return (
    <div>
      <h1>Development Dashboard</h1>
      <ul>
        {sections.map((s) => (
          <li key={s.path}>
            <Link to={s.path}>{s.label}</Link>
          </li>
        ))}
        {/* <li>
          <Link to="/development/reports">Reports</Link>
        </li> */}
      </ul>
      <DevelopmentReporting />
      <EventsReporting  />
    </div>
  );
}
