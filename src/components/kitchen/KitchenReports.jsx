import { useState } from "react";
import { NavLink } from "react-router-dom";
import DepartmentHeader from "../DesignComponents/DepartmentHeader";
import KitchenWeeklyReport from "./Reports/KitchenWeeklyReport.jsx";
import KitchenMonthlyReport from "./Reports/KitchenMonthlyReport.jsx";
import KitchenStatsReport from "./Reports/KitchenStatsReport.jsx";
import "./Kitchen.css";

export default function KitchenReports() {
  const [activeTab, setActiveTab] = useState("weekly");
  const [filters, setFilters] = useState({
    year: "",
    search: "",
  });

  const tabs = {
    weekly: <KitchenWeeklyReport filters={filters} />,
    monthly: <KitchenMonthlyReport filters={filters} />,
    stats: <KitchenStatsReport filters={filters} />,
  };

  return (
    <div className="hub-container kitchen">
      {/* Page Header */}
      <DepartmentHeader
        title="Kitchen Reports & Analytics"
        actions={
          <>
            <NavLink
              to="/kitchen"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Department Home
            </NavLink>
            <NavLink
              to="/kitchen/reports"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Reports
            </NavLink>
          </>
        }
      />

      {/* Tabs + Filters */}
      <div className="reports-header kitchen">
        {/* Tabs */}
        <div className="report-tabs">
          <button
            className={activeTab === "weekly" ? "tab active" : "tab"}
            onClick={() => setActiveTab("weekly")}
          >
            Weekly Report
          </button>

          <button
            className={activeTab === "monthly" ? "tab active" : "tab"}
            onClick={() => setActiveTab("monthly")}
          >
            Monthly Report
          </button>

          <button
            className={activeTab === "stats" ? "tab active" : "tab"}
            onClick={() => setActiveTab("stats")}
          >
            Statistics & Charts
          </button>
        </div>

        {/* Filters */}
        <div className="reports-toolbar kitchen">
          <div className="toolbar-group">
            <label>
              Filter by Year
              <select
                value={filters.year}
                onChange={(e) =>
                  setFilters({ ...filters, year: e.target.value })
                }
              >
                <option value="">All Years</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
              </select>
            </label>

            <label>
              Search
              <input
                type="text"
                placeholder="Search notes..."
                value={filters.search}
                onChange={(e) =>
                  setFilters({ ...filters, search: e.target.value })
                }
              />
            </label>
          </div>
        </div>
      </div>

      {/* Active Report */}
      <div className="report-content">{tabs[activeTab]}</div>
    </div>
  );
}
