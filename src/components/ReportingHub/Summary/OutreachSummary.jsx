import VolunteerKPI from "../../CommunityOutreach/Reports/VolunteerKPI";
import MonthlyVolunteerYoYChart from "../../CommunityOutreach/Charts/MonthlyVolunteerYoYChart";
import useStore from "../../../zustand/store";
import { useEffect } from "react";

export default function OutreachSummary({ monthlyReports }) {
  const fetchVolunteerMonthlyReports = useStore(
    (state) => state.fetchVolunteerMonthlyReports
  );

  // Trigger fetch if monthlyReports is empty
  useEffect(() => {
    if (!monthlyReports || monthlyReports.length === 0) {
      fetchVolunteerMonthlyReports();
    }
  }, [monthlyReports, fetchVolunteerMonthlyReports]);

   // Get latest month for display
  const latestMonth = monthlyReports[monthlyReports.length - 1];
  const monthName = latestMonth
    ? new Date(latestMonth.month_start).toLocaleString("default", { month: "long" })
    : "";

  return (
    <div className="summary-card outreach">
      <h4 className="summary-title">Community Outreach</h4>

      <div className="summary-kpis summary-kpis-outreach">
        <VolunteerKPI
          title={`Total ${monthName} Volunteers`}
          monthlyReports={monthlyReports}
          valueField="total_volunteers"
          color="var(--brand-primary)"
        />
        <VolunteerKPI
          title={`${monthName} Software Signups`}
          monthlyReports={monthlyReports}
          valueField="total_signups"
          color="green"
        />
      </div>

      <div className="summary-chart">
        <h5 className="chart-title">Monthly Volunteers — Last 6 Months</h5>
        <MonthlyVolunteerYoYChart
          reports={monthlyReports}
          height={180}
          compact
        />
      </div>
    </div>
  );
}
