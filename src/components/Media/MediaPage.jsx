import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import useStore from "../../zustand/store";
import DepartmentHeader from "../DesignComponents/DepartmentHeader";
import MediaToolBar from "./MediaToolBar";
import MediaList from "./MediaList";
import MediaForm from "./MediaForm";
import "../../styles/toolbar.css";
import "./Media.css";

export default function MediaPage() {
  const mediaRecords = useStore((state) => state.mediaRecords);
  const fetchMediaRecords = useStore((state) => state.fetchMediaRecords);

  // Modal state
  const [showForm, setShowForm] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);

  // Filters / search
  const [platformFilter, setPlatformFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Generate year options dynamically from store
  const yearOptions = Array.from(
    new Set(
      mediaRecords.map((r) =>
        r.month_date ? new Date(r.month_date).getFullYear() : null
      )
    )
  )
    .filter(Boolean)
    .sort((a, b) => b - a);

  // Filtered records
  const filteredRecords = mediaRecords
    .filter((r) => {
      if (platformFilter && r.platform !== platformFilter) return false;
      if (yearFilter) {
        const recordYear = r.month_date
          ? new Date(r.month_date).getFullYear()
          : null;
        if (recordYear !== +yearFilter) return false;
      }
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        const combined = `${r.platform ?? ""} ${r.notes ?? ""}`.toLowerCase();
        if (!combined.includes(term)) return false;
      }
      return true;
    })
    .sort((a, b) => new Date(b.month_date) - new Date(a.month_date));

  /** --- Handlers --- **/
  const handleAddMedia = () => {
    setEditingRecord(null);
    setShowForm(true);
  };

  const handleClearFilters = () => {
    setPlatformFilter("");
    setYearFilter("");
    setSearchTerm("");
  };

  return (
    <div className="hub-container">
      {/* Department Header */}
      <DepartmentHeader
        title="Media Records"
        actions={
          <>
            <NavLink
              to="/media"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Data Entry
            </NavLink>
            <NavLink
              to="/media/reports"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Reports
            </NavLink>
          </>
        }
      />

      {/* Top Action Buttons */}
      <div className="toolbar-actions-top">
        <button onClick={handleAddMedia}>Add Media</button>
      </div>

      {/* Filters Toolbar */}
      <MediaToolBar
        filters={{
          year: {
            label: "Year",
            value: yearFilter,
            options: yearOptions,
            onChange: setYearFilter,
            type: "number",
          },
          platform: {
            label: "Platform",
            value: platformFilter,
            options: [
              "Website",
              "Facebook",
              "Instagram",
              "TikTok",
              "Newsletter",
            ],
            onChange: setPlatformFilter,
          },
        }}
        search={{ value: searchTerm, onChange: setSearchTerm }}
        onClear={handleClearFilters}
      />

      {/* Table */}
      <MediaList
        records={filteredRecords}
        onEdit={(row) => {
          setEditingRecord(row);
          setShowForm(true);
        }}
      />

      {/* Modal Form */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="modal-close-btn"
              onClick={() => setShowForm(false)}
            >
              &times;
            </button>

            <MediaForm
              editRecord={editingRecord}
              setEditRecord={setEditingRecord}
              onClose={() => setShowForm(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
