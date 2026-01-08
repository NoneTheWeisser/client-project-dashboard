import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import HousingTable from "./HousingTable";
import DepartmentHeader from "../DesignComponents/DepartmentHeader";
import TableToolBar from "../DesignComponents/TableToolBar/TableToolBar";
import useStore from "../../zustand/store";

export default function HousingHome() {
  const navigate = useNavigate();
  const [year, setYear] = useState("");
  const [building, setBuilding] = useState("");
  const [search, setSearch] = useState("");

  const housingRecords = useStore((state) => state.housingRecords);

  const yearOptions = Array.from(
    new Set(housingRecords.map((r) => new Date(r.month_date).getFullYear()))
  ).sort((a, b) => b - a);

  const buildingOptions = Array.from(
    new Set(housingRecords.map((r) => r.building_name))
  ).sort();

  return (
    <div className="hub-container">
      <DepartmentHeader
        title="North Campus Housing"
        actions={
          <>
            <NavLink
              to="/housing"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Data Entry
            </NavLink>
            <NavLink
              to="/housing/reports"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Reports
            </NavLink>
          </>
        }
      />

      <div style={{ marginBottom: "16px" }}>
        <button
          className="primary"
          onClick={() => navigate("/housing/form")}
        >
          Add New Record
        </button>
      </div>

      <TableToolBar
        filters={{
          year: {
            label: "Year",
            options: yearOptions,
            value: year,
            onChange: setYear,
          },
          building: {
            label: "Building",
            options: buildingOptions,
            value: building,
            onChange: setBuilding,
          },
        }}
        search={{ value: search, onChange: setSearch }}
      />

      <HousingTable
        onEdit={(record) => navigate("/housing/form", { state: { record } })}
        year={year}
        building={building}
        search={search}
      />
    </div>
  );
}


      {/* <HousingForm
        editingRecord={editingRecord}
        setEditingRecord={setEditingRecord}
      /> */}
