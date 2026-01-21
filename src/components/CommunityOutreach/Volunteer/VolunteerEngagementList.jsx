import useStore from "../../../zustand/store";

export default function VolunteerEngagementList({ onEdit, filters = {} }) {
  const engagements = useStore((state) => state.engagements);
  const deleteEngagement = useStore((state) => state.deleteEngagement);
  const fetchEngagements = useStore((state) => state.fetchEngagements); 

  // --- Filtered data ---
  const filtered = engagements.filter((e) => {
    const matchesVolunteer =
      !filters.volunteerId || e.volunteer_id.toString() === filters.volunteerId;
    const matchesLocation = !filters.location || e.location === filters.location;
    const matchesYear =
      !filters.year || new Date(e.event_date).getFullYear().toString() === filters.year;
    const matchesSearch =
      !filters.search ||
      e.location.toLowerCase().includes(filters.search.toLowerCase()) ||
      (e.volunteer_name &&
        e.volunteer_name.toLowerCase().includes(filters.search.toLowerCase()));

    return matchesVolunteer && matchesLocation && matchesYear && matchesSearch;
  });

  if (filtered.length === 0) return <p>No engagements logged.</p>;

  // --- Handlers ---
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this engagement?")) return;

    try {
      await deleteEngagement(id);
      // optional: refresh table after deletion
      if (fetchEngagements) await fetchEngagements();
    } catch (err) {
      console.error("Failed to delete engagement:", err);
      alert("Error deleting engagement.");
    }
  };

  return (
    <div className="table-container table-contained">
      <table className="table-app table-contained">
        <thead>
          <tr>
            <th>Volunteer</th>
            <th>Date</th>
            <th>Location</th>
            <th># Volunteers</th>
            <th>Signups</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((e) => (
            <tr key={e.id}>
              <td>{e.volunteer_name}</td>
              <td>{new Date(e.event_date).toLocaleDateString()}</td>
              <td>{e.location}</td>
              <td>{e.number_volunteers}</td>
              <td>{e.software_signups || 0}</td>
              <td>
                <div className="table-actions">
                  <button
                    className="btn-table-edit"
                    onClick={() => onEdit(e.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn-table-delete"
                    onClick={() => handleDelete(e.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
