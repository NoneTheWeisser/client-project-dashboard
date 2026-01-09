import React from 'react';
import { Link } from 'react-router-dom';

export default function PantryHome() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Pantry Distribution Dashboard</h1>
      
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h3 className="card-title">📊 Weekly Records</h3>
              <p className="card-text">
                Track weekly food distribution  and total pounds distributed.
              </p>
              <Link to="/pantry/weekly" className="btn btn-primary">
                View Weekly Records
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h3 className="card-title"> Reports </h3>
              <p className="card-text">
                View comprehensive pantry data
              </p>
              <Link to="/pantry/reports" className="btn btn-success">
                View Reports
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header bg-light">
              <h4 className="mb-0">Quick Actions</h4>
            </div>
            <div className="card-body">
              <Link to="/pantry/weekly/new" className="btn btn-success me-2">
                ➕ Add New Weekly Record
              </Link>
              <Link to="/pantry/reports" className="btn btn-outline-primary">
                📊 View All Reports
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}