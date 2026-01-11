import { FaPlus } from "react-icons/fa";
import useStore from "../../zustand/store";
import "./Housing.css";

export default function HousingToolBar({
  year,
  setYear,
  building,
  setBuilding,
  search,
  setSearch,
  onAdd,
}) {
  const housingRecords = useStore((state) => state.housingRecords);

  // Derive filter options from data
  const yearOptions = Array.from(
    new Set(
      housingRecords
        .filter((r) => r.month_date)
        .map((r) => new Date(r.month_date).getFullYear())
    )
  ).sort((a, b) => b - a);

  const buildingOptions = Array.from(
    new Set(housingRecords.map((r) => r.building_name))
  ).sort();

  return (
    <div className="housing-toolbar">
      {/* LEFT: filters + search */}
      <div className="toolbar-left">
        <div className="filter-group">
          <label>Year</label>
          <select value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">All</option>
            {yearOptions.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Building</label>
          <select
            value={building}
            onChange={(e) => setBuilding(e.target.value)}
          >
            <option value="">All</option>
            {buildingOptions.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group search-group">
          <input
            type="search"
            placeholder="Search notes or building…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* RIGHT: action */}
      <div className="toolbar-right">
        <button className="btn-primary" onClick={onAdd}>
          <FaPlus />
          Add Record
        </button>
      </div>
    </div>
  );
}
