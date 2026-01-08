import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useStore from '../../zustand/store';
import '../Shelter/Shelter.css';

function ShelterWeeklyForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;
  
  const currentRecord = useStore((state) => state.shelter.currentRecord);
  const loading = useStore((state) => state.shelter.loading);
  const error = useStore((state) => state.shelter.error);
  const fetchRecordById = useStore((state) => state.fetchShelterRecordById);
  const createRecord = useStore((state) => state.createShelterRecord);
  const updateRecord = useStore((state) => state.updateShelterRecord);
  const clearCurrentRecord = useStore((state) => state.clearShelterCurrentRecord);
  
  const [formData, setFormData] = useState({
    date: '',
    single_men: 0,
    housing_men: 0,
    single_women: 0,
    housing_women: 0,
    families: 0,
    hybrid_va_holdover: 0,
    incident_reports: 0,
    community_members_served: 0,
    nights_found_sleeping_outside: 0,
    notes: ''
  });
  
  useEffect(() => {
    if (isEditMode && id) {
      fetchRecordById(id);
    }
    
    return () => {
      clearCurrentRecord();
    };
  }, [id, isEditMode, fetchRecordById, clearCurrentRecord]);
  
  useEffect(() => {
    if (currentRecord && isEditMode) {
      setFormData({
        date: currentRecord.date ? currentRecord.date.split('T')[0] : '',
        single_men: currentRecord.single_men || 0,
        housing_men: currentRecord.housing_men || 0,
        single_women: currentRecord.single_women || 0,
        housing_women: currentRecord.housing_women || 0,
        families: currentRecord.families || 0,
        hybrid_va_holdover: currentRecord.hybrid_va_holdover || 0,
        incident_reports: currentRecord.incident_reports || 0,
        community_members_served: currentRecord.community_members_served || 0,
        nights_found_sleeping_outside: currentRecord.nights_found_sleeping_outside || 0,
        notes: currentRecord.notes || ''
      });
    }
  }, [currentRecord, isEditMode]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'date' || name === 'notes') {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    } else {
      const numericValue = value.replace(/\D/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: numericValue === '' ? 0 : parseInt(numericValue, 10)
      }));
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (isEditMode) {
        await updateRecord(id, formData);
        alert('Record updated successfully!');
      } else {
        await createRecord(formData);
        alert('Record created successfully!');
      }
      navigate('/shelter');
    } catch (err) {
      alert(`Failed to ${isEditMode ? 'update' : 'create'} record: ${err.message}`);
    }
  };
  
  if (loading && isEditMode) return <div>Loading...</div>;
  if (error && isEditMode) return <div style={{ color: 'red' }}>Error: {error}</div>;
  
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2>{isEditMode ? 'Edit' : 'New'} Shelter Weekly Report</h2>
      
      <form onSubmit={handleSubmit}>
        
        {/* Week Information */}
        <fieldset style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '4px' }}>
          <legend style={{ fontWeight: 'bold', fontSize: '16px' }}>Week Information</legend>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Week Of (Monday):
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>
        </fieldset>
        
        {/* Guest Categories */}
        <fieldset style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '4px' }}>
          <legend style={{ fontWeight: 'bold', fontSize: '16px' }}>Guest Categories</legend>
          
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Single Men:</label>
            <input
              type="text"
              inputMode="numeric"
              name="single_men"
              value={formData.single_men}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>
          
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Housing Men:</label>
            <input
              type="text"
              inputMode="numeric"
              name="housing_men"
              value={formData.housing_men}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>
          
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Single Women:</label>
            <input
              type="text"
              inputMode="numeric"
              name="single_women"
              value={formData.single_women}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>
          
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Housing Women:</label>
            <input
              type="text"
              inputMode="numeric"
              name="housing_women"
              value={formData.housing_women}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>
          
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Families:</label>
            <input
              type="text"
              inputMode="numeric"
              name="families"
              value={formData.families}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>
          
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Hybrid/VA Holdover:</label>
            <input
              type="text"
              inputMode="numeric"
              name="hybrid_va_holdover"
              value={formData.hybrid_va_holdover}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>
        </fieldset>
        
        {/* Operations & Outreach */}
        <fieldset style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '4px' }}>
          <legend style={{ fontWeight: 'bold', fontSize: '16px' }}>Operations & Outreach</legend>
          
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Incident Reports:</label>
            <input
              type="text"
              inputMode="numeric"
              name="incident_reports"
              value={formData.incident_reports}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>
          
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Community Members Served:</label>
            <input
              type="text"
              inputMode="numeric"
              name="community_members_served"
              value={formData.community_members_served}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>
          
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Nights Found Sleeping Outside:</label>
            <input
              type="text"
              inputMode="numeric"
              name="nights_found_sleeping_outside"
              value={formData.nights_found_sleeping_outside}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>
        </fieldset>
        
        {/* Notes */}
        <fieldset style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '4px' }}>
          <legend style={{ fontWeight: 'bold', fontSize: '16px' }}>Notes</legend>
          
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>Additional Notes:</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="4"
              style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'inherit' }}
            />
          </div>
        </fieldset>
        
        {/* Buttons */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <button 
            type="submit" 
            style={{ 
              padding: '10px 20px', 
              background: '#28a745', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            {isEditMode ? 'Update' : 'Create'} Report
          </button>
          
          <button 
            type="button" 
            onClick={() => navigate('/shelter')}
            style={{ 
              padding: '10px 20px', 
              background: '#6c757d', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ShelterWeeklyForm;