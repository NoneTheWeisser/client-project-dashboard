import { useState } from "react";
import { NavLink } from "react-router-dom";
import HRWeeklyReport from "./Reports/HRWeeklyReport";
import HRMonthlyReport from "./Reports/HRMonthlyReport";
import HRStatsReport from "./Reports/HRStatsReport";
import "./HR.css";

export default function HRReports() {
  const [activeTab, setActiveTab] = useState("weekly");
  const [filters, setFilters] = useState({
    year: new Date().getFullYear(),
    search: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

  return (
    <div className="hub-container hr">
      {/* Department Header */}
      <div className="department-header">
        <h2>Human Resources - Reports & Analytics</h2>
        <div className="department-actions">
          <NavLink to="/hr" end>
            Department Home
          </NavLink>
          <NavLink to="/hr/reports" className="active">
            Reports
          </NavLink>
        </div>
      </div>

      {/* Tabs + Filters Toolbar */}
      <div className="tabs-toolbar">
        <div className="tabs-container">
          <button
            className={`tab ${activeTab === "weekly" ? "active" : ""}`}
            onClick={() => setActiveTab("weekly")}
          >
            Weekly Reports
          </button>
          <button
            className={`tab ${activeTab === "monthly" ? "active" : ""}`}
            onClick={() => setActiveTab("monthly")}
          >
            Monthly Reports
          </button>
          <button
            className={`tab ${activeTab === "stats" ? "active" : ""}`}
            onClick={() => setActiveTab("stats")}
          >
            Statistics & Charts
          </button>
        </div>

        <div className="filters-container compact">
          <div className="filter-group">
            <label htmlFor="year">Year</label>
            <select
              id="year"
              name="year"
              value={filters.year}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Report Content */}
      <div className="report-content">
        {activeTab === "weekly" && <HRWeeklyReport filters={filters} />}
        {activeTab === "monthly" && <HRMonthlyReport filters={filters} />}
        {activeTab === "stats" && <HRStatsReport filters={filters} />}
      </div>
    </div>
  );
}
