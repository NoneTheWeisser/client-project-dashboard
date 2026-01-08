import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useStore from '../../zustand/store';
import '../ComplianceWeekly/ComplianceWeekly.css';

function ComplianceWeeklyForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;
  
  const currentRecord = useStore((state) => state.compliance.currentRecord);
  const loading = useStore((state) => state.compliance.loading);
  const error = useStore((state) => state.compliance.error);
  const fetchRecordById = useStore((state) => state.fetchComplianceRecordById);
  const createRecord = useStore((state) => state.createComplianceRecord);
  const updateRecord = useStore((state) => state.updateComplianceRecord);
  const clearCurrentRecord = useStore((state) => state.clearComplianceCurrentRecord);
  
  const [formData, setFormData] = useState({
    date: '',
    hh_without_children: 0,
    hh_with_children: 0,
    adults: 0,
    children: 0,
    seniors_55_plus: 0,
    female: 0,
    male: 0,
    other_gender: 0,
    white: 0,
    black_african_american: 0,
    native_american: 0,
    other_race: 0,
    multi_racial: 0,
    one_condition: 0,
    two_conditions: 0,
    three_plus_conditions: 0,
    total_exits: 0
  });

  const [validationError, setValidationError] = useState('');
  
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
        hh_without_children: currentRecord.hh_without_children || 0,
        hh_with_children: currentRecord.hh_with_children || 0,
        adults: currentRecord.adults || 0,
        children: currentRecord.children || 0,
        seniors_55_plus: currentRecord.seniors_55_plus || 0,
        female: currentRecord.female || 0,
        male: currentRecord.male || 0,
        other_gender: currentRecord.other_gender || 0,
        white: currentRecord.white || 0,
        black_african_american: currentRecord.black_african_american || 0,
        native_american: currentRecord.native_american || 0,
        other_race: currentRecord.other_race || 0,
        multi_racial: currentRecord.multi_racial || 0,
        one_condition: currentRecord.one_condition || 0,
        two_conditions: currentRecord.two_conditions || 0,
        three_plus_conditions: currentRecord.three_plus_conditions || 0,
        total_exits: currentRecord.total_exits || 0
      });
    }
  }, [currentRecord, isEditMode]);
  
  // Calculate totals for validation
  const calculateTotals = () => {
    const totalAge = formData.adults + formData.children + formData.seniors_55_plus;
    const totalGender = formData.female + formData.male + formData.other_gender;
    const totalRace = formData.white + formData.black_african_american + formData.native_american + 
                      formData.other_race + formData.multi_racial;
    
    return { totalAge, totalGender, totalRace };
  };

  const totals = calculateTotals();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'date') {
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
    
    // Clear validation error when user makes changes
    setValidationError('');
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate totals match
    const { totalAge, totalGender, totalRace } = calculateTotals();
    
    if (totalAge !== totalGender || totalAge !== totalRace || totalGender !== totalRace) {
      const errorMsg = `Demographics validation failed:\n` +
                      `Age Total: ${totalAge}\n` +
                      `Gender Total: ${totalGender}\n` +
                      `Race Total: ${totalRace}\n\n` +
                      `All three totals must match!`;
      setValidationError(errorMsg);
      alert(errorMsg);
      return;
    }
    
    try {
      if (isEditMode) {
        await updateRecord(id, formData);
        alert('Record updated successfully!');
      } else {
        await createRecord(formData);
        alert('Record created successfully!');
      }
      navigate('/compliance');
    } catch (err) {
      alert(`Failed to ${isEditMode ? 'update' : 'create'} record: ${err.message}`);
    }
  };
  
  if (loading && isEditMode) return <div className="loading-state">Loading...</div>;
  if (error && isEditMode) return <div className="error-state">Error: {error}</div>;
  
  return (
    <div className="weekly-form-container">
      <h2>{isEditMode ? 'Edit' : 'New'} Compliance Weekly Report</h2>
      
      <button className="back-button" onClick={() => navigate('/compliance')}>
        ← Back to List
      </button>

      {/* Validation Summary Box */}
      <div style={{
        padding: '15px',
        marginBottom: '20px',
        border: '2px solid #007bff',
        borderRadius: '4px',
        backgroundColor: '#e7f3ff'
      }}>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#333' }}>
          Demographics Totals (Must Match)
        </h3>
        <div style={{ display: 'flex', gap: '20px', fontSize: '14px' }}>
          <div>
            <strong>Age Total:</strong> 
            <span style={{ 
              marginLeft: '8px',
              color: totals.totalAge === totals.totalGender && totals.totalAge === totals.totalRace ? 'green' : 'red',
              fontWeight: 'bold'
            }}>
              {totals.totalAge}
            </span>
          </div>
          <div>
            <strong>Gender Total:</strong> 
            <span style={{ 
              marginLeft: '8px',
              color: totals.totalGender === totals.totalAge && totals.totalGender === totals.totalRace ? 'green' : 'red',
              fontWeight: 'bold'
            }}>
              {totals.totalGender}
            </span>
          </div>
          <div>
            <strong>Race Total:</strong> 
            <span style={{ 
              marginLeft: '8px',
              color: totals.totalRace === totals.totalAge && totals.totalRace === totals.totalGender ? 'green' : 'red',
              fontWeight: 'bold'
            }}>
              {totals.totalRace}
            </span>
          </div>
        </div>
        {totals.totalAge !== totals.totalGender || totals.totalAge !== totals.totalRace ? (
          <p style={{ margin: '10px 0 0 0', color: 'red', fontSize: '13px' }}>
            ⚠️ Totals do not match! Please adjust your numbers before submitting.
          </p>
        ) : totals.totalAge > 0 ? (
          <p style={{ margin: '10px 0 0 0', color: 'green', fontSize: '13px' }}>
            ✅ All totals match!
          </p>
        ) : null}
      </div>

      {validationError && (
        <div style={{
          padding: '15px',
          marginBottom: '20px',
          border: '2px solid #dc3545',
          borderRadius: '4px',
          backgroundColor: '#f8d7da',
          color: '#721c24',
          whiteSpace: 'pre-line'
        }}>
          <strong>Validation Error:</strong><br />
          {validationError}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        
        <fieldset>
          <legend>Report Date</legend>
          <div className="form-group">
            <label>Week Date: *</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <p className="form-helper-text">Select any day in the week (will be converted to Monday)</p>
          </div>
        </fieldset>
        
        <fieldset>
          <legend>Households</legend>
          <div className="form-group">
            <label>Households without Children:</label>
            <input
              type="text"
              inputMode="numeric"
              name="hh_without_children"
              value={formData.hh_without_children}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label>Households with Children:</label>
            <input
              type="text"
              inputMode="numeric"
              name="hh_with_children"
              value={formData.hh_with_children}
              onChange={handleChange}
            />
          </div>
        </fieldset>
        
        <fieldset>
          <legend>Age Demographics</legend>
          <div style={{ 
            padding: '10px', 
            marginBottom: '15px', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            Total: {totals.totalAge}
          </div>
          
          <div className="form-group">
            <label>Adults:</label>
            <input
              type="text"
              inputMode="numeric"
              name="adults"
              value={formData.adults}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label>Children:</label>
            <input
              type="text"
              inputMode="numeric"
              name="children"
              value={formData.children}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label>Seniors (55+):</label>
            <input
              type="text"
              inputMode="numeric"
              name="seniors_55_plus"
              value={formData.seniors_55_plus}
              onChange={handleChange}
            />
          </div>
        </fieldset>
        
        <fieldset>
          <legend>Gender Demographics</legend>
          <div style={{ 
            padding: '10px', 
            marginBottom: '15px', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            Total: {totals.totalGender}
          </div>
          
          <div className="form-group">
            <label>Female:</label>
            <input
              type="text"
              inputMode="numeric"
              name="female"
              value={formData.female}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label>Male:</label>
            <input
              type="text"
              inputMode="numeric"
              name="male"
              value={formData.male}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label>Other Gender:</label>
            <input
              type="text"
              inputMode="numeric"
              name="other_gender"
              value={formData.other_gender}
              onChange={handleChange}
            />
          </div>
        </fieldset>
        
        <fieldset>
          <legend>Race Demographics</legend>
          <div style={{ 
            padding: '10px', 
            marginBottom: '15px', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            Total: {totals.totalRace}
          </div>
          
          <div className="form-group">
            <label>White:</label>
            <input
              type="text"
              inputMode="numeric"
              name="white"
              value={formData.white}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label>Black/African American:</label>
            <input
              type="text"
              inputMode="numeric"
              name="black_african_american"
              value={formData.black_african_american}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label>Native American:</label>
            <input
              type="text"
              inputMode="numeric"
              name="native_american"
              value={formData.native_american}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label>Other Race:</label>
            <input
              type="text"
              inputMode="numeric"
              name="other_race"
              value={formData.other_race}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label>Multi-Racial:</label>
            <input
              type="text"
              inputMode="numeric"
              name="multi_racial"
              value={formData.multi_racial}
              onChange={handleChange}
            />
          </div>
        </fieldset>
        
        <fieldset>
          <legend>Health Conditions</legend>
          <div className="form-group">
            <label>One Condition:</label>
            <input
              type="text"
              inputMode="numeric"
              name="one_condition"
              value={formData.one_condition}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label>Two Conditions:</label>
            <input
              type="text"
              inputMode="numeric"
              name="two_conditions"
              value={formData.two_conditions}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label>Three+ Conditions:</label>
            <input
              type="text"
              inputMode="numeric"
              name="three_plus_conditions"
              value={formData.three_plus_conditions}
              onChange={handleChange}
            />
          </div>
        </fieldset>
        
        <fieldset>
          <legend>Other Metrics</legend>
          <div className="form-group">
            <label>Total Exits:</label>
            <input
              type="text"
              inputMode="numeric"
              name="total_exits"
              value={formData.total_exits}
              onChange={handleChange}
            />
          </div>
        </fieldset>
        
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {isEditMode ? 'Update' : 'Create'} Report
          </button>
          
          <button 
            type="button" 
            onClick={() => navigate('/compliance')}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ComplianceWeeklyForm;