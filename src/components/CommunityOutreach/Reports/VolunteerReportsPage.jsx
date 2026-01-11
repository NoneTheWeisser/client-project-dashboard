import React, { useState } from "react";
import VolunteerWeeklyReport from "./VolunteerWeeklyReport";
import VolunteerMonthlyReport from "./VolunteerMonthlyReport";
import VolunteerByLocationReport from "./VolunteerByLocationReport";
import VolunteerMonthlyByLocationReport from "./VolunteerMonthlyByLocationReport";
import DepartmentHeader from "../../DesignComponents/DepartmentHeader";
import { NavLink } from "react-router-dom";

export default function VolunteerReportsPage() {
  const [activeTab, setActiveTab] = useState("weekly");

  const renderReport = () => {
    switch (activeTab) {
      case "weekly":
        return <VolunteerWeeklyReport />;
      case "monthly":
        return <VolunteerMonthlyReport />;
      case "by-location":
        return <VolunteerByLocationReport />;
      case "monthly-by-location":
        return <VolunteerMonthlyByLocationReport />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="hub-container">
        <DepartmentHeader
          title="Community Outreach"
          actions={
            <>
              <NavLink
                to="/outreach"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Data Entry
              </NavLink>
              <NavLink
                to="/outreach/reports"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Reports
              </NavLink>
            </>
          }
        />
        <div className="tabs">
          <button onClick={() => setActiveTab("weekly")}>Weekly</button>
          <button onClick={() => setActiveTab("monthly")}>Monthly</button>
          <button onClick={() => setActiveTab("by-location")}>
            By Location
          </button>
          <button onClick={() => setActiveTab("monthly-by-location")}>
            Monthly by Location
          </button>
        </div>

        <div className="report-container">{renderReport()}</div>
      </div>
    </div>
  );
}
