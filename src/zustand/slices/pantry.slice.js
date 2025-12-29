import axios from "axios";

const pantrySlice = (set, get) => ({
  pantryRecords: [],
  loading: false,
  error: null,
  // get all records
  fetchPantryRecords: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("/api/pantry");
      const data = await res.json();
      set({ pantryRecords: data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
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

      if (err.response?.status === 409) {
        set({
          error: `A record for ${week_date} already exists`,
          loading: false,
        });
      } else if (err.response?.status === 400) {
        set({ error: err.response.data.message, loading: false });
      } else {
        set({ error: "Failed to add kitchen record", loading: false });
      }
    }
  },
});

export default pantrySlice;
