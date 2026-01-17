import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useStore from "../../../zustand/store";
import DepartmentHeader from "../../DesignComponents/DepartmentHeader";
import MediaReportsToolBar from "./MediaReportsToolBar";
import MonthlyMediaReport from "./MonthlyMediaReport";
import NewsletterReport from "./NewsletterReport";
import AudienceGrowthReport from "./AudienceGrowthReport";
import MediaLineChart from "../Charts/MediaLineChart";
import MediaKPI from "../Charts/MediaKPI";
import "../Charts/MediaDashboard.css";

export default function MediaReports() {
  // --- Store actions ---
  const fetchMonthlyMediaReport = useStore(
    (state) => state.fetchMonthlyMediaReport
  );
  const fetchNewsletterReport = useStore(
    (state) => state.fetchNewsletterReport
  );
  const fetchAudienceGrowthReport = useStore(
    (state) => state.fetchAudienceGrowthReport
  );

  // --- Store data ---
  const monthlyReport = useStore((state) => state.monthlyReport);
  const newsletterReport = useStore((state) => state.newsletterReport);
  const audienceReport = useStore((state) => state.audienceReport);

  const loadingMonthly = useStore((state) => state.loadingMonthlyReports);
  const loadingNewsletter = useStore((state) => state.loadingNewsletterReports);
  const loadingAudience = useStore((state) => state.loadingAudienceReports);

  // --- Local state ---
  const [platform, setPlatform] = useState("");
  const [year, setYear] = useState("");
  const [search, setSearch] = useState("");
  const [activeReport, setActiveReport] = useState("monthly");

  // --- Fetch all reports on mount ---
  useEffect(() => {
    fetchMonthlyMediaReport();
    fetchNewsletterReport();
    fetchAudienceGrowthReport();
  }, [
    fetchMonthlyMediaReport,
    fetchNewsletterReport,
    fetchAudienceGrowthReport,
  ]);

  // --- Filtered monthly report ---
  const filteredMonthly = monthlyReport
    .filter((r) => !platform || r.platform === platform)
    .filter((r) => !year || r.month_date.startsWith(year))
    .filter(
      (r) => !search || r.platform.toLowerCase().includes(search.toLowerCase())
    );

  // --- Determine available years dynamically ---
  const years = Array.from(
    new Set(monthlyReport.map((r) => r.month_date.slice(0, 4)))
  ).sort((a, b) => b - a);

  // --- Prepare last 6 months for chart ---
  const sortedMonthly = [...filteredMonthly].sort(
    (a, b) => new Date(a.month_date) - new Date(b.month_date)
  );
  const last6Months = sortedMonthly.slice(-6);

  const platforms = ["Website", "Facebook", "Instagram", "TikTok"];
  const labels = last6Months.map((r) =>
    new Date(r.month_date).toLocaleString("default", { month: "short" })
  );

  const colors = {
    Website: "#2a5754",
    Facebook: "#4267B2",
    Instagram: "#C13584",
    TikTok: "#69C9D0",
  };

  const datasets = platforms.map((p) => {
    const data = last6Months.map((month) => {
      const entry = filteredMonthly.find(
        (r) => r.platform === p && r.month_date === month.month_date
      );
      return entry
        ? Number(entry.total_visits || 0) + Number(entry.social_views || 0)
        : 0;
    });
    return {
      label: p,
      data,
      borderColor: colors[p],
      backgroundColor: colors[p],
      tension: 0.3,
      fill: false,
    };
  });

  // --- Compute KPIs from latest month ---
  const latestMonth = last6Months.length
    ? last6Months[last6Months.length - 1].month_date
    : null;
  const latestData = last6Months.filter((r) => r.month_date === latestMonth);

  const totalVisits = latestData.reduce(
    (sum, r) => sum + Number(r.total_visits || 0),
    0
  );
  const socialViews = latestData.reduce(
    (sum, r) => sum + Number(r.social_views || 0),
    0
  );
  const avgBounce = latestData.length
    ? (
        latestData.reduce((sum, r) => sum + Number(r.bounce_rate || 0), 0) /
        latestData.length
      ).toFixed(1)
    : 0;
  const topPlatformEntry = latestData.sort(
    (a, b) => Number(b.total_visits || 0) - Number(a.total_visits || 0)
  )[0];
  const topPlatform = topPlatformEntry ? topPlatformEntry.platform : "N/A";

  return (
    <div className="hub-container">
      <DepartmentHeader
        title="Media Reports"
        actions={
          <>
            <NavLink
              to="/media"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Data Entry
            </NavLink>
            <NavLink
              to="/media/reports"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Reports
            </NavLink>
          </>
        }
      />

      {/* ---------------- Chart + KPIs ---------------- */}
      <div className="dashboard-container media">
        <div className="charts-row media">
          <div className="chart-column media">
            <MediaLineChart labels={labels} datasets={datasets} />
          </div>
          <div className="kpi-column media">
            <MediaKPI title="Total Visits" value={totalVisits} />
            <MediaKPI title="Social Views" value={socialViews} />
            <MediaKPI title="Top Platform" value={topPlatform} />
            <MediaKPI title="Avg Bounce Rate" value={`${avgBounce}%`} />
          </div>
        </div>

        {/* ---------------- Toolbar ---------------- */}
        <MediaReportsToolBar
          year={year}
          setYear={setYear}
          platform={platform}
          setPlatform={setPlatform}
          search={search}
          setSearch={setSearch}
          activeReport={activeReport}
          setActiveReport={setActiveReport}
          YEAR_OPTIONS={years}
          PLATFORM_OPTIONS={[
            "Website",
            "Facebook",
            "Instagram",
            "TikTok",
            "Newsletter",
          ]}
          onClear={() => {
            setYear("");
            setPlatform("");
            setSearch("");
          }}
        />

        {/* ---------------- Report Table ---------------- */}
        <div style={{ marginTop: "1rem" }}>
          {activeReport === "monthly" &&
            (loadingMonthly ? (
              <p>Loading monthly report…</p>
            ) : (
              <MonthlyMediaReport records={filteredMonthly} />
            ))}

          {activeReport === "newsletter" &&
            (loadingNewsletter ? (
              <p>Loading newsletter report…</p>
            ) : (
              <NewsletterReport records={newsletterReport} />
            ))}

          {activeReport === "audience-growth" &&
            (loadingAudience ? (
              <p>Loading audience growth report…</p>
            ) : (
              <AudienceGrowthReport records={audienceReport} />
            ))}
        </div>
      </div>
    </div>
  );
}
