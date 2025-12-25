import axios from "axios";

const kitchenSlice = (set, get) => ({
// all state 
  kitchenRecords: [],
  weeklyReports: [],
  monthlyReports: [],
  loading: false,
  error: null,

  // Fetch all kitchen records
  fetchKitchenRecords: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("/api/kitchen");
      const data = await res.json();
      set({ kitchenRecords: data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  // Fetch single kitchen record by id
  fetchKitchenRecord: async (id) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(`/api/kitchen/${id}`);
      if (!res.ok) {
        throw new Error('Record not found');
      }
      const data = await res.json();
      set({ loading: false });
      return data;
    } catch (err) {
      set({ error: err.message, loading: false });
      return null;
    }
  },

  // Add kitchen record
  addKitchenRecord: async (week_date, total_meals_served, notes) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post("/api/kitchen", {
        week_date,
        total_meals_served,
        notes,
      });
      set((state) => ({
        kitchenRecords: [response.data, ...state.kitchenRecords],
        loading: false,
      }));
    } catch (err) {
      console.error("addKitchenRecord error:", err);
      
      // Handle specific error messages from backend
      if (err.response?.status === 409) {
        set({ error: `A record for ${week_date} already exists`, loading: false });
      } else if (err.response?.status === 400) {
        set({ error: err.response.data.message, loading: false });
      } else {
        set({ error: "Failed to add kitchen record", loading: false });
      }
    }
  },
});

export default kitchenSlice;