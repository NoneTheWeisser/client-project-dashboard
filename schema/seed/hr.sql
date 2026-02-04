
-- ============================================
-- HR SEED DATA
-- Columns: week_date, total_positions, open_positions, new_hires_this_week, 
--          employee_turnover, evaluations_due, notes
-- ============================================

INSERT INTO hr_weekly (week_date, total_positions, open_positions, new_hires_this_week, employee_turnover, evaluations_due, notes) VALUES
-- 2022 Data (Mondays)
('2022-01-10', 45, 5, 2, 1, 3, 'Q1 hiring season'),
('2022-03-14', 46, 4, 1, 0, 4, 'Spring staffing stable'),
('2022-05-09', 47, 3, 1, 0, 2, 'Mid-year hiring'),
('2022-07-11', 48, 4, 2, 1, 3, 'Summer positions filled'),
('2022-09-12', 47, 5, 1, 2, 5, 'Fall turnover'),
('2022-11-14', 48, 4, 2, 1, 6, 'Pre-holiday staffing'),

-- 2023 Data (Mondays)
('2023-01-09', 47, 5, 3, 1, 7, 'New year hiring push'),
('2023-03-13', 50, 3, 2, 0, 5, 'Growth phase'),
('2023-05-08', 51, 3, 1, 0, 4, 'Mid-spring stability'),
('2023-07-10', 51, 4, 1, 1, 3, 'Summer operations'),
('2023-09-11', 52, 2, 2, 0, 6, 'Strong retention'),
('2023-11-13', 53, 3, 1, 1, 8, 'Year-end planning'),

-- 2024 Data (Mondays)
('2024-01-08', 52, 4, 2, 1, 9, 'Annual review cycle'),
('2024-03-11', 53, 3, 1, 0, 5, 'Q1 stable'),
('2024-05-13', 54, 2, 3, 0, 4, 'Spring expansion'),
('2024-07-08', 55, 3, 1, 1, 6, 'Summer operations'),
('2024-09-09', 55, 2, 2, 1, 7, 'Fall hiring'),
('2024-11-11', 56, 3, 1, 0, 8, 'Holiday season staffing');
('2024-11-04', 12, 2, 0, 0, 3, 'Normal week', 1),
('2024-11-11', 12, 2, 1, 0, 2, 'One new hire in Kitchen', 1),
('2024-11-18', 12, 1, 0, 0, 4, 'Thanksgiving prep week', 1),
('2024-11-25', 12, 1, 0, 1, 1, 'One termination', 1),
('2024-12-02', 13, 2, 1, 0, 5, 'New development position added', 1),
('2024-12-09', 13, 2, 0, 0, 3, 'Holiday season', 1),
('2024-12-16', 13, 1, 1, 0, 2, 'End of year hiring', 1);