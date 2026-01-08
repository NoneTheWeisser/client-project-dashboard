import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useStore from '../../zustand/store';

export default function HRWeeklyForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  const hrRecords = useStore((state) => state.hrRecords);
  const addHRRecord = useStore((state) => state.addHRRecord);
  const editHRRecord = useStore((state) => state.editHRRecord);
  const hrLoading = useStore((state) => state.hrLoading);

  const [formData, setFormData] = useState({
    weekDate: '',
    totalPositions: '',
    openPositions: '',
    newHires: '',
    turnover: '',
    evaluations: '',
    notes: ''
  });

  useEffect(() => {
    if (isEditMode) {
      const record = hrRecords.find((r) => r.id === parseInt(id));
      if (record) {
        setFormData({
          weekDate: record.week_date?.split('T')[0] || '',
          totalPositions: record.total_positions || '',
          openPositions: record.open_positions || '',
          newHires: record.new_hires_this_week || '',
          turnover: record.employee_turnover || '',
          evaluations: record.evaluations_due || '',
          notes: record.notes || ''
        });
      }
    }
  }, [id, isEditMode, hrRecords]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditMode) {
      await editHRRecord(
        parseInt(id),
        formData.totalPositions,
        formData.openPositions,
        formData.newHires,
        formData.turnover,
        formData.evaluations,
        formData.notes
      );
    } else {
      await addHRRecord(
        formData.weekDate,
        formData.totalPositions,
        formData.openPositions,
        formData.newHires,
        formData.turnover,
        formData.evaluations,
        formData.notes
      );
    }

    navigate('/hr/weekly');
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h2>{isEditMode ? 'Edit HR Record' : 'Add New HR Record'}</h2>
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
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="totalPositions" className="form-label">
                      Total Positions <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="totalPositions"
                      name="totalPositions"
                      value={formData.totalPositions}
                      onChange={handleChange}
                      required
                      min="0"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="openPositions" className="form-label">
                      Open Positions <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="openPositions"
                      name="openPositions"
                      value={formData.openPositions}
                      onChange={handleChange}
                      required
                      min="0"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="newHires" className="form-label">
                      New Hires This Week
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="newHires"
                      name="newHires"
                      value={formData.newHires}
                      onChange={handleChange}
                      min="0"
                    />
                  </div>

                  <div className="col-md-4 mb-3">
                    <label htmlFor="turnover" className="form-label">
                      Employee Turnover
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="turnover"
                      name="turnover"
                      value={formData.turnover}
                      onChange={handleChange}
                      min="0"
                    />
                  </div>

                  <div className="col-md-4 mb-3">
                    <label htmlFor="evaluations" className="form-label">
                      Evaluations Due
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="evaluations"
                      name="evaluations"
                      value={formData.evaluations}
                      onChange={handleChange}
                      min="0"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="notes" className="form-label">
                    Notes
                  </label>
                  <textarea
                    className="form-control"
                    id="notes"
                    name="notes"
                    rows="4"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Additional notes or comments..."
                  />
                </div>

                <div className="d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => navigate('/hr/weekly')}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={hrLoading}
                  >
                    {hrLoading ? 'Saving...' : isEditMode ? 'Update Record' : 'Add Record'}
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