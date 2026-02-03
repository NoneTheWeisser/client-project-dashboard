/*shelter weekly "*/
INSERT INTO shelter_weekly (
  date,
  single_men,
  housing_men,
  single_women,
  housing_women,
  families,
  hybrid_va_holdover,
  incident_reports,
  community_members_served,
  nights_found_sleeping_outside,
  created_by,
  notes
) VALUES
('2025-07-01', 42, 18, 26, 12, 9, 6, 3, 28, 6, 1, 'Stable summer intake'),
('2025-07-08', 44, 19, 27, 12, 10, 6, 2, 31, 7, 1, 'Slight increase in single men'),
('2025-07-15', 45, 20, 28, 13, 10, 7, 4, 29, 8, 1, 'Increased outreach activity'),
('2025-07-22', 46, 20, 29, 14, 11, 7, 3, 34, 9, 1, 'Heat-related outreach'),
('2025-07-29', 48, 21, 30, 14, 11, 8, 5, 36, 10, 1, 'Peak summer demand'),

('2025-08-05', 47, 21, 29, 14, 12, 8, 3, 35, 9, 1, 'Consistent summer levels'),
('2025-08-12', 49, 22, 30, 15, 12, 8, 4, 38, 10, 1, 'Increased family units'),
('2025-08-19', 50, 22, 31, 15, 13, 9, 6, 40, 11, 1, 'High outreach week'),
('2025-08-26', 51, 23, 32, 16, 13, 9, 4, 42, 12, 1, 'End of summer surge'),

('2025-09-02', 49, 23, 31, 16, 12, 9, 3, 39, 10, 1, 'Back-to-school season'),
('2025-09-09', 50, 24, 32, 17, 12, 10, 4, 41, 11, 1, 'Stable occupancy'),
('2025-09-16', 52, 25, 33, 17, 13, 10, 5, 43, 12, 1, 'Gradual fall increase'),
('2025-09-23', 53, 25, 34, 18, 13, 10, 4, 45, 13, 1, 'More nights outside reported'),
('2025-09-30', 54, 26, 34, 18, 14, 11, 6, 46, 14, 1, 'Cooling temperatures'),

('2025-10-07', 55, 26, 35, 19, 14, 11, 5, 48, 15, 1, 'Cold-weather prep'),
('2025-10-14', 56, 27, 36, 19, 15, 12, 6, 50, 16, 1, 'Increased shelter usage'),
('2025-10-21', 57, 27, 37, 20, 15, 12, 7, 52, 17, 1, 'More incident reports'),
('2025-10-28', 58, 28, 38, 20, 16, 12, 6, 54, 18, 1, 'Approaching winter'),

('2025-11-04', 60, 29, 39, 21, 16, 13, 5, 56, 19, 1, 'Winter demand rising'),
('2025-11-11', 61, 30, 40, 21, 17, 13, 6, 58, 20, 1, 'Veterans outreach'),
('2025-11-18', 62, 30, 41, 22, 17, 14, 7, 60, 21, 1, 'Thanksgiving week'),
('2025-11-25', 63, 31, 42, 22, 18, 14, 6, 62, 22, 1, 'Holiday strain'),

('2025-12-02', 64, 32, 43, 23, 18, 15, 7, 65, 24, 1, 'Cold snap'),
('2025-12-09', 65, 32, 44, 23, 19, 15, 8, 67, 26, 1, 'Extreme weather'),
('2025-12-16', 66, 33, 45, 24, 19, 16, 7, 69, 27, 1, 'High winter occupancy'),
('2025-12-23', 67, 34, 46, 24, 20, 16, 6, 71, 28, 1, 'Holiday week'),
('2025-12-29', 68, 34, 47, 25, 20, 17, 5, 73, 29, 1, 'Year-end report');

-----shelter weekly data-----
INSERT INTO shelter_weekly (
    date,
    single_men,
    housing_men,
    single_women,
    housing_women,
    families,
    hybrid_va_holdover,
    incident_reports,
    community_members_served,
    nights_found_sleeping_outside,
    notes
) VALUES
(
    '2026-01-05',
    42, 18, 27, 14, 11, 6,
    3, 95, 12,
    'Cold weather surge; increased family intake after New Year.'
),
(
    '2026-01-12',
    45, 20, 29, 15, 13, 7,
    4, 102, 15,
    'Extreme cold week; additional outreach and warming resources used.'
),
(
    '2026-01-19',
    40, 22, 26, 17, 12, 5,
    2, 88, 10,
    'Slight decrease in incidents; more guests transitioned to housing.'
),
(
    '2026-01-26',
    38, 24, 25, 18, 14, 4,
    1, 91, 9,
    'End-of-month stabilization; improved housing placements.'
);


------shelter weekly data for 2025-----
INSERT INTO shelter_weekly (
    date,
    single_men,
    housing_men,
    single_women,
    housing_women,
    families,
    hybrid_va_holdover,
    incident_reports,
    community_members_served,
    nights_found_sleeping_outside,
    notes
) VALUES
-- January 2025 (Winter peak)
('2025-01-06', 46, 18, 30, 14, 15, 7, 4, 110, 18, 'Severe cold weather; increased shelter demand.'),
('2025-01-13', 48, 19, 31, 15, 16, 6, 5, 118, 20, 'Extreme cold advisory; overflow beds utilized.'),
('2025-01-20', 45, 21, 29, 16, 14, 6, 3, 105, 15, 'Cold continues; some housing transitions.'),
('2025-01-27', 43, 22, 28, 17, 14, 5, 3, 100, 14, 'Stabilization toward month end.'),

-- February 2025
('2025-02-03', 44, 23, 29, 18, 15, 5, 2, 102, 13, 'Consistent winter occupancy.'),
('2025-02-10', 42, 24, 27, 18, 14, 5, 2, 98, 12, 'Gradual housing movement.'),
('2025-02-17', 41, 25, 26, 19, 13, 4, 1, 96, 11, 'Lower incidents reported.'),
('2025-02-24', 40, 26, 25, 20, 13, 4, 1, 94, 10, 'End-of-month improvement.'),

-- March 2025 (Transition season)
('2025-03-03', 39, 27, 25, 21, 12, 4, 2, 92, 9, 'Weather improving; reduced shelter reliance.'),
('2025-03-10', 38, 28, 24, 21, 12, 4, 2, 90, 9, 'Stable guest numbers.'),
('2025-03-17', 37, 29, 24, 22, 11, 3, 1, 88, 8, 'Increased housing placements.'),
('2025-03-24', 36, 30, 23, 22, 11, 3, 1, 86, 7, 'Outreach focused on prevention.'),
('2025-03-31', 35, 31, 22, 23, 10, 3, 1, 84, 7, 'End of winter season.'),

-- April 2025
('2025-04-07', 34, 32, 22, 24, 10, 3, 1, 82, 6, 'Spring transition ongoing.'),
('2025-04-14', 33, 33, 21, 24, 10, 2, 1, 80, 6, 'Lower shelter usage.'),
('2025-04-21', 32, 34, 21, 25, 9, 2, 0, 78, 5, 'Reduced incident activity.'),
('2025-04-28', 31, 35, 20, 25, 9, 2, 0, 76, 5, 'Stable operations.'),

-- May 2025
('2025-05-05', 30, 36, 20, 26, 8, 2, 0, 74, 4, 'Warmer weather; fewer outdoor cases.'),
('2025-05-12', 29, 37, 19, 26, 8, 2, 0, 72, 4, 'Continued housing progress.'),
('2025-05-19', 28, 38, 19, 27, 8, 1, 0, 70, 3, 'Community outreach focus.'),
('2025-05-26', 27, 39, 18, 27, 7, 1, 0, 68, 3, 'Holiday week; reduced incidents.'),

-- June 2025 (Lowest shelter utilization)
('2025-06-02', 26, 40, 18, 28, 7, 1, 0, 66, 3, 'Early summer trends.'),
('2025-06-09', 25, 41, 17, 28, 7, 1, 0, 64, 2, 'Lower demand overall.'),
('2025-06-16', 24, 42, 17, 29, 6, 1, 0, 62, 2, 'Stable housing placements.'),
('2025-06-23', 23, 43, 16, 29, 6, 1, 0, 60, 2, 'Seasonal low utilization.'),
('2025-06-30', 22, 44, 16, 30, 6, 1, 0, 58, 2, 'End-of-quarter reporting complete.');


----2024 shelter weekly data-----
INSERT INTO shelter_weekly (
    date,
    single_men,
    housing_men,
    single_women,
    housing_women,
    families,
    hybrid_va_holdover,
    incident_reports,
    community_members_served,
    nights_found_sleeping_outside,
    notes
) VALUES
-- January 2024 (Winter peak)
('2024-01-01', 47, 17, 31, 13, 16, 8, 5, 115, 20, 'New Year intake surge during extreme cold.'),
('2024-01-08', 49, 18, 32, 14, 17, 7, 6, 120, 22, 'Severe weather conditions; overflow capacity used.'),
('2024-01-15', 46, 20, 30, 15, 15, 7, 4, 110, 18, 'Cold snap continues; increased outreach.'),
('2024-01-22', 44, 21, 29, 16, 15, 6, 4, 105, 16, 'Some stabilization mid-winter.'),
('2024-01-29', 43, 22, 28, 17, 14, 6, 3, 102, 15, 'End-of-month winter shelter demand.'),

-- February 2024
('2024-02-05', 42, 23, 28, 18, 14, 6, 3, 100, 14, 'Consistent winter occupancy.'),
('2024-02-12', 41, 24, 27, 18, 13, 5, 2, 98, 13, 'Gradual housing transitions.'),
('2024-02-19', 40, 25, 26, 19, 13, 5, 2, 96, 12, 'Lower incident frequency.'),
('2024-02-26', 39, 26, 25, 20, 12, 5, 1, 94, 11, 'End-of-month improvement.'),

-- March 2024 (Seasonal transition)
('2024-03-04', 38, 27, 25, 21, 12, 4, 2, 92, 10, 'Weather improving; reduced outdoor exposure.'),
('2024-03-11', 37, 28, 24, 21, 12, 4, 2, 90, 9, 'Stable shelter utilization.'),
('2024-03-18', 36, 29, 24, 22, 11, 4, 1, 88, 9, 'Increased housing placements.'),
('2024-03-25', 35, 30, 23, 22, 11, 3, 1, 86, 8, 'Outreach emphasis increased.'),

-- April 2024
('2024-04-01', 34, 31, 23, 23, 10, 3, 1, 84, 7, 'Spring transition continues.'),
('2024-04-08', 33, 32, 22, 24, 10, 3, 1, 82, 7, 'Lower shelter usage overall.'),
('2024-04-15', 32, 33, 22, 24, 9, 2, 0, 80, 6, 'Reduced incidents.'),
('2024-04-22', 31, 34, 21, 25, 9, 2, 0, 78, 6, 'Stabilized occupancy.'),
('2024-04-29', 30, 35, 21, 25, 9, 2, 0, 76, 5, 'End-of-month reporting.'),

-- May 2024
('2024-05-06', 29, 36, 20, 26, 8, 2, 0, 74, 4, 'Warmer weather; outdoor cases reduced.'),
('2024-05-13', 28, 37, 20, 26, 8, 2, 0, 72, 4, 'Steady housing transitions.'),
('2024-05-20', 27, 38, 19, 27, 8, 1, 0, 70, 4, 'Community outreach prioritized.'),
('2024-05-27', 26, 39, 18, 27, 7, 1, 0, 68, 3, 'Holiday week; fewer incidents.'),

-- June 2024 (Early summer low)
('2024-06-03', 25, 40, 18, 28, 7, 1, 0, 66, 3, 'Early summer trends observed.'),
('2024-06-10', 24, 41, 17, 28, 7, 1, 0, 64, 3, 'Lower overall shelter demand.'),
('2024-06-17', 23, 42, 17, 29, 6, 1, 0, 62, 2, 'Stable housing placements.'),
('2024-06-24', 22, 43, 16, 29, 6, 1, 0, 60, 2, 'End-of-quarter reporting completed.');



-- February 2026
INSERT INTO shelter_weekly (
  date, single_men, housing_men, single_women, housing_women,
  families, hybrid_va_holdover, incident_reports,
  community_members_served, nights_found_sleeping_outside,
  created_by, notes
)
VALUES
('2026-02-03', 66, 33, 45, 24, 19, 16, 7, 70, 26, 1, 'Cold weather impact'),
('2026-02-10', 67, 34, 46, 24, 20, 16, 6, 72, 27, 1, 'Continued winter demand'),
('2026-02-17', 68, 34, 47, 25, 20, 17, 8, 74, 28, 1, 'High overnight shelter use'),
('2026-02-24', 69, 35, 48, 25, 21, 17, 6, 76, 29, 1, 'Slight increase before March');