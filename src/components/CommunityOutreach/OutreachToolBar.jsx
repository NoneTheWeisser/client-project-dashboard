import { FaPlus } from "react-icons/fa";
import "../Housing/Housing.css";
import useStore from "../../zustand/store";
import { useState } from "react";

export default function OutreachToolbar({ onAddVolunteer, onAddEngagement }) {
  const volunteers = useStore((state) => state.volunteers);
  const engagements = useStore((state) => state.engagements);

  const [search, setSearch] = useState("");

  return (
    <div className="housing-toolbar">
      <div className="toolbar-left">
        {/* Placeholder for search/filters if needed */}
        <div className="filter-group">
          <label>Search:</label>
          <input
            type="text"
            placeholder="Search volunteers or engagements…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="toolbar-right">
        <button className="secondary" onClick={onAddVolunteer}>
          Add Volunteer
        </button>
        <button
          className="secondary"
          onClick={onAddEngagement}
          style={{ marginLeft: "0.5rem" }}
        >
          Add Engagement
        </button>
      </div>
    </div>
  );
}
