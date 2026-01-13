import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import useStore from "../../zustand/store";
import DepartmentHeader from "../DesignComponents/DepartmentHeader";
import MediaToolBar from "./MediaToolBar";
import MediaList from "./MediaList";
import MediaForm from "./MediaForm";

import "../../styles/toolbar.css";
import "./Media.css";
import "../../styles/modal.css";

export default function MediaPage() {
  const mediaRecords = useStore((state) => state.mediaRecords);
  const fetchMediaRecords = useStore((state) => state.fetchMediaRecords);

  // --- Modal state ---
  const [showForm, setShowForm] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);

  // --- Filters / search state ---
  const [platformFilter, setPlatformFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // --- Filtered records ---
  const filteredRecords = mediaRecords
    .filter((r) => {
      if (platformFilter && r.platform !== platformFilter) return false;
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        const combined = `${r.platform ?? ""} ${r.notes ?? ""}`.toLowerCase();
        if (!combined.includes(term)) return false;
      }
      return true;
    })
    .sort((a, b) => new Date(b.month_date) - new Date(a.month_date));

  // --- Fetch records on mount ---
  useEffect(() => {
    fetchMediaRecords();
  }, [fetchMediaRecords]);

  /** --- Handlers --- **/
  const handleAddMedia = () => {
    setEditingRecord(null);
    setShowForm(true);
  };

  const handleEditMedia = (record) => {
    setEditingRecord(record);
    setShowForm(true);
  };

  const handleClearFilters = () => {
    setPlatformFilter("");
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

      {/* Top Action Button */}
      <div className="toolbar-actions-top">
        <button onClick={handleAddMedia}>Add Media</button>
      </div>

      {/* Filters Toolbar */}
      <MediaToolBar
        filters={{
          platform: {
            label: "Platform",
            options: [
              "Website",
              "Facebook",
              "Instagram",
              "TikTok",
              "Newsletter",
            ],
            value: platformFilter,
            onChange: setPlatformFilter,
          },
        }}
        search={{ value: searchTerm, onChange: setSearchTerm }}
        onClear={handleClearFilters}
      />

      {/* Media Table */}
      <MediaList records={filteredRecords} onEdit={handleEditMedia} />

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
