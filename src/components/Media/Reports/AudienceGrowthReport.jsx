import { useEffect } from "react";
import useStore from "../../../zustand/store";

export default function AudienceGrowthReport() {
  const audienceGrowthReport = useStore((state) => state.audienceGrowthReport);
  const fetchAudienceGrowthReport = useStore((state) => state.fetchAudienceGrowthReport);
  const loadingMediaReports = useStore((state) => state.loadingMediaReports);

  useEffect(() => {
    fetchAudienceGrowthReport();
  }, [fetchAudienceGrowthReport]);

  if (loadingMediaReports) return <p>Loading audience growth...</p>;

  return (
    <>
      <h2>Audience Growth</h2>
      <div className="table-container" style={{ maxWidth: "100%" }}>
        <table className="table-app table-hover table-striped">
          <thead>
            <tr>
              <th>Month</th>
              <th>Platform</th>
              <th>Audience End</th>
              <th>Growth</th>
            </tr>
          </thead>
          <tbody>
            {audienceGrowthReport.map((r, i) => (
              <tr key={`${r.platform}-${i}`}>
                <td>{r.month_date.slice(0, 7)}</td>
                <td>{r.platform}</td>
                <td>{r.audience_end}</td>
                <td>{r.audience_gain ?? ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

// Attempting a card report, this isn't my vision though...

// import { useEffect } from "react";
// import useStore from "../../../zustand/store";
// import ReportCard from "../Reports/ReportCard";
// import { numberFormatter } from "../../../styles/formatters";

// export default function AudienceGrowthReport() {
//   const audienceGrowthReport = useStore((state) => state.audienceGrowthReport);
//   const fetchAudienceGrowthReport = useStore((state) => state.fetchAudienceGrowthReport);
//   const loadingMediaReports = useStore((state) => state.loadingMediaReports);

//   useEffect(() => {
//     fetchAudienceGrowthReport();
//   }, [fetchAudienceGrowthReport]);

//   if (loadingMediaReports) return <p>Loading audience growth data…</p>;
//   if (!audienceGrowthReport || audienceGrowthReport.length === 0)
//     return <p>No audience growth data available.</p>;

//   // Total audience gain across all platforms
//   const totalGain = audienceGrowthReport.reduce(
//     (sum, r) => sum + (r.audience_gain ?? 0),
//     0
//   );

//   return (
//     <div className="audience-growth-report">
//       {/* Optional total summary */}
//       <div style={{ marginBottom: "1rem", fontWeight: 600 }}>
//         Total Audience Gain: {numberFormatter.format(totalGain)} users
//       </div>

//       {/* Cards per platform */}
//       <div className="report-card-container">
//         {audienceGrowthReport.map((r, i) => (
//           <ReportCard
//             key={i}
//             title={r.platform ?? "Unknown Platform"}
//             value={r.audience_gain != null ? numberFormatter.format(r.audience_gain) : "-"}
//             unit="users"
//             delta={r.audience_growth_percent != null ? r.audience_growth_percent : undefined}
//             subtext={`Audience End: ${r.audience_end != null ? numberFormatter.format(r.audience_end) : "-"}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

