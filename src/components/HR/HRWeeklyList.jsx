import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useStore from '../../zustand/store';

export default function HRWeeklyList() {
  const hrRecords = useStore((state) => state.hrRecords);
  const hrLoading = useStore((state) => state.hrLoading);
  const hrError = useStore((state) => state.hrError);
  const fetchHRRecords = useStore((state) => state.fetchHRRecords);
  const deleteHRRecord = useStore((state) => state.deleteHRRecord);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHRRecords();
  }, [fetchHRRecords]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this HR record?')) {
      await deleteHRRecord(id);
    }
  };

  const handleEdit = (id) => {
    navigate(`/hr/weekly/edit/${id}`);
  };

  if (hrLoading) {
    return (
      <div className="container mt-4">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (hrError) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger" role="alert">
          Error: {hrError}
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Human Resources - Weekly Records</h1>
        <Link to="/hr/weekly/new" className="btn btn-success">
          Add New Record
        </Link>
      </div>

      {hrRecords.length === 0 ? (
        <div className="alert alert-info">
          No HR records found. Click "Add New Record" to create one.
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Week Date</th>
                <th>Total Positions</th>
                <th>Open Positions</th>
                <th>New Hires</th>
                <th>Turnover</th>
                <th>Evaluations Due</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {hrRecords.map((record) => (
                <tr key={record.id}>
                  <td>{new Date(record.week_date).toLocaleDateString()}</td>
                  <td>{record.total_positions}</td>
                  <td>{record.open_positions}</td>
                  <td>{record.new_hires_this_week}</td>
                  <td>{record.employee_turnover}</td>
                  <td>{record.evaluations_due}</td>
                  <td className="text-center">
                    <button
                      onClick={() => handleEdit(record.id)}
                      className="btn btn-sm btn-warning me-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(record.id)}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}