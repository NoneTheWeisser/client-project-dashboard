import { useEffect } from "react";
import useStore from "../../zustand/store";
import { FaEdit, FaTrash } from "react-icons/fa";
import {
  currencyFormatter,
  numberFormatter,
  formatPercent,
} from "../../styles/formatters";

export default function HousingTable({ onEdit, year, building, search }) {
  const housingRecords = useStore((state) => state.housingRecords);
  const deleteHousingRecord = useStore((state) => state.deleteHousingRecord);
  const loadingHousing = useStore((state) => state.loadingHousing);
  const fetchHousingRecords = useStore((state) => state.fetchHousingRecords);

  useEffect(() => {
    fetchHousingRecords();
  }, [fetchHousingRecords]);

  // 🔍 PROVE FILTERS ARE ARRIVING
  console.log("TABLE FILTERS:", { year, building, search });

  const filteredRecords = housingRecords.filter((r) => {
    if (year && new Date(r.month_date).getFullYear() !== Number(year))
      return false;

    if (building && r.building_name !== building)
      return false;

    if (search) {
      const term = search.toLowerCase();
      const combined = `${r.building_name} ${r.notes ?? ""}`.toLowerCase();
      if (!combined.includes(term)) return false;
    }

    return true;
  });

  if (loadingHousing) return <p>Loading housing records…</p>;

  return (
    <div className="table-container">
      <table className="table-app table-hover table-striped">
        <thead>
          <tr>
            <th>Building</th>
            <th>Month</th>
            <th>Occupancy</th>
            <th>Operational Reserves</th>
            <th>Replacement Reserves</th>
            <th>Current Vacancies</th>
            <th>Upcoming Vacancies</th>
            <th>Upcoming Leases</th>
            <th>Notes</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {filteredRecords.map((r) => (
            <tr key={`${r.housing_building_id}-${r.month_date}`}>
              <td>{r.building_name}</td>
              <td>
                {new Date(r.month_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                })}
              </td>
              <td>{formatPercent(r.occupancy_percent)}</td>
              <td>{r.operational_reserves != null ? currencyFormatter.format(r.operational_reserves) : "-"}</td>
              <td>{r.replacement_reserves != null ? currencyFormatter.format(r.replacement_reserves) : "-"}</td>
              <td>{r.current_vacancies != null ? numberFormatter.format(r.current_vacancies) : "-"}</td>
              <td>{r.upcoming_vacancies != null ? numberFormatter.format(r.upcoming_vacancies) : "-"}</td>
              <td>{r.upcoming_new_leases != null ? numberFormatter.format(r.upcoming_new_leases) : "-"}</td>
              <td>{r.notes ?? "-"}</td>
              <td>
                <button onClick={() => onEdit(r)}>
                  <FaEdit />
                </button>
                <button
                  onClick={() =>
                    deleteHousingRecord(r.housing_building_id, r.month_date)
                  }
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
