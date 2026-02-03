import { useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import useStore from "../../zustand/store";
import DepartmentHeader from "../DesignComponents/DepartmentHeader";

export default function KitchenWeeklyList() {
  const navigate = useNavigate();

  const {
    kitchenRecords,
    fetchKitchenRecords,
    deleteKitchenRecord,
    kitchenLoading,
    kitchenError,
  } = useStore();

  useEffect(() => {
    fetchKitchenRecords();
  }, [fetchKitchenRecords]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;

    try {
      await deleteKitchenRecord(id);
      await fetchKitchenRecords();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  if (kitchenLoading) return <p>Loading kitchen records…</p>;
  if (kitchenError) return <p className="error-text">{kitchenError}</p>;

  return (
    <div className="hub-container kitchen">
      {/* Department Header */}
      <DepartmentHeader
        title="Kitchen"
        actions={
          <>
            <NavLink
              to="/kitchen"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Department Home
            </NavLink>
            <NavLink
              to="/kitchen/reports"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Reports
            </NavLink>
          </>
        }
      />

      <div className="table-container kitchen">
        <div className="table-header">
          <h3>Kitchen Weekly Records</h3>

          <button
            className="toolbar-action-button"
            onClick={() => navigate("/kitchen/weekly/new")}
          >
            Add Record
          </button>
        </div>

        <table className="table-app table-hover table-striped kitchen-table">
          <thead>
            <tr>
              <th className="col-month">Week</th>
              <th className="col-number">Meals Served</th>
              <th className="col-notes">Notes</th>
              <th className="col-actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {kitchenRecords?.length ? (
              kitchenRecords.map((r) => (
                <tr key={r.id}>
                  <td className="col-month">
                    {new Date(r.week_date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </td>

                  <td className="col-number">{r.total_meals_served}</td>

                  <td className="col-notes">{r.notes ?? "-"}</td>

                  <td className="col-actions">
                    <div className="table-actions">
                      <button
                        className="btn-table-edit"
                        onClick={() => navigate(`/kitchen/weekly/edit/${r.id}`)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn-table-delete"
                        onClick={() => handleDelete(r.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="empty-state">
                  No kitchen records yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
