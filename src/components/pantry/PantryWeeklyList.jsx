import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useStore from '../../zustand/store';

export default function PantryWeeklyList() {
  const pantryRecords = useStore((state) => state.pantryRecords);
  const loading = useStore((state) => state.loading);
  const error = useStore((state) => state.error);
  const fetchPantryRecords = useStore((state) => state.fetchPantryRecords);
  const deletePantryRecord = useStore((state) => state.deletePantryRecord);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPantryRecords();
  }, [fetchPantryRecords]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this pantry record?')) {
      await deletePantryRecord(id);
    }
  };

  const handleEdit = (id) => {
    navigate(`/pantry/weekly/edit/${id}`);
  };

  if (loading) {
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

  if (error) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger" role="alert">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Pantry - Weekly pantry Records</h1>
        <Link to="/pantry/weekly/new" className="btn btn-success">
          Add New Record
        </Link>
      </div>

      {pantryRecords.length === 0 ? (
        <div className="alert alert-info">
          No pantry records found. Click "Add New Record" .
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Week Date</th>
                <th>First-Time Households</th>
                <th>Returning Households</th>
                <th>Adults</th>
                <th>Children</th>
                <th>Seniors</th>
                <th>Total Pounds</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pantryRecords.map((record) => (
                <tr key={record.id}>
                  <td>{new Date(record.week_date).toLocaleDateString()}</td>
                  <td>{record.first_time_households}</td>
                  <td>{record.returning_households}</td>
                  <td>{record.total_adults}</td>
                  <td>{record.total_children}</td>
                  <td>{record.total_seniors}</td>
                  <td>{record.total_pounds_distributed}</td>
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