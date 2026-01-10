import React from "react";

export default function ReportCard({ title, value, unit, delta }) {
  const deltaSign = delta > 0 ? "+" : delta < 0 ? "-" : "";
  return (
    <div className="report-card">
      <h4>{title}</h4>
      <p className="value">
        {value} {unit ?? ""}
      </p>
      {delta !== undefined && (
        <p className={`delta ${delta >= 0 ? "positive" : "negative"}`}>
          {deltaSign}
          {Math.abs(delta)}%
        </p>
      )}
    </div>
  );
}
