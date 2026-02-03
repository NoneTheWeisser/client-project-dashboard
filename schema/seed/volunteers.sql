-- ---------------- Volunteers ----------------
INSERT INTO volunteers (name, type)
VALUES
('Alice Johnson', 'Individual'),
('Bob Smith', 'Individual'),
('Carol Martinez', 'Individual'),
('Downtown Community Group', 'Group'),
('Eastside Volunteers', 'Group'),
('Faith Helpers', 'Group'),
('Grace Lee', 'Individual'),
('Hannah Kim', 'Individual'),
('Northside Volunteers', 'Group'),
('Southside Helpers', 'Group'),
('Ian Thompson', 'Individual');

-- ---------------- Volunteer Engagements: Last 6 Months ----------------
INSERT INTO volunteer_engagements (volunteer_id, event_date, location, number_volunteers, software_signups)
VALUES

-- January 2026
-- Micah's Mission - Basement
((SELECT id FROM volunteers WHERE name='Alice Johnson'), '2026-01-05', 'Micah''s Mission - Basement', 15, 3),
((SELECT id FROM volunteers WHERE name='Bob Smith'), '2026-01-12', 'Micah''s Mission - Basement', 22, 5),
((SELECT id FROM volunteers WHERE name='Grace Lee'), '2026-01-19', 'Micah''s Mission - Basement', 18, 2),

-- Kitchen
((SELECT id FROM volunteers WHERE name='Northside Volunteers'), '2026-01-06', 'Kitchen', 12, 1),
((SELECT id FROM volunteers WHERE name='Carol Martinez'), '2026-01-13', 'Kitchen', 28, 6),
((SELECT id FROM volunteers WHERE name='Alice Johnson'), '2026-01-20', 'Kitchen', 20, 3),

-- Dorothy Day Food Pantry
((SELECT id FROM volunteers WHERE name='Carol Martinez'), '2026-01-07', 'Dorothy Day Food Pantry', 16, 2),
((SELECT id FROM volunteers WHERE name='Southside Helpers'), '2026-01-14', 'Dorothy Day Food Pantry', 25, 7),
((SELECT id FROM volunteers WHERE name='Eastside Volunteers'), '2026-01-21', 'Dorothy Day Food Pantry', 18, 4),

-- Community Picnic
((SELECT id FROM volunteers WHERE name='Faith Helpers'), '2026-01-08', 'Community Picnic', 22, 5),
((SELECT id FROM volunteers WHERE name='Ian Thompson'), '2026-01-15', 'Community Picnic', 18, 2),
((SELECT id FROM volunteers WHERE name='Carol Martinez'), '2026-01-22', 'Community Picnic', 30, 8),

-- Silver Linings
((SELECT id FROM volunteers WHERE name='Bob Smith'), '2026-01-09', 'Silver Linings', 14, 1),
((SELECT id FROM volunteers WHERE name='Eastside Volunteers'), '2026-01-16', 'Silver Linings', 20, 3),

-- Bright Sky
((SELECT id FROM volunteers WHERE name='Alice Johnson'), '2026-01-11', 'Bright Sky', 16, 2),
((SELECT id FROM volunteers WHERE name='Northside Volunteers'), '2026-01-18', 'Bright Sky', 19, 4);


-- August 2025
((SELECT id FROM volunteers WHERE name='Alice Johnson'), '2025-08-05', 'Kitchen', 13, 2),
((SELECT id FROM volunteers WHERE name='Bob Smith'), '2025-08-12', 'Dorothy Day Food Pantry', 18, 3),
((SELECT id FROM volunteers WHERE name='Carol Martinez'), '2025-08-19', 'Community Picnic', 22, 5),

-- September 2025
((SELECT id FROM volunteers WHERE name='Alice Johnson'), '2025-09-02', 'Bright Sky', 15, 2),
((SELECT id FROM volunteers WHERE name='Bob Smith'), '2025-09-09', 'Silver Linings', 12, 1),
((SELECT id FROM volunteers WHERE name='Carol Martinez'), '2025-09-16', 'Dorothy Day Food Pantry', 20, 4),

-- October 2025
((SELECT id FROM volunteers WHERE name='Faith Helpers'), '2025-10-03', 'Community Picnic', 28, 6),
((SELECT id FROM volunteers WHERE name='Downtown Community Group'), '2025-10-10', 'Micah''s Mission - Basement', 18, 3),
((SELECT id FROM volunteers WHERE name='Eastside Volunteers'), '2025-10-17', 'Micah''s Mission - Pantry', 22, 5),
((SELECT id FROM volunteers WHERE name='Bob Smith'), '2025-10-10', 'Micah''s Mission - Basement', 20, 4),
((SELECT id FROM volunteers WHERE name='Grace Lee'), '2025-10-17', 'Micah''s Mission - Pantry', 25, 6),

-- November 2025
((SELECT id FROM volunteers WHERE name='Alice Johnson'), '2025-11-03', 'Micah''s Mission - Basement', 18, 3),
((SELECT id FROM volunteers WHERE name='Bob Smith'), '2025-11-10', 'Micah''s Mission - Basement', 16, 2),
((SELECT id FROM volunteers WHERE name='Carol Martinez'), '2025-11-10', 'Micah''s Mission - Basement', 28, 7),
((SELECT id FROM volunteers WHERE name='Downtown Community Group'), '2025-11-06', 'Micah''s Mission - Pantry', 20, 4),
((SELECT id FROM volunteers WHERE name='Eastside Volunteers'), '2025-11-12', 'Micah''s Mission - Pantry', 26, 5),

-- December 2025
((SELECT id FROM volunteers WHERE name='Alice Johnson'), '2025-12-02', 'Micah''s Mission - Basement', 22, 5),
((SELECT id FROM volunteers WHERE name='Grace Lee'), '2025-12-09', 'Micah''s Mission - Basement', 19, 4),
((SELECT id FROM volunteers WHERE name='Downtown Community Group'), '2025-12-03', 'Micah''s Mission - Pantry', 23, 5),
((SELECT id FROM volunteers WHERE name='Hannah Kim'), '2025-12-10', 'Micah''s Mission - Pantry', 15, 2);


-- ---------------- Volunteer Engagements: 2024 ----------------
-- January 2024
((SELECT id FROM volunteers WHERE name='Alice Johnson'), '2024-01-06', 'Micah''s Mission - Basement', 14, 2),
((SELECT id FROM volunteers WHERE name='Grace Lee'), '2024-01-13', 'Micah''s Mission - Basement', 18, 4),
((SELECT id FROM volunteers WHERE name='Northside Volunteers'), '2024-01-07', 'Kitchen', 20, 5),
((SELECT id FROM volunteers WHERE name='Carol Martinez'), '2024-01-08', 'Dorothy Day Food Pantry', 15, 3),
((SELECT id FROM volunteers WHERE name='Faith Helpers'), '2024-01-09', 'Community Picnic', 22, 6),
((SELECT id FROM volunteers WHERE name='Downtown Community Group'), '2024-01-19', 'Kitchen', 18, 4),

-- August 2024
((SELECT id FROM volunteers WHERE name='Alice Johnson'), '2024-08-05', 'Kitchen', 16, 3),
((SELECT id FROM volunteers WHERE name='Bob Smith'), '2024-08-12', 'Dorothy Day Food Pantry', 20, 4),
((SELECT id FROM volunteers WHERE name='Carol Martinez'), '2024-08-19', 'Community Picnic', 23, 5),
((SELECT id FROM volunteers WHERE name='Grace Lee'), '2024-08-12', 'Dorothy Day Food Pantry', 19, 3),
((SELECT id FROM volunteers WHERE name='Downtown Community Group'), '2024-08-19', 'Community Picnic', 21, 4),

-- September 2024
((SELECT id FROM volunteers WHERE name='Alice Johnson'), '2024-09-02', 'Bright Sky', 18, 4),
((SELECT id FROM volunteers WHERE name='Bob Smith'), '2024-09-09', 'Silver Linings', 15, 2),
((SELECT id FROM volunteers WHERE name='Carol Martinez'), '2024-09-16', 'Dorothy Day Food Pantry', 20, 5),

-- October 2024
((SELECT id FROM volunteers WHERE name='Faith Helpers'), '2024-10-03', 'Community Picnic', 25, 6),
((SELECT id FROM volunteers WHERE name='Downtown Community Group'), '2024-10-10', 'Micah''s Mission - Basement', 19, 3),
((SELECT id FROM volunteers WHERE name='Eastside Volunteers'), '2024-10-17', 'Micah''s Mission - Pantry', 22, 5),

-- November 2024
((SELECT id FROM volunteers WHERE name='Alice Johnson'), '2024-11-04', 'Micah''s Mission - Basement', 17, 3),
((SELECT id FROM volunteers WHERE name='Bob Smith'), '2024-11-11', 'Micah''s Mission - Basement', 15, 2),
((SELECT id FROM volunteers WHERE name='Carol Martinez'), '2024-11-11', 'Micah''s Mission - Basement', 26, 6),
((SELECT id FROM volunteers WHERE name='Downtown Community Group'), '2024-11-06', 'Micah''s Mission - Pantry', 21, 4),
((SELECT id FROM volunteers WHERE name='Eastside Volunteers'), '2024-11-13', 'Micah''s Mission - Pantry', 19, 3),

-- December 2024
((SELECT id FROM volunteers WHERE name='Alice Johnson'), '2024-12-02', 'Micah''s Mission - Basement', 22, 5),
((SELECT id FROM volunteers WHERE name='Grace Lee'), '2024-12-09', 'Micah''s Mission - Basement', 20, 4),
((SELECT id FROM volunteers WHERE name='Downtown Community Group'), '2024-12-03', 'Micah''s Mission - Pantry', 23, 5),
((SELECT id FROM volunteers WHERE name='Hannah Kim'), '2024-12-10', 'Micah''s Mission - Pantry', 18, 3),

-- January 2025
((SELECT id FROM volunteers WHERE name='Alice Johnson'), '2025-01-06', 'Micah''s Mission - Basement', 20, 5),
((SELECT id FROM volunteers WHERE name='Grace Lee'), '2025-01-13', 'Micah''s Mission - Basement', 18, 4),
((SELECT id FROM volunteers WHERE name='Northside Volunteers'), '2025-01-07', 'Kitchen', 22, 5),
((SELECT id FROM volunteers WHERE name='Carol Martinez'), '2025-01-08', 'Dorothy Day Food Pantry', 19, 4),
((SELECT id FROM volunteers WHERE name='Faith Helpers'), '2025-01-09', 'Community Picnic', 23, 6);


-- February 2026
INSERT INTO volunteer_engagements (volunteer_id, event_date, location, number_volunteers, software_signups)
VALUES

((SELECT id FROM volunteers WHERE name='Alice Johnson'), '2026-02-03', 'Micah''s Mission - Basement', 21, 4),
((SELECT id FROM volunteers WHERE name='Grace Lee'), '2026-02-10', 'Micah''s Mission - Basement', 19, 3),
((SELECT id FROM volunteers WHERE name='Downtown Community Group'), '2026-02-17', 'Micah''s Mission - Pantry', 24, 5),

((SELECT id FROM volunteers WHERE name='Northside Volunteers'), '2026-02-05', 'Kitchen', 18, 3),
((SELECT id FROM volunteers WHERE name='Carol Martinez'), '2026-02-12', 'Kitchen', 26, 6),

((SELECT id FROM volunteers WHERE name='Southside Helpers'), '2026-02-06', 'Dorothy Day Food Pantry', 22, 5),
((SELECT id FROM volunteers WHERE name='Eastside Volunteers'), '2026-02-20', 'Dorothy Day Food Pantry', 20, 4),

((SELECT id FROM volunteers WHERE name='Faith Helpers'), '2026-02-14', 'Community Picnic', 24, 6),

((SELECT id FROM volunteers WHERE name='Bob Smith'), '2026-02-09', 'Silver Linings', 16, 2),
((SELECT id FROM volunteers WHERE name='Alice Johnson'), '2026-02-16', 'Bright Sky', 18, 3);