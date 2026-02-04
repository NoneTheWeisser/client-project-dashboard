import { NavLink, Link } from "react-router-dom";
import DepartmentHeader from "../DesignComponents/DepartmentHeader";
import "../../styles/departmentCards.css";

export default function ComplianceHome() {
  return (
    <div className="hub-container compliance">
      {/* Department Header */}
      <DepartmentHeader
        title="Compliance"
        actions={
          <>
            <NavLink
              to="/compliance"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Department Home
            </NavLink>
            <NavLink
              to="/compliance/reports"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Reports
            </NavLink>
          </>
        }
      />

      {/* Department Cards */}
      <div className="department-cards-container">
        {/* Weekly Compliance */}
        <Link to="/compliance/weekly" className="card-link-wrapper">
          <div className="department-card">
            <h4>Weekly Compliance Management</h4>
            <p>
              Track household demographics, age groups, gender, race, health
              conditions, and exits on a weekly basis.
            </p>
            <span className="btn btn-primary">View Weekly Records</span>
          </div>
        </Link>

        {/* Reports */}
        <Link to="/compliance/reports" className="card-link-wrapper">
          <div className="department-card">
            <h4>Compliance Reports & Analytics</h4>
            <p>
              View comprehensive reports on demographics trends and compliance
              statistics.
            </p>
            <span className="btn btn-primary">View Reports</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
