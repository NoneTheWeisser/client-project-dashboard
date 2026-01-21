

import { useState, useEffect, useMemo } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import useStore from '../../zustand/store';
import './ComplianceWeekly.css';

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
    total_exits: 0,
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
        total_exits: currentRecord.total_exits || 0,
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
  
  // Calculate totals for validation using useMemo for performance
  const totals = useMemo(() => {
    const totalAge = formData.adults + formData.children + formData.seniors_55_plus;
    const totalGender = formData.female + formData.male + formData.other_gender;
    const totalRace = formData.white + formData.black_african_american + 
                      formData.native_american + formData.other_race + formData.multi_racial;
    const totalHouseholds = formData.hh_without_children + formData.hh_with_children;
    
    return { totalAge, totalGender, totalRace, totalHouseholds };
  }, [formData]);

  const allMatch = totals.totalAge === totals.totalGender && totals.totalAge === totals.totalRace;
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate totals match
    if (!allMatch) {
      alert('Demographics totals must match! Please check Age, Gender, and Race totals.');
      return;
    }
    
    // Validate at least some data is entered
    if (totals.totalAge === 0) {
      alert('Please enter demographic data before submitting.');
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
      navigate('/compliance/weekly');
    } catch (err) {
      console.error('Form submission error:', err);
      alert(`Failed to ${isEditMode ? 'update' : 'create'} record: ${err.message}`);
    }
  };
  
  if (loading && isEditMode) return <div className="table-loading">Loading...</div>;
  if (error && isEditMode) return <div className="table-error">Error: {error}</div>;
  
  return (
    <div className="hub-container">
      <div className="department-header">
        <h2>Compliance - {isEditMode ? 'Edit' : 'New'} Weekly Report</h2>
        <div className="department-actions">
          <Link to="/compliance" className="active">Data Entry</Link>
          <Link to="/compliance/reports">Reports</Link>
        </div>
      </div>

      <div className="form-container">
        <button 
          className="secondary back-button" 
          onClick={() => navigate('/compliance/weekly')}
        >
          ← Back to List
        </button>
        
        {/* Validation Summary */}
        <div className={`validation-summary ${allMatch ? 'valid' : 'invalid'}`}>
          <h4>Demographics Totals (Must Match)</h4>
          <div className="totals-display">
            <span className={allMatch ? 'total-valid' : 'total-invalid'}>
              Age Total: {totals.totalAge}
            </span>
            <span className={allMatch ? 'total-valid' : 'total-invalid'}>
              Gender Total: {totals.totalGender}
            </span>
            <span className={allMatch ? 'total-valid' : 'total-invalid'}>
              Race Total: {totals.totalRace}
            </span>
          </div>
          {allMatch ? (
            <p className="validation-message valid-message">✓ All totals match!</p>
          ) : (
            <p className="validation-message invalid-message">⚠️ Totals must match to submit</p>
          )}
        </div>
        
        <form onSubmit={handleSubmit} className="grid-form">
          
          {/* Week Date */}
          <label>
            <span>Week Date: *</span>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>
          
          {/* Household Information */}
          <h4 className="section-header">Household Information</h4>
          <div className="form-row">
            <label>
              <span>Households Without Children:</span>
              <input
                type="text"
                inputMode="numeric"
                name="hh_without_children"
                value={formData.hh_without_children}
                onChange={handleChange}
              />
            </label>
            
            <label>
              <span>Households With Children:</span>
              <input
                type="text"
                inputMode="numeric"
                name="hh_with_children"
                value={formData.hh_with_children}
                onChange={handleChange}
              />
            </label>
            
            <label className="calculated-field">
              <span>Total Households (calculated):</span>
              <input
                type="text"
                value={totals.totalHouseholds}
                readOnly
                className="readonly-input"
              />
            </label>
          </div>
          
          {/* Age Demographics */}
          <h4 className="section-header with-total">
            <span>Age Demographics</span>
            <span className={`section-total ${allMatch ? 'total-valid' : 'total-invalid'}`}>
              Total: {totals.totalAge}
            </span>
          </h4>
          <div className="form-row">
            <label>
              <span>Adults:</span>
              <input
                type="text"
                inputMode="numeric"
                name="adults"
                value={formData.adults}
                onChange={handleChange}
              />
            </label>
            
            <label>
              <span>Children:</span>
              <input
                type="text"
                inputMode="numeric"
                name="children"
                value={formData.children}
                onChange={handleChange}
              />
            </label>
            
            <label>
              <span>Seniors 55+:</span>
              <input
                type="text"
                inputMode="numeric"
                name="seniors_55_plus"
                value={formData.seniors_55_plus}
                onChange={handleChange}
              />
            </label>
          </div>
          
          {/* Gender Demographics */}
          <h4 className="section-header with-total">
            <span>Gender Demographics</span>
            <span className={`section-total ${allMatch ? 'total-valid' : 'total-invalid'}`}>
              Total: {totals.totalGender}
            </span>
          </h4>
          <div className="form-row">
            <label>
              <span>Female:</span>
              <input
                type="text"
                inputMode="numeric"
                name="female"
                value={formData.female}
                onChange={handleChange}
              />
            </label>
            
            <label>
              <span>Male:</span>
              <input
                type="text"
                inputMode="numeric"
                name="male"
                value={formData.male}
                onChange={handleChange}
              />
            </label>
            
            <label>
              <span>Other Gender:</span>
              <input
                type="text"
                inputMode="numeric"
                name="other_gender"
                value={formData.other_gender}
                onChange={handleChange}
              />
            </label>
          </div>
          
          {/* Race Demographics */}
          <h4 className="section-header with-total">
            <span>Race Demographics</span>
            <span className={`section-total ${allMatch ? 'total-valid' : 'total-invalid'}`}>
              Total: {totals.totalRace}
            </span>
          </h4>
          <div className="form-row-5">
            <label>
              <span>White:</span>
              <input
                type="text"
                inputMode="numeric"
                name="white"
                value={formData.white}
                onChange={handleChange}
              />
            </label>
            
            <label>
              <span>Black/African American:</span>
              <input
                type="text"
                inputMode="numeric"
                name="black_african_american"
                value={formData.black_african_american}
                onChange={handleChange}
              />
            </label>
            
            <label>
              <span>Native American:</span>
              <input
                type="text"
                inputMode="numeric"
                name="native_american"
                value={formData.native_american}
                onChange={handleChange}
              />
            </label>
            
            <label>
              <span>Other Race:</span>
              <input
                type="text"
                inputMode="numeric"
                name="other_race"
                value={formData.other_race}
                onChange={handleChange}
              />
            </label>
            
            <label>
              <span>Multi-Racial:</span>
              <input
                type="text"
                inputMode="numeric"
                name="multi_racial"
                value={formData.multi_racial}
                onChange={handleChange}
              />
            </label>
          </div>
          
          {/* Conditions */}
          <h4 className="section-header">Conditions</h4>
          <div className="form-row">
            <label>
              <span>One Condition:</span>
              <input
                type="text"
                inputMode="numeric"
                name="one_condition"
                value={formData.one_condition}
                onChange={handleChange}
              />
            </label>
            
            <label>
              <span>Two Conditions:</span>
              <input
                type="text"
                inputMode="numeric"
                name="two_conditions"
                value={formData.two_conditions}
                onChange={handleChange}
              />
            </label>
            
            <label>
              <span>Three+ Conditions:</span>
              <input
                type="text"
                inputMode="numeric"
                name="three_plus_conditions"
                value={formData.three_plus_conditions}
                onChange={handleChange}
              />
            </label>
          </div>
          
          {/* Exit Destinations */}
          <h4 className="section-header">Exit Destinations</h4>
          <div className="form-row">
            <label>
              <span>Total Exits:</span>
              <input
                type="text"
                inputMode="numeric"
                name="total_exits"
                value={formData.total_exits}
                onChange={handleChange}
              />
            </label>
          </div>
          
          {/* Notes */}
          <h4 className="section-header">Additional Notes</h4>
          <label className="full-width">
            <span>Notes:</span>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="4"
            />
          </label>
          
          <div className="form-actions">
            <button type="submit" className="primary" disabled={!allMatch}>
              {isEditMode ? 'Update' : 'Create'} Report
            </button>
            
            <button 
              type="button" 
              onClick={() => navigate('/compliance/weekly')}
              className="secondary"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ComplianceWeeklyForm;