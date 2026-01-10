import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useStore from "../../../zustand/store";
import DepartmentHeader from "../../DesignComponents/DepartmentHeader";
import MediaReportsToolBar from "./MediaReportsToolBar";
import MonthlyMediaReport from "./MonthlyMediaReport";
import NewsletterReport from "./NewsletterReport";
import AudienceGrowthReport from "./AudienceGrowthReport";

export default function MediaReports() {
  const fetchMonthlyMediaReport = useStore(
    (state) => state.fetchMonthlyMediaReport
  );
  const fetchNewsletterReport = useStore(
    (state) => state.fetchNewsletterReport
  );
  const fetchAudienceGrowthReport = useStore(
    (state) => state.fetchAudienceGrowthReport
  );

  const monthlyReport = useStore((state) => state.monthlyReport);
  const newsletterReport = useStore((state) => state.newsletterReport);
  const audienceReport = useStore((state) => state.audienceReport);

  const loadingMonthly = useStore((state) => state.loadingMonthlyReports);
  const loadingNewsletter = useStore((state) => state.loadingNewsletterReports);
  const loadingAudience = useStore((state) => state.loadingAudienceReports);

  const [platform, setPlatform] = useState("");
  const [year, setYear] = useState("");
  const [search, setSearch] = useState("");

  const [activeTab, setActiveTab] = useState("monthly");

  useEffect(() => {
    fetchMonthlyMediaReport();
    fetchNewsletterReport();
    fetchAudienceGrowthReport();
  }, [
    fetchMonthlyMediaReport,
    fetchNewsletterReport,
    fetchAudienceGrowthReport,
  ]);

  const filteredMonthly = monthlyReport
    .filter((r) => !platform || r.platform === platform)
    .filter((r) => !year || r.month_date.startsWith(year))
    .filter(
      (r) => !search || r.platform.toLowerCase().includes(search.toLowerCase())
    );

  // Determine available years from monthly report
  const years = Array.from(
    new Set(monthlyReport.map((r) => r.month_date.slice(0, 4)))
  ).sort((a, b) => b - a);

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
      <MediaReportsToolBar
        filters={{
          year: {
            label: "Year",
            options: years,
            value: year,
            onChange: setYear,
          },
          platform: {
            label: "Platform",
            options: [
              "Website",
              "Facebook",
              "Instagram",
              "TikTok",
              "Newsletter",
            ],
            value: platform,
            onChange: setPlatform,
          },
        }}
        search={{ value: search, onChange: setSearch }}
        rightButtons={[
          { label: "Monthly", onClick: () => setActiveTab("monthly") },
          { label: "Newsletter", onClick: () => setActiveTab("newsletter") },
          { label: "Audience Growth", onClick: () => setActiveTab("audience") },
        ]}
      />

      {/* Report content */}
      <div style={{ marginTop: "1rem" }}>
        {activeTab === "monthly" &&
          (loadingMonthly ? (
            <p>Loading monthly report…</p>
          ) : (
            <MonthlyMediaReport records={filteredMonthly} />
          ))}

        {activeTab === "newsletter" &&
          (loadingNewsletter ? (
            <p>Loading newsletter report…</p>
          ) : (
            <NewsletterReport records={newsletterReport} />
          ))}

        {activeTab === "audience" &&
          (loadingAudience ? (
            <p>Loading audience growth report…</p>
          ) : (
            <AudienceGrowthReport records={audienceReport} />
          ))}
      </div>
    </div>
  );
}
