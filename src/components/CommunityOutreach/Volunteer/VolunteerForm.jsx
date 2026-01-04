import { useState, useEffect } from "react";
import useStore from "../../../zustand/store";

export default function VolunteerForm({ volunteerToEdit, onFinish }) {
  const addVolunteer = useStore((state) => state.addVolunteer);
  const editVolunteer = useStore((state) => state.editVolunteer);

  const [name, setName] = useState("");
  const [type, setType] = useState("Individual");

  useEffect(() => {
    if (volunteerToEdit) {
      setName(volunteerToEdit.name);
      setType(volunteerToEdit.type);
    } else {
      setName("");
      setType("Individual");
    }
  }, [volunteerToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    if (volunteerToEdit) {
      await editVolunteer(volunteerToEdit.id, name, type);
    } else {
      await addVolunteer(name, type);
    }

    setName("");
    setType("Individual");

    if (onFinish) onFinish();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Individual">Individual</option>
        <option value="Group">Group</option>
      </select>
      <button type="submit">{volunteerToEdit ? "Update" : "Add"}</button>
      {volunteerToEdit && (
        <button
          type="button"
          onClick={onFinish}
          style={{ marginLeft: "0.5rem" }}
        >
          Cancel
        </button>
      )}
    </form>
  );
}
