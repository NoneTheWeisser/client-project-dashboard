import { NavLink, Link } from "react-router-dom";
import DepartmentHeader from "../DesignComponents/DepartmentHeader";
import "../../styles/departmentCards.css";
import "./Finance.css";

export default function FinanceHome() {
  return (
    <div className="hub-container finance">
      {/* Department Header */}
      <DepartmentHeader
        title="Finance"
        actions={
          <>
            <NavLink
              to="/finance"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Department Home
            </NavLink>
            <NavLink
              to="/finance/reports"
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
        <Link to="/finance/weekly" className="card-link-wrapper">
          <div className="department-card">
            <h4>Weekly Finance Management</h4>
            <p>
              Track revenue, expenses, payroll, assets, and financial positions
              on a weekly basis.
            </p>
            <span className="btn btn-primary">View Weekly Records</span>
          </div>
        </Link>

        {/* Reports */}
        <Link to="/finance/reports" className="card-link-wrapper">
          <div className="department-card">
            <h4>Finance Reports & Analytics</h4>
            <p>
              View comprehensive reports on cash flow analysis and key financial
              metrics.
            </p>
            <span className="btn btn-primary">View Reports</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
