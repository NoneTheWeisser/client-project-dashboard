import { useEffect } from "react";
import useStore from "../../../zustand/store";

export default function MonthlyMediaReport() {
  const { monthlyReport, fetchMonthlyMediaReport, loadingMediaReports } =
    useStore();

  useEffect(() => {
    fetchMonthlyMediaReport();
  }, [fetchMonthlyMediaReport]);

  if (loadingMediaReports) return <p>Loading monthly report...</p>;

  return (
    <>
      <h3>Monthly Media Report</h3>
      <div className="table-container" style={{ maxWidth: "100%" }}>
        <table className="table-app table-hover table-striped">
          <thead>
            <tr>
              <th>Month</th>
              <th>Platform</th>
              <th>Total Visits</th>
              <th>Unique</th>
              <th>Pageviews</th>
              <th>Social Views</th>
              <th>Avg Bounce</th>
              <th>Audience Gain</th>
            </tr>
          </thead>
          <tbody>
            {monthlyReport.map((r) => (
              <tr key={`${r.platform}-${r.month_date}`}>
                <td>{r.month_date.slice(0, 7)}</td>
                <td>{r.platform}</td>
                <td>{r.total_visits}</td>
                <td>{r.unique_visits}</td>
                <td>{r.pageviews}</td>
                <td>{r.social_views}</td>
                <td>{r.avg_bounce_rate ?? ""}</td>
                <td>{r.audience_gain ?? ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
