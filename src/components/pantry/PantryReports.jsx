import React, { useEffect } from 'react';
import useStore from '../../zustand/store';

export default function PantryReports() {
  const pantryRecords = useStore((state) => state.pantryRecords);
  const loading = useStore((state) => state.loading);
  const fetchPantryRecords = useStore((state) => state.fetchPantryRecords);

  useEffect(() => {
    fetchPantryRecords();
  }, [fetchPantryRecords]);

  const calculateStats = () => {
    if (pantryRecords.length === 0) return null;

    const totalFirstTime = pantryRecords.reduce((sum, r) => sum + (r.first_time_households || 0), 0);
    const totalReturning = pantryRecords.reduce((sum, r) => sum + (r.returning_households || 0), 0);
    const totalPounds = pantryRecords.reduce((sum, r) => sum + (r.total_pounds_distributed || 0), 0);
    const avgAdults = pantryRecords.reduce((sum, r) => sum + (r.total_adults || 0), 0) / pantryRecords.length;
    const avgChildren = pantryRecords.reduce((sum, r) => sum + (r.total_children || 0), 0) / pantryRecords.length;
    const avgSeniors = pantryRecords.reduce((sum, r) => sum + (r.total_seniors || 0), 0) / pantryRecords.length;

    return {
      totalFirstTime,
      totalReturning,
      totalHouseholds: totalFirstTime + totalReturning,
      totalPounds: totalPounds.toFixed(2),
      avgAdults: avgAdults.toFixed(1),
      avgChildren: avgChildren.toFixed(1),
      avgSeniors: avgSeniors.toFixed(1),
      totalRecords: pantryRecords.length
    };
  };

  const stats = calculateStats();

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

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Pantry Distribution Reports</h1>

      {stats ? (
        <>
          <div className="row g-4 mb-4">
            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Total Households</h5>
                  <p className="display-4">{stats.totalHouseholds}</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">First-Time</h5>
                  <p className="display-4">{stats.totalFirstTime}</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Returning</h5>
                  <p className="display-4">{stats.totalReturning}</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Total Pounds</h5>
                  <p className="display-4">{stats.totalPounds}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4 mb-4">
            <div className="col-md-4">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Avg Adults/Week</h5>
                  <p className="display-4">{stats.avgAdults}</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Avg Children/Week</h5>
                  <p className="display-4">{stats.avgChildren}</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Avg Seniors/Week</h5>
                  <p className="display-4">{stats.avgSeniors}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3>Weekly Pantry Data</h3>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Week Date</th>
                      <th>First-Time</th>
                      <th>Returning</th>
                      <th>Adults</th>
                      <th>Children</th>
                      <th>Seniors</th>
                      <th>Pounds</th>
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="alert alert-info">
          No pantry records available. Add some records to see reports.
        </div>
      )}
    </div>
  );
}