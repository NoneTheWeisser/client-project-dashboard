import { NavLink, Link } from "react-router-dom";
import DepartmentHeader from "../DesignComponents/DepartmentHeader";
import "../../styles/departmentCards.css";
import "./Kitchen.css";

export default function KitchenHome() {
  return (
    <div className="hub-container kitchen">
      {/* Department Header */}
      <DepartmentHeader
        title="Kitchen"
        actions={
          <>
            <NavLink
              to="/kitchen"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Department Home
            </NavLink>
            <NavLink
              to="/kitchen/reports"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Reports
            </NavLink>
          </>
        }
      />

      {/* Department Cards */}
      <div className="department-cards-container">
        {/* Weekly Data Entry */}
        <Link to="/kitchen/weekly" className="card-link-wrapper">
          <div className="department-card">
            <h4>Weekly Kitchen Management</h4>
            <p>
              Track meals served, inventory usage, volunteer hours, and food
              waste.
            </p>
            <span className="btn btn-primary">View Weekly Records</span>
          </div>
        </Link>

        {/* Reports */}
        <Link to="/kitchen/reports" className="card-link-wrapper">
          <div className="department-card">
            <h4>Reports</h4>
            <p>
              View meal service trends, inventory usage, and kitchen analytics.
            </p>
            <span className="btn btn-primary">View Reports</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
