import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useStore from '../../zustand/store';

export default function PantryWeeklyForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  const pantryRecords = useStore((state) => state.pantryRecords);
  const addPantryRecord = useStore((state) => state.addPantryRecord);
  const editPantryRecord = useStore((state) => state.editPantryRecord);
  const loading = useStore((state) => state.loading);

  const [formData, setFormData] = useState({
    weekDate: getCurrentWeekMonday(),
    firstTimeHouseholds: '',
    returningHouseholds: '',
    totalAdults: '',
    totalChildren: '',
    totalSeniors: '',
    totalPounds: ''
  });

  function getCurrentWeekMonday() {
    const today = new Date();
    const day = today.getDay();
    const diff = today.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(today.setDate(diff));
    return monday.toISOString().split('T')[0];
  }

  useEffect(() => {
    if (isEditMode) {
      const record = pantryRecords.find((r) => r.id === parseInt(id));
      if (record) {
        setFormData({
          weekDate: record.week_date?.split('T')[0] || '',
          firstTimeHouseholds: record.first_time_households || '',
          returningHouseholds: record.returning_households || '',
          totalAdults: record.total_adults || '',
          totalChildren: record.total_children || '',
          totalSeniors: record.total_seniors || '',
          totalPounds: record.total_pounds_distributed || ''
        });
      }
    }
  }, [id, isEditMode, pantryRecords]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      week_date: formData.weekDate,
      first_time_households: parseInt(formData.firstTimeHouseholds) || 0,
      returning_households: parseInt(formData.returningHouseholds) || 0,
      total_adults: parseInt(formData.totalAdults) || 0,
      total_children: parseInt(formData.totalChildren) || 0,
      total_seniors: parseInt(formData.totalSeniors) || 0,
      total_pounds_distributed: parseFloat(formData.totalPounds) || 0
    };

    if (isEditMode) {
      await editPantryRecord(parseInt(id), payload);
    } else {
      await addPantryRecord(payload);
    }

    navigate('/pantry/weekly');
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h2>{isEditMode ? 'Edit Pantry Record' : 'Add New Pantry Record'}</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="weekDate" className="form-label">
                    Week Date <span className="text-danger">*</span>
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="weekDate"
                    name="weekDate"
                    value={formData.weekDate}
                    onChange={handleChange}
                    required
                    disabled={isEditMode}
                  />
                  <small className="text-muted">Auto-calculated to Monday of the week</small>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstTimeHouseholds" className="form-label">
                      First-Time Households <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="firstTimeHouseholds"
                      name="firstTimeHouseholds"
                      value={formData.firstTimeHouseholds}
                      onChange={handleChange}
                      required
                      min="0"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="returningHouseholds" className="form-label">
                      Returning Households <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="returningHouseholds"
                      name="returningHouseholds"
                      value={formData.returningHouseholds}
                      onChange={handleChange}
                      required
                      min="0"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="totalAdults" className="form-label">
                      Total Adults
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="totalAdults"
                      name="totalAdults"
                      value={formData.totalAdults}
                      onChange={handleChange}
                      min="0"
                    />
                  </div>

                  <div className="col-md-4 mb-3">
                    <label htmlFor="totalChildren" className="form-label">
                      Total Children
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="totalChildren"
                      name="totalChildren"
                      value={formData.totalChildren}
                      onChange={handleChange}
                      min="0"
                    />
                  </div>

                  <div className="col-md-4 mb-3">
                    <label htmlFor="totalSeniors" className="form-label">
                      Total Seniors (55+)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="totalSeniors"
                      name="totalSeniors"
                      value={formData.totalSeniors}
                      onChange={handleChange}
                      min="0"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="totalPounds" className="form-label">
                    Total Pounds Distributed <span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    className="form-control"
                    id="totalPounds"
                    name="totalPounds"
                    value={formData.totalPounds}
                    onChange={handleChange}
                    required
                    min="0"
                  />
                </div>

                <div className="d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => navigate('/pantry/weekly')}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? 'Saving...' : isEditMode ? 'Update Record' : 'Add Record'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}