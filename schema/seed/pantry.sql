-- ============================================
-- PANTRY SEED DATA
-- Columns: week_date, first_time_households, returning_households, 
--          total_adults, total_children, total_seniors, total_pounds_distributed, notes
-- ============================================

INSERT INTO pantry (week_date, first_time_households, returning_households, total_adults, total_children, total_seniors, total_pounds_distributed, notes) VALUES
-- 2022 Data (Mondays)
('2022-01-10', 25, 120, 180, 95, 45, 3250, 'Winter demand high'),
('2022-03-14', 30, 135, 200, 105, 50, 3580, 'Spring distribution'),
('2022-05-09', 22, 128, 185, 100, 48, 3420, 'Steady distribution'),
('2022-07-11', 28, 130, 195, 98, 46, 3500, 'Summer operations'),
('2022-09-12', 32, 140, 210, 110, 52, 3750, 'Back to school support'),
('2022-11-14', 35, 150, 225, 120, 55, 4100, 'Thanksgiving week'),

-- 2023 Data (Mondays)
('2023-01-09', 27, 123, 185, 97, 46, 3300, 'Cold weather operations'),
('2023-03-13', 33, 137, 205, 108, 51, 3650, 'Spring increase'),
('2023-05-08', 24, 131, 190, 102, 49, 3480, 'Mid-spring distribution'),
('2023-07-10', 29, 133, 198, 100, 47, 3550, 'Summer steady'),
('2023-09-11', 34, 142, 215, 112, 53, 3800, 'Fall support programs'),
('2023-11-13', 38, 155, 230, 125, 58, 4200, 'Pre-Thanksgiving prep'),

-- 2024 Data (Mondays)
('2024-01-08', 28, 125, 188, 99, 47, 3350, 'New year demand'),
('2024-03-11', 35, 140, 210, 110, 52, 3700, 'Spring growth'),
('2024-05-13', 26, 135, 195, 105, 50, 3520, 'Mother''s Day week'),
('2024-07-08', 30, 136, 200, 103, 48, 3600, 'Summer distribution'),
('2024-09-09', 36, 145, 220, 115, 54, 3850, 'Back to school season'),
('2024-11-11', 40, 160, 240, 130, 60, 4300, 'Holiday season peak');
('2024-11-04', 5, 8, 20, 15, 3, 450.50, 'Normal week', 1),
('2024-11-11', 3, 10, 18, 12, 4, 380.75, 'Veterans Day week', 1),
('2024-11-18', 7, 12, 25, 18, 5, 520.00, 'Thanksgiving prep', 1),
('2024-11-25', 2, 9, 15, 10, 2, 340.25, 'Post-Thanksgiving', 1),
('2024-12-02', 4, 11, 22, 14, 3, 410.50, 'Back to normal', 1),
('2024-12-09', 6, 13, 28, 20, 6, 495.75, 'Holiday rush', 1),
('2024-12-16', 3, 8, 16, 11, 2, 350.00, 'Holiday week', 1);