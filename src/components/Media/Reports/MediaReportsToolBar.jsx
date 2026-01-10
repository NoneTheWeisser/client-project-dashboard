import React from "react";
import "./MediaReports.css";

export default function MediaReportsToolBar({
  filters = {},
  search = {},
  rightButtons = [],
}) {
  return (
    <div className="media-reports-toolbar">
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

      <div className="toolbar-right">
        {rightButtons.map((btn) => (
          <button className="secondary" key={btn.label} onClick={btn.onClick}>
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}
