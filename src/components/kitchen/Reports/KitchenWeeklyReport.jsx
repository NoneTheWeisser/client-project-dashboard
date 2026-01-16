import useStore from "../../../zustand/store";
import { useEffect } from "react";

export const numberFormatter = new Intl.NumberFormat("en-US");

export default function KitchenWeeklyReport({ filters }) {
  const kitchenRecords = useStore((state) => state.kitchenRecords);
  const fetchKitchenRecords = useStore((state) => state.fetchKitchenRecords);
  const kitchenLoading = useStore((state) => state.kitchenLoading);

  useEffect(() => {
    fetchKitchenRecords();
  }, [fetchKitchenRecords]);

  if (kitchenLoading) return <p>Loading weekly reports...</p>;

  const filteredReports = kitchenRecords?.filter((r) => {
    let keep = true;

    if (filters?.year) {
      const reportYear = new Date(r.week_date).getFullYear();
      keep = keep && reportYear === Number(filters.year);
    }

    if (filters?.search) {
      const search = filters.search.toLowerCase();
      keep = keep && (r.notes?.toLowerCase().includes(search) || false);
    }

    return keep;
  });

  return (
    <div className="table-container">
      <table className="table-app table-hover table-striped">
        <thead>
          <tr>
            <th>Week Date</th>
            <th>Total Meals Served</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {filteredReports?.length > 0 ? (
            filteredReports.map((r) => (
              <tr key={r.id}>
                <td>{new Date(r.week_date).toLocaleDateString()}</td>
                <td className="col-number">
                  {numberFormatter.format(r.total_meals_served)}
                </td>
                <td>{r.notes || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}