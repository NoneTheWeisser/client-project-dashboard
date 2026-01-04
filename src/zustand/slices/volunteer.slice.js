import axios from "axios";

const volunteersSlice = (set, get) => ({
  volunteers: [],
  loading: false,
  error: null,

  fetchVolunteers: async () => {
    set({ loading: true });
    try {
      const res = await fetch("/api/volunteers");
      const data = await res.json();
      set({ volunteers: data, loading: false });
    } catch (err) {
      console.error("fetchVolunteers error:", err);
      set({ error: err.message, loading: false });
    }
  },

  addVolunteer: async (name, type) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post("/api/volunteers", { name, type });
      set((state) => ({
        volunteers: [...state.volunteers, response.data],
        loading: false,
      }));
    } catch (err) {
      console.error("addVolunteer error:", err);
      set({ error: "Failed to add volunteer", loading: false });
    }
  },

  editVolunteer: async (id, name, type) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.put(`/api/volunteers/${id}`, { name, type });
      set((state) => ({
        volunteers: state.volunteers.map((v) =>
          v.id === id ? response.data : v
        ),
        loading: false,
      }));
    } catch (err) {
      console.error("editVolunteer error:", err);
      set({ error: "Failed to edit volunteer", loading: false });
    }
  },

  deleteVolunteer: async (id) => {
    set({ loading: true, error: null });
    try {
      await axios.delete(`/api/volunteers/${id}`);
      set((state) => ({
        volunteers: state.volunteers.filter((v) => v.id !== id),
        loading: false,
      }));
    } catch (err) {
      console.error("deleteVolunteer error:", err);
      set({ error: "Failed to delete volunteer", loading: false });
    }
  },
});

export default volunteersSlice;
