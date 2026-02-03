import { NavLink, Link } from "react-router-dom";
import DepartmentHeader from "../DesignComponents/DepartmentHeader";
import "../../styles/departmentCards.css";
import "./Shelter.css";

export default function ShelterHome() {
  return (
    <div className="hub-container shelter">
      {/* Department Header */}
      <DepartmentHeader
        title="Shelter"
        actions={
          <>
            <NavLink
              to="/shelter"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Department Home
            </NavLink>
            <NavLink
              to="/shelter/reports"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Reports
            </NavLink>
          </>
        }
      />

      {/* Department Cards */}
      <div className="department-cards-container">
        {/* Weekly Records */}
        <Link to="/shelter/weekly" className="card-link-wrapper">
          <div className="department-card">
            <h4>Shelter Management</h4>
            <p>
              Track guest counts, occupancy levels, incident reports, and
              operational metrics on a weekly basis.
            </p>
            <span className="btn btn-primary">View Weekly Records</span>
          </div>
        </Link>

        {/* Reports */}
        <Link to="/shelter/reports" className="card-link-wrapper">
          <div className="department-card">
            <h4>Shelter Reports & Analytics</h4>
            <p>
              View comprehensive reports on occupancy trends and shelter
              operations.
            </p>
            <span className="btn btn-primary">View Reports</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
