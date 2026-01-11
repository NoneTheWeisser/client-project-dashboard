import { useState } from "react";
import DepartmentHeader from "../DesignComponents/DepartmentHeader";
import HousingToolBar from "./HousingToolBar";
import HousingTable from "./HousingTable";
import HousingForm from "./HousingForm";

export default function HousingHome() {
  const [showForm, setShowForm] = useState(false);
  const [editRecord, setEditRecord] = useState(null);

  const [year, setYear] = useState("");
  const [building, setBuilding] = useState("");
  const [search, setSearch] = useState("");

  const handleEdit = (record) => {
    setEditRecord(record);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setEditRecord(null);
    setShowForm(false);
  };

  return (
    <div className="hub-container">
      <DepartmentHeader
        title="Housing"
        description="Monthly housing metrics and occupancy tracking"
        primaryActionLabel="Add Record"
        onPrimaryAction={() => setShowForm(true)}
      />

      <HousingToolBar
        year={year}
        setYear={setYear}
        building={building}
        setBuilding={setBuilding}
        search={search}
        setSearch={setSearch}
      />

      <HousingTable
        year={year}
        building={building}
        search={search}
        onEdit={handleEdit}
      />

      {showForm && (
        <HousingForm
          record={editRecord}
          onClose={handleCloseForm}
        />
      )}
    </div>
  );
}
