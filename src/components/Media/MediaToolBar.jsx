import React from "react";
import "./Media.css";

export default function MediaToolBar({ filters = {}, search = {}, onAdd }) {
  return (
    <div className="media-toolbar">
      {/* Left side: filters + search */}
      <div className="toolbar-left">
        {Object.entries(filters).map(([key, filter]) => (
          <div key={key} className="filter-group">
            <label>{filter.label}:</label>
            <select
              value={filter.value}
              onChange={(e) =>
                filter.onChange(
                  filter.type === "number" ? +e.target.value : e.target.value
                )
              }
            >
              <option value="">All</option>
              {filter.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        ))}

        {search.value !== undefined && (
          <div className="filter-group">
            <label>Search:</label>
            <input
              type="text"
              placeholder="Search..."
              value={search.value}
              onChange={(e) => search.onChange(e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Right side: Add button */}
      <div className="toolbar-right">
        {onAdd && (
          <button className="secondary" onClick={onAdd}>
            Add Media
          </button>
        )}
      </div>
    </div>
  );
}
