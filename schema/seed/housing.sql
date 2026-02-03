-- ---------------- Housing Buildings ----------------
INSERT INTO housing_building (name)
VALUES
('Bright Sky Apartments'),
('Silver Linings Apartments'),
('Micah''s Mission');

-- ---------------- Housing: Last 6 Months ----------------
INSERT INTO housing (
    housing_building_id, month_date, occupancy_percent, operational_reserves, replacement_reserves,
    current_vacancies, upcoming_vacancies, upcoming_new_leases, notes
)
VALUES
-- Bright Sky Apartments
((SELECT id FROM housing_buildings WHERE name='Bright Sky Apartments'), '2025-08-01', 92.0, 11300, 4700, 2, 1, 1, 'August data'),
((SELECT id FROM housing_buildings WHERE name='Bright Sky Apartments'), '2025-09-01', 91.0, 11500, 4800, 2, 1, 1, 'September data'),
((SELECT id FROM housing_buildings WHERE name='Bright Sky Apartments'), '2025-10-01', 89.5, 11800, 4900, 3, 1, 2, 'October data'),
((SELECT id FROM housing_buildings WHERE name='Bright Sky Apartments'), '2025-11-01', 90.5, 12000, 5000, 3, 1, 2, 'November data'),
((SELECT id FROM housing_buildings WHERE name='Bright Sky Apartments'), '2025-12-01', 85.0, 12500, 5200, 4, 2, 1, 'December data'),
((SELECT id FROM housing_buildings WHERE name='Bright Sky Apartments'), '2026-01-01', 87.0, 12700, 5300, 3, 2, 1, 'January data'),

-- Silver Linings Apartments
((SELECT id FROM housing_buildings WHERE name='Silver Linings Apartments'), '2025-08-01', 94.0, 14200, 5700, 1, 0, 1, 'August data'),
((SELECT id FROM housing_buildings WHERE name='Silver Linings Apartments'), '2025-09-01', 93.0, 14500, 5800, 1, 0, 1, 'September data'),
((SELECT id FROM housing_buildings WHERE name='Silver Linings Apartments'), '2025-10-01', 91.5, 14800, 5900, 2, 1, 1, 'October data'),
((SELECT id FROM housing_buildings WHERE name='Silver Linings Apartments'), '2025-11-01', 92.0, 15000, 6000, 2, 0, 1, 'November data'),
((SELECT id FROM housing_buildings WHERE name='Silver Linings Apartments'), '2025-12-01', 88.0, 15500, 6200, 3, 1, 2, 'December data'),
((SELECT id FROM housing_buildings WHERE name='Silver Linings Apartments'), '2026-01-01', 89.0, 15700, 6300, 2, 2, 1, 'January data');


INSERT INTO housing (
  housing_building_id, month_date, occupancy_percent,
  operational_reserves, replacement_reserves,
  current_vacancies, upcoming_vacancies, upcoming_new_leases, notes
)
VALUES
((SELECT id FROM housing_buildings WHERE name='Bright Sky Apartments'),
 '2026-02-01', 88.5, 12900, 5400, 2, 1, 1, 'February data'),

((SELECT id FROM housing_buildings WHERE name='Silver Linings Apartments'),
 '2026-02-01', 90.0, 15900, 6400, 2, 1, 1, 'February data');