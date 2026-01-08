import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../../zustand/store';

function FinanceWeeklyList() {
  const navigate = useNavigate();
  const [year, setYear] = useState(2025);
  
  const records = useStore((state) => state.finance.records);
  const loading = useStore((state) => state.finance.loading);
  const error = useStore((state) => state.finance.error);
  const fetchRecords = useStore((state) => state.fetchFinanceRecords);
  const deleteRecord = useStore((state) => state.deleteFinanceRecord);
  
  useEffect(() => {
    fetchRecords(year);
  }, [fetchRecords, year]);
  
  const formatDate = (dateString) => {
    if (!dateString) return '—';
    return dateString.split('T')[0];
  };
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount || 0);
  };
  
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      await deleteRecord(id);
    }
  };
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
  
  return (
    <div>
      <h2>Finance Weekly Reports</h2>
      
      {/* Year Selector */}
      <div style={{ marginBottom: '20px' }}>
        <label>View Year: </label>
        <select 
          value={year} 
          onChange={(e) => setYear(parseInt(e.target.value))}
          style={{ marginLeft: '10px', padding: '5px' }}
        >
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
        </select>
      </div>
      
      {/* Navigation Buttons */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <button 
          className="btn btn-sm btn-primary"
          onClick={() => navigate('/finance/weekly/new')}
        >
          ➕ Enter Finance Weekly Data
        </button>
        
        <button 
          className="btn btn-sm btn-info"
          onClick={() => navigate('/finance/reports')}
        >
          📊 Finance Reports
        </button>
      </div>
      
      {/* Table */}
      {records.length === 0 ? (
        <p>No records found for {year}. Click "New Report" to create one.</p>
      ) : (
        <div className="table-container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <table className="table-app table-hover table-striped">
            <thead>
              <tr>
                <th>Week Of</th>
                <th>Total Assets</th>
                <th>Operating Balance</th>
                <th>Revenue</th>
                <th>Bills Paid</th>
                <th>Payroll</th>
                <th>Net Change</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {records.map((r) => (
                <tr key={r.id}>
                  <td>{formatDate(r.date)}</td>
                  <td>{formatCurrency(r.total_assets)}</td>
                  <td>{formatCurrency(r.operating_account_balance)}</td>
                  <td style={{ color: 'green' }}>{formatCurrency(r.revenue_received)}</td>
                  <td style={{ color: 'red' }}>{formatCurrency(r.bills_paid)}</td>
                  <td style={{ color: 'red' }}>{formatCurrency(r.payroll_paid)}</td>
                  <td style={{ color: r.net_change >= 0 ? 'green' : 'red' }}>
                    {formatCurrency(r.net_change)}
                  </td>
                  <td>
                    <div className="table-actions">
                      <button
                        className="btn btn-sm btn-table-edit"
                        onClick={() => navigate(`/finance/weekly/edit/${r.id}`)}
                      >
                        Edit
                      </button>
                      
                      <button
                        className="btn btn-sm btn-table-delete"
                        onClick={() => handleDelete(r.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default FinanceWeeklyList;
