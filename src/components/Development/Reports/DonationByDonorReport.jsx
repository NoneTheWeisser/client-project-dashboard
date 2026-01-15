import useStore from "../../../zustand/store";
import { useEffect } from "react";

// Plain number with commas
export const numberFormatter = new Intl.NumberFormat("en-US");
export default function DonationByDonorReport() {
  const donationByDonorReports = useStore(
    (state) => state.donationByDonorReports
  );
  const fetchByDonorReports = useStore((state) => state.fetchByDonorReports);
  const loadingDonationReports = useStore(
    (state) => state.loadingDonationReports
  );

  useEffect(() => {
    fetchByDonorReports();
  }, []);

  if (loadingDonationReports) return <p>Loading donor reports...</p>;

  return (
    <div className="table-container" >
      <table className="table-app table-hover table-striped">
        <thead>
          <tr>
            <th>Donor</th>
            <th>Type</th>
            <th className="col-number">Total Donated</th>
            <th className="col-number">Donation Count</th>
            <th className="col-number">Restricted Total</th>
            <th className="col-number">Notable Total</th>
          </tr>
        </thead>
        <tbody>
          {donationByDonorReports.map((r) => (
            <tr key={r.donor_id}>
              <td>{r.donor_name ?? "-"}</td>
              <td>{r.donor_type ?? "-"}</td>

              <td className="col-number">
                {r.total_donated != null
                  ? `$${numberFormatter.format(r.total_donated)}`
                  : "-"}
              </td>

              <td className="col-number">
                {r.donation_count != null
                  ? numberFormatter.format(r.donation_count)
                  : "-"}
              </td>

              <td className="col-number">
                {r.restricted_total != null
                  ? `$${numberFormatter.format(r.restricted_total)}`
                  : "-"}
              </td>

              <td className="col-number">
                {r.notable_total != null
                  ? `$${numberFormatter.format(r.notable_total)}`
                  : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
