import OutreachSummary from "./Summary/OutreachSummary";
import HousingSummary from "./Summary/HousingSummary";
import DevelopmentSummary from "./Summary/DevelopmentSummary";
import useStore from "../../zustand/store";
import { useEffect } from "react";
import "./Summary/ReportsSummary.css";

export default function ReportsSummary() {
  const volunteerMonthlyReports =
    useStore((state) => state.volunteerMonthlyReports) || [];
  const donations = useStore((state) => state.donations) || [];
  const donationMonthlyReports =
    useStore((state) => state.donationMonthlyReports) || [];
  const events = useStore((state) => state.events) || [];

  const housingMonthlyReports =
    useStore((state) => state.housingMonthlyReport) || [];

  const fetchHousingMonthlyReport = useStore((state) => state.fetchHousingMonthlyReport);
  const fetchDonations = useStore((state) => state.fetchDonations);

  const fetchMonthlyDonationReports = useStore(
    (state) => state.fetchMonthlyDonationReports
  );
  const fetchEvents = useStore((state) => state.fetchEvents);
  const fetchVolunteerMonthlyReports = useStore(
    (state) => state.fetchVolunteerMonthlyReports
  );

  useEffect(() => {
    fetchDonations();
    fetchMonthlyDonationReports();
    fetchEvents();
    fetchVolunteerMonthlyReports();
    fetchHousingMonthlyReport();
  }, [
    fetchDonations,
    fetchMonthlyDonationReports,
    fetchEvents,
    fetchVolunteerMonthlyReports,
    fetchHousingMonthlyReport,
  ]);

  return (
    <section className="reports-summary">
      <h3>At-a-Glance Summary</h3>

      <div className="summary-grid">
        <OutreachSummary monthlyReports={volunteerMonthlyReports} />

        <DevelopmentSummary
          monthlyReports={donationMonthlyReports}
          donations={donations}
          events={events}
        />
        <HousingSummary monthlyReports={housingMonthlyReports} />
      </div>
    </section>
  );
}
