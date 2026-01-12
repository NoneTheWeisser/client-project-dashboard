import React from "react";
import "../CommunityOutreach.css";

export default function ReportsToolbar({
  year,
  setYear,
  location,
  setLocation,
  search,
  setSearch,
  activeReport,
  setActiveReport,
  YEAR_OPTIONS = [],
  LOCATION_OPTIONS = [],
}) {
  return (
    <div className="outreach-toolbar">
      <div className="toolbar-left">
        {/* Year filter */}
        <div className="filter-group">
          <label>Year:</label>
          <select value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">All</option>
            {YEAR_OPTIONS.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        {/* Location filter */}
        <div className="filter-group">
          <label>Location:</label>
          <select value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="">All</option>
            {LOCATION_OPTIONS.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Search */}
        <div className="filter-group">
          <label>Search:</label>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="toolbar-right">
        <button
          className={activeReport === "weekly" ? "primary" : "secondary"}
          onClick={() => setActiveReport("weekly")}
        >
          Weekly
        </button>
        <button
          className={activeReport === "monthly" ? "primary" : "secondary"}
          onClick={() => setActiveReport("monthly")}
        >
          Monthly
        </button>
        <button
          className={activeReport === "by-location" ? "primary" : "secondary"}
          onClick={() => setActiveReport("by-location")}
        >
          By Location
        </button>
        <button
          className={activeReport === "monthly-by-location" ? "primary" : "secondary"}
          onClick={() => setActiveReport("monthly-by-location")}
        >
          Monthly by Location
        </button>
      </div>
    </div>
  );
}
