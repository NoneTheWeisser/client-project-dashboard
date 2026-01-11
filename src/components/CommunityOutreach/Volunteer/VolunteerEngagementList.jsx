import useStore from "../../../zustand/store";

export default function VolunteerEngagementList({ onEdit }) {
  const engagements = useStore((state) => state.engagements);
  const loadingEngagements = useStore((state) => state.loadingEngagements);
  const errorEngagements = useStore((state) => state.errorEngagements);
  const deleteEngagement = useStore((state) => state.deleteEngagement);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this engagement?")) {
      await deleteEngagement(id);
    }
  };

  if (loadingEngagements) return <p>Loading engagements...</p>;
  if (errorEngagements) return <p>Error: {errorEngagements}</p>;

  if (!engagements.length) return <p>No engagements logged.</p>;

  return (
    <div className="table-container" style={{ maxWidth: "1200px", marginTop: "2rem" }}>
      <table className="table-app table-hover table-striped">
        <thead>
          <tr>
            <th>Volunteer</th>
            <th>Event Date</th>
            <th>Location</th>
            <th>Number of Volunteers</th>
            <th>Software Signups</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {engagements.map((e) => (
            <tr key={e.id}>
              <td>{e.volunteer_name}</td>
              <td>{new Date(e.event_date).toLocaleDateString()}</td>
              <td>{e.location}</td>
              <td>{e.number_volunteers}</td>
              <td>{e.software_signups || 0}</td>
              <td>
                <div className="table-actions">
                  <button
                    className="btn btn-sm btn-table-edit"
                    onClick={() => onEdit(e.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-table-delete"
                    style={{ marginLeft: "0.5rem" }}
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
