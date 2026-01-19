import { useEffect } from "react";
import useStore from "../../../zustand/store.js";
import HousingKPI from "../../Housing/Charts/HousingKPI.jsx";
import HousingOccupancyBar from "../../Housing/Charts/HousingOccupancyBar.jsx";
import HousingOperationalReservesBar from "../../Housing/Charts/HousingOperationalReservesBar.jsx";
import { HousingVacancyKPI } from "../../Housing/Charts/HousingVacancyKPI.jsx";
import "./ReportsSummary.css";

export default function HousingSummary({ monthlyReports }) {
  const fetchSummaryHousing = useStore((s) => s.fetchHousingMonthlySummary);

  // Fetch data if empty
  useEffect(() => {
    if (!monthlyReports || monthlyReports.length === 0) {
      fetchSummaryHousing();
    }
  }, [monthlyReports, fetchSummaryHousing]);

  const latestMonth = [...monthlyReports].sort(
    (a, b) => new Date(b.month_start) - new Date(a.month_start)
  )[0];

  // Map KPIs
  const vacancyByBuilding = monthlyReports
    .filter((r) => r.month_start === latestMonth?.month_start)
    .map((r) => ({
      building: r.building_name,
      current: r.current_vacancies ?? 0,
      upcoming: r.upcoming_vacancies ?? 0,
    }));

  const reservesByBuilding = monthlyReports
    .filter(
      (r) =>
        new Date(r.month_start).getMonth() ===
        new Date(latestMonth?.month_start).getMonth()
    )
    .map((r) => ({
      building: r.building_name,
      operational: r.operational_reserves ?? 0,
      replacement: r.replacement_reserves ?? 0,
    }));

  return (
    <div className="summary-card housing-summary">
      <h4 className="summary-title">Housing</h4>

      {/* ---------- KPIs ---------- */}
      <div className="summary-kpis housing-kpis flex-row">
        {vacancyByBuilding.map((v) => (
          <HousingVacancyKPI
            key={v.building}
            building={v.building}
            current={v.current}
            upcoming={v.upcoming}
            className="kpi-card housing small-kpi"
          />
        ))}

        {/* {reservesByBuilding.map((b) => (
          <HousingKPI
            key={b.building}
            title={`${b.building} Reserves`}
            operational={b.operational}
            replacement={b.replacement}
            className="kpi-card housing small-kpi"
          />
        ))} */}
      </div>

      {/* ---------- Charts ---------- */}
      <div className="summary-charts-row housing-charts">
        {/* <div className="summary-chart housing">
          <HousingOccupancyBar
            records={monthlyReports}
            className="housing-occupancy-bar"
          />
        </div> */}
        <div className="summary-chart housing">
          <HousingOperationalReservesBar
            records={monthlyReports}
            className="housing-reserves-bar"
          />
        </div>
      </div>
    </div>
  );
}
