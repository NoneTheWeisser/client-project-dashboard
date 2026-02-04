import { NavLink, Link } from "react-router-dom";
import DepartmentHeader from "../DesignComponents/DepartmentHeader";
import "../../styles/departmentCards.css";

export default function PantryHome() {
  return (
    <div className="hub-container pantry">
      {/* Department Header */}
      <DepartmentHeader
        title="Pantry Distribution"
        actions={
          <>
            <NavLink
              to="/pantry"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Department Home
            </NavLink>
            <NavLink
              to="/pantry/reports"
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
        <Link to="/pantry/weekly" className="card-link-wrapper">
          <div className="department-card">
            <h4>Weekly Records</h4>
            <p>
              Track weekly food distribution activity and total pounds
              distributed.
            </p>
            <span className="btn btn-primary">View Records</span>
          </div>
        </Link>

        {/* Reports */}
        <Link to="/pantry/reports" className="card-link-wrapper">
          <div className="department-card">
            <h4>Reports</h4>
            <p>
              View summarized pantry data and distribution trends.
            </p>
            <span className="btn btn-primary">View Reports</span>
          </div>
        </Link>
      </div>
    </div>
  );
}


// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function PantryHome() {
//   return (
//     <div className="hub-container">
//       <div className="department-header">
//         <h2>Pantry Distribution</h2>
//         <div className="department-actions">
//           <Link to="/pantry/weekly" className="active">Data Entry</Link>
//           <Link to="/pantry/reports">Reports</Link>
//         </div>
//       </div>

//       <div className="row g-4">
//         <div className="col-md-6">
//           <div className="card h-100 shadow-sm">
//             <div className="card-body">
//               <h5 className="card-title"> Weekly Records</h5>
//               <p className="card-text">
//                 Track weekly food distribution and total pounds distributed.
//               </p>
//               <Link to="/pantry/weekly" className="btn btn-secondary">
//                 View Weekly Records
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-6">
//           <div className="card h-100 shadow-sm">
//             <div className="card-body">
//               <h5 className="card-title"> Reports </h5>
//               <p className="card-text">
//                 View comprehensive pantry reports.
//               </p>
//               <Link to="/pantry/reports" className="btn btn-secondary">
//                 View Reports
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
