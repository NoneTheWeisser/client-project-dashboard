import React from "react";
import {
  currencyFormatter,
  numberFormatter,
  formatPercent,
} from "../../../styles/formatters";

export default function MonthlyMediaReport({ records }) {
  if (!records || records.length === 0)
    return <p>No records match the current filters.</p>;

  return (
    <div
      className="table-container"
      style={{ maxWidth: "1400px", margin: "0 auto" }}
    >
      <h3>Monthly Media Report</h3>
      <table className="table-app table-hover table-striped media-table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Platform</th>
            <th>Total Visits</th>
            <th>Unique Visits</th>
            <th>Pageviews</th>
            <th>Social Views</th>
            <th>Avg Bounce</th>
            <th>Audience Gain</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r, i) => {
            const monthDate = r.month_date ? new Date(r.month_date) : null;

            return (
              <tr key={`${r.platform}-${r.month_date}-${i}`}>
                <td>
                  {monthDate
                    ? monthDate.toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })
                    : "-"}
                </td>
                <td>{r.platform ?? "-"}</td>
                <td>
                  {r.total_visits != null
                    ? numberFormatter.format(r.total_visits)
                    : "-"}
                </td>
                <td>
                  {r.unique_visits != null
                    ? numberFormatter.format(r.unique_visits)
                    : "-"}
                </td>
                <td>
                  {r.pageviews != null
                    ? numberFormatter.format(r.pageviews)
                    : "-"}
                </td>
                <td>
                  {r.social_views != null
                    ? numberFormatter.format(r.social_views)
                    : "-"}
                </td>
                <td>
                  {r.avg_bounce_rate != null
                    ? formatPercent(r.avg_bounce_rate)
                    : "-"}
                </td>
                <td>
                  {r.audience_gain != null
                    ? numberFormatter.format(r.audience_gain)
                    : "-"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
