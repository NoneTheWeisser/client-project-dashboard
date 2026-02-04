import { NavLink, Link } from "react-router-dom";
import DepartmentHeader from "../DesignComponents/DepartmentHeader";
import "../../styles/departmentCards.css";
import "./HR.css";

export default function HRHome() {
  return (
    <div className="hub-container hr">
      {/* Department Header */}
      <DepartmentHeader
        title="Human Resources"
        actions={
          <>
            <NavLink
              to="/hr"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Department Home
            </NavLink>
            <NavLink
              to="/hr/reports"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Reports
            </NavLink>
          </>
        }
      />

      {/* Department Cards */}
      <div className="department-cards-container hr">
        {/* Weekly Records */}
        <Link to="/hr/weekly" className="card-link-wrapper">
          <div className="department-card">
            <h4>Weekly HR Management</h4>
            <p>
              Track staffing levels, new hires, employee turnover, and
              performance evaluations on a weekly basis.
            </p>
            <span className="btn btn-primary">View Weekly Records</span>
          </div>
        </Link>

        {/* Reports */}
        <Link to="/hr/reports" className="card-link-wrapper">
          <div className="department-card hr">
            <h4>HR Reports & Analytics</h4>
            <p>
              View comprehensive reports on hiring trends and staff statistics.
            </p>
            <span className="btn btn-primary">View Reports</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
