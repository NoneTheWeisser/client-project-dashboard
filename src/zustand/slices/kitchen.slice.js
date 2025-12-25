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
});

export default kitchenSlice;