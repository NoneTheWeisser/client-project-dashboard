import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useStore from "../../zustand/store";
import HousingMonthlySummary from "./HousingMonthlySummary.jsx";
import HousingMonthlyTable from "./HousingMonthlyTable.jsx";
import DepartmentHeader from "../DesignComponents/DepartmentHeader";
import HousingReportsToolbar from "./HousingReportsToolbar";
import HousingKPI from "./Charts/HousingKPI.jsx";
import HousingOccupancyBar from "./Charts/HousingOccupancyBar.jsx";

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

  // Compute KPIs (most recent month)
  const mostRecent = [...reportData].sort(
    (a, b) => new Date(b.month_start) - new Date(a.month_start)
  )[0];

  const kpis = mostRecent
    ? [
        {
          title: "Avg Occupancy %",
          value: `${mostRecent.occupancy_percent ?? 0}%`,
        },
        {
          title: "Operational Reserves",
          value: `$${mostRecent.operational_reserves?.toLocaleString() ?? 0}`,
        },
        {
          title: "Replacement Reserves",
          value: `$${mostRecent.replacement_reserves?.toLocaleString() ?? 0}`,
        },
        {
          title: "Current Vacancies",
          value: mostRecent.current_vacancies ?? 0,
        },
      ]
    : [];

  // ---------------- KPI Calculations ----------------
  const lastMonthData = reportData[0]; // most recent month
  const last6Months = reportData.slice(0, 6); // last 6 months for averages

  // Average occupancy over last month
  const avgOccupancy = lastMonthData
    ? Number(lastMonthData.occupancy_percent ?? 0)
    : 0;

  // Total current vacancies (sum across buildings)
  const totalCurrentVacancies = lastMonthData
    ? reportData
        .filter(
          (r) =>
            new Date(r.month_start).getMonth() ===
            new Date(lastMonthData.month_start).getMonth()
        )
        .reduce((sum, r) => sum + (r.current_vacancies ?? 0), 0)
    : 0;

  // Total upcoming vacancies
  const totalUpcomingVacancies = lastMonthData
    ? reportData
        .filter(
          (r) =>
            new Date(r.month_start).getMonth() ===
            new Date(lastMonthData.month_start).getMonth()
        )
        .reduce((sum, r) => sum + (r.upcoming_vacancies ?? 0), 0)
    : 0;

  // Operational reserves
  const totalOperationalReserves = lastMonthData
    ? reportData
        .filter(
          (r) =>
            new Date(r.month_start).getMonth() ===
            new Date(lastMonthData.month_start).getMonth()
        )
        .reduce((sum, r) => sum + (r.operational_reserves ?? 0), 0)
    : 0;

  // Replacement reserves
  const totalReplacementReserves = lastMonthData
    ? reportData
        .filter(
          (r) =>
            new Date(r.month_start).getMonth() ===
            new Date(lastMonthData.month_start).getMonth()
        )
        .reduce((sum, r) => sum + (r.replacement_reserves ?? 0), 0)
    : 0;

  return (
    <div className="hub-container">
      {/* Page Header */}
      <DepartmentHeader
        title="North Campus Housing Reports"
        actions={
          <>
            <NavLink
              to="/housing"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Data Entry
            </NavLink>
            <NavLink
              to="/housing/reports"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Reports
            </NavLink>
          </>
        }
      />

      <div className="dashboard-container housing">
        <div className="charts-row housing">
          {/* ---------------- Occupancy Bar Chart ---------------- */}
          <div className="chart-column housing">
            <HousingOccupancyBar records={reportData} />
          </div>

          {/* ---------------- KPI Column ---------------- */}
          <div className="kpi-column housing">
            {kpis.map((kpi) => (
              <HousingKPI key={kpi.title} title={kpi.title} value={kpi.value} />
            ))}

            {/* Optional additional KPIs */}
            <HousingKPI
              title="Current Vacancies"
              value={reportData.reduce(
                (sum, r) => sum + Number(r.current_vacancies || 0),
                0
              )}
            />
            <HousingKPI
              title="Upcoming Vacancies"
              value={reportData.reduce(
                (sum, r) => sum + Number(r.upcoming_vacancies || 0),
                0
              )}
            />
          </div>
        </div>
      </div>

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
