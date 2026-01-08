import "./TableToolBar.css";

// export default function TableToolbar({ filters = {}, search = {} }) {
//   return (
//     <div className="table-toolbar">
//       <div className="toolbar-filters">
//         {Object.entries(filters).map(([key, f]) => (
//           <label key={key}>
//             {f.label}:
//             <select
//               value={f.value}
//               onChange={(e) => f.onChange(e.target.value)}
//             >
//               <option value="">All</option>
//               {f.options.map((opt) => (
//                 <option key={opt} value={opt}>
//                   {opt}
//                 </option>
//               ))}
//             </select>
//           </label>
//         ))}
//       </div>

//       {search.value !== undefined && (
//         <div className="toolbar-search">
//           <input
//             type="text"
//             placeholder="Search..."
//             value={search.value}
//             onChange={(e) => search.onChange(e.target.value)}
//           />
//         </div>
//       )}
//     </div>
//   );
// }


export default function TableToolbar({ filters = {}, search }) {
  return (
    <div className="table-toolbar">
      <div className="toolbar-left">
        {Object.entries(filters).map(([key, filter]) => (
          <div className="toolbar-field" key={key}>
            <label>{filter.label}</label>
            <select
              value={filter.value}
              onChange={(e) => filter.onChange(e.target.value)}
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
      </div>

      {search && (
        <div className="toolbar-right">
          <input
            type="text"
            placeholder="Search…"
            value={search.value}
            onChange={(e) => search.onChange(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}
