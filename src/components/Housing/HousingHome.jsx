import { useState } from "react";
import HousingForm from "./HousingForm";
import HousingTable from "./HousingTable";

export default function HousingHome() {
  const [editingRecord, setEditingRecord] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showTable, setShowTable] = useState(true);

  return (
    <div>
      <h2>North Campus Housing</h2>
      <section style={{ marginBottom: "1rem" }}>
        <h4
          style={{ cursor: "pointer", userSelect: "none" }}
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "▼ Hide Add/Edit Housing" : "► Add/Edit Housing"}
        </h4>
        {showForm && (
          <HousingForm
            editingRecord={editingRecord}
            setEditingRecord={setEditingRecord}
          />
        )}
      </section>

      <section style={{ marginBottom: "1rem" }}>
        <h4
          style={{ cursor: "pointer", userSelect: "none" }}
          onClick={() => setShowTable(!showTable)}
        >
          {showTable ? "▼ Hide Housing Records" : "► View Housing Records"}
        </h4>
        {showTable && <HousingTable onEdit={setEditingRecord} />}
      </section>

      {/* Quick Overview Section */}
      <section>
        <h3>Quick Overview</h3>
        <p>Summary metrics/graphs/cards coming soon.</p>
      </section>
    </div>
  );
}


// import { useState } from "react";
// import HousingForm from "./HousingForm";
// import HousingTable from "./HousingTable";

// export default function HousingHome() {
//   const [editingRecord, setEditingRecord] = useState(null);

//   return (
//     <div>
//       <h2>North Campus Housing</h2>
//       <HousingForm
//         editingRecord={editingRecord}
//         setEditingRecord={setEditingRecord}
//       />
//       <HousingTable onEdit={setEditingRecord} />

//       <section style={{ marginTop: "2rem" }}>
//         <h3>Quick Overview</h3>
//         <p>Summary metrics/graphs/cards coming soon.</p>
//       </section>
//     </div>
//   );
// }
