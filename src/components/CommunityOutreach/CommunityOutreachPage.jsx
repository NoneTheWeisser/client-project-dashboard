import { useState, useEffect } from "react";
import useStore from "../../zustand/store";
import DepartmentHeader from "../DesignComponents/DepartmentHeader";
import OutreachToolbar from "./OutreachToolbar";

import VolunteerList from "./Volunteer/VolunteerList";
import VolunteerForm from "./Volunteer/VolunteerForm";

import VolunteerEngagementList from "./Volunteer/VolunteerEngagementList";
import VolunteerEngagementForm from "./Volunteer/VolunteerEngagementForm";

import "./CommunityOutreach.css";
import "../../styles/modal.css";

export default function CommunityOutreachPage() {
  // Zustand actions
  const fetchVolunteers = useStore((state) => state.fetchVolunteers);
  const fetchEngagements = useStore((state) => state.fetchEngagements);

  // Volunteer modal state
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);
  const [editingVolunteer, setEditingVolunteer] = useState(null);

  // Engagement modal state
  const [showEngagementModal, setShowEngagementModal] = useState(false);
  const [editingEngagementId, setEditingEngagementId] = useState(null);

  // Fetch data on mount
  useEffect(() => {
    fetchVolunteers();
    fetchEngagements();
  }, [fetchVolunteers, fetchEngagements]);

  // Handlers for opening modals
  const handleAddVolunteer = () => {
    setEditingVolunteer(null);
    setShowVolunteerModal(true);
  };

  const handleEditVolunteer = (v) => {
    setEditingVolunteer(v);
    setShowVolunteerModal(true);
  };

  const handleAddEngagement = () => {
    setEditingEngagementId(null);
    setShowEngagementModal(true);
  };

  const handleEditEngagement = (id) => {
    setEditingEngagementId(id);
    setShowEngagementModal(true);
  };

  // Handlers for closing modals
  const closeVolunteerModal = () => {
    setEditingVolunteer(null);
    setShowVolunteerModal(false);
  };

  const closeEngagementModal = () => {
    setEditingEngagementId(null);
    setShowEngagementModal(false);
  };

  return (
    <div className="hub-container">
      {/* Department Header */}
      <DepartmentHeader
        title="Community Outreach"
        actions={
          <>
            <a href="#/outreach" className="header-action">Data Entry</a>
            <a href="#/outreach/reports" className="header-action">Reports</a>
          </>
        }
      />

      {/* Toolbar */}
      <OutreachToolbar
        onAddVolunteer={handleAddVolunteer}
        onAddEngagement={handleAddEngagement}
      />

      {/* Volunteer Table */}
      <VolunteerList onEdit={handleEditVolunteer} />

      {/* Volunteer Form Modal */}
      {showVolunteerModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <VolunteerForm
              volunteerToEdit={editingVolunteer}
              onFinish={closeVolunteerModal}
            />
          </div>
        </div>
      )}

      {/* Volunteer Engagement Table */}
      <VolunteerEngagementList onEdit={handleEditEngagement} />

      {/* Volunteer Engagement Form Modal */}
      {showEngagementModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <VolunteerEngagementForm
              editId={editingEngagementId}
              setEditId={closeEngagementModal}
            />
          </div>
        </div>
      )}
    </div>
  );
}