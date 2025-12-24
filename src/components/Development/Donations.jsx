import { useEffect, useState } from "react";
import useStore from "../../zustand/store";

export default function DonationsPage() {
  const fetchDonations = useStore((state) => state.fetchDonations);
  const donations = useStore((state) => state.donations);
  const loading = useStore((state) => state.loading);
  const error = useStore((state) => state.error);

  const donors = useStore((state) => state.donors);
  const fetchDonors = useStore((state) => state.fetchDonors);
  const addDonation = useStore((state) => state.addDonation);

  const [donorId, setDonorId] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [notable, setNotable] = useState(false);
  const [restricted, setRestricted] = useState(false);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    fetchDonations();
    fetchDonors();
  }, [fetchDonations, fetchDonors]);

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US");

  const handleAddDonation = async (e) => {
    e.preventDefault();

    if (!donorId || !date || !amount) {
      alert("Donor, date, and amount are required");
      return;
    }

    await addDonation({
      donor_id: donorId,
      date,
      amount,
      notable,
      restricted,
      notes,
    });

    setDonorId("");
    setDate("");
    setAmount("");
    setNotable(false);
    setRestricted(false);
    setNotes("");
  };

  if (loading) return <p>Loading donations...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Donations</h2>

      <h3>Add Donation</h3>
      <form onSubmit={handleAddDonation}>
        <select value={donorId} onChange={(e) => setDonorId(e.target.value)}>
          <option value="">Select donor</option>
          {donors.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </select>

        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

        <input
          type="number"
          step="0.01"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <label>
          <input
            type="checkbox"
            checked={notable}
            onChange={(e) => setNotable(e.target.checked)}
          />
          Notable
        </label>

        <label>
          <input
            type="checkbox"
            checked={restricted}
            onChange={(e) => setRestricted(e.target.checked)}
          />
          Restricted
        </label>

        <input
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        <button type="submit">Add Donation</button>
      </form>

      <h3>All Donations</h3>

      {donations.length === 0 ? (
        <p>No donations found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Donor</th>
              <th>Amount</th>
              <th>Notable</th>
              <th>Restricted</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr key={donation.id}>
                <td>{formatDate(donation.date)}</td>
                <td>{donation.donor_name}</td>
                <td>${Number(donation.amount).toFixed(2)}</td>
                <td>{donation.notable ? "Yes" : "No"}</td>
                <td>{donation.restricted ? "Yes" : "No"}</td>
                <td>{donation.notes || "—"}</td>
                <td>
                  <button disabled>Edit</button>
                  <button disabled>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
