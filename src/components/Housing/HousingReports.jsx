import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useStore from "../../zustand/store";
import HousingMonthlySummary from "./HousingMonthlySummary.jsx";
import HousingMonthlyTable from "./HousingMonthlyTable.jsx";
import DepartmentHeader from "../DesignComponents/DepartmentHeader";
import HousingReportsToolbar from "./HousingReportsToolbar";

export default function HousingReports() {
  const fetchMonthlyHousing = useStore(
    (state) => state.fetchHousingMonthlyReport
  );
  const fetchSummaryHousing = useStore(
    (state) => state.fetchHousingMonthlySummary
  );
  const reportData = useStore((state) => state.housingMonthlyReport);
  const loadingHousingReports = useStore(
    (state) => state.loadingHousingReports
  );

  // Toolbar state
  const [year, setYear] = useState("");
  const [building, setBuilding] = useState("");
  const [search, setSearch] = useState("");

  // Active report state: "table" or "summary"
  const [activeReport, setActiveReport] = useState("table");

  // Fetch data on mount
  useEffect(() => {
    fetchMonthlyHousing();
    fetchSummaryHousing();
  }, [fetchMonthlyHousing, fetchSummaryHousing]);

  // Clear filters and reset report
  const handleClear = () => {
    setYear("");
    setBuilding("");
    setSearch("");
    setActiveReport("table"); // default to table
  };

  // Filter records for Monthly Table
  const filteredRecords = reportData.filter((r) => {
    const date = r.month_start ? new Date(r.month_start) : null;
    if (year && date && date.getFullYear() !== Number(year)) return false;
    if (building && r.building_name !== building) return false;
    if (search) {
      const term = search.toLowerCase();
      const combined = `${r.building_name ?? ""} ${
        r.notes ?? ""
      }`.toLowerCase();
      if (!combined.includes(term)) return false;
    }
    return true;
  });

  return (
    <div className="hub-container">
      {/* Page Header */}
      <DepartmentHeader
        title="North Campus Housing Reports"
        actions={
          <>
            <NavLink to="/housing" end className={({ isActive }) => (isActive ? "active" : "")}>
              Data Entry
            </NavLink>
            <NavLink to="/housing/reports" className={({ isActive }) => (isActive ? "active" : "")}>
              Reports
            </NavLink>
          </>
        }
      />

      {/* Toolbar */}
      <HousingReportsToolbar
        reportData={reportData}
        year={year}
        setYear={setYear}
        building={building}
        setBuilding={setBuilding}
        search={search}
        setSearch={setSearch}
        activeReport={activeReport}
        setActiveReport={setActiveReport}
        onClear={handleClear}
      />

      {/* Report content */}
      <div style={{ marginTop: "1rem" }}>
        {loadingHousingReports ? (
          <p>Loading report…</p>
        ) : activeReport === "table" ? (
          filteredRecords.length === 0 ? (
            <p>No records match the current filters.</p>
          ) : (
            <HousingMonthlyTable records={filteredRecords} />
          )
        ) : (
          <HousingMonthlySummary />
        )}
      </div>
    </div>
  );
}
