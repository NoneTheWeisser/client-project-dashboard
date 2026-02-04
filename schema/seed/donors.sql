-- ---------------- Donors ----------------
INSERT INTO donors (name, type)
VALUES
('Bob Johnson', 'person'),
('Faith Helpers', 'group'),
('Community Giving Circle', 'group'),
('Anonymous Donor', 'person'),
('Silver Linings Foundation', 'group'),
('Greenwood Community Fund', 'group'),
('Lighthouse Supporters', 'group'),
('Emily Carter', 'person');


INSERT INTO donations (
    donor_id,
    date,
    amount,
    notable,
    restricted,
    notes
) VALUES

-- ======================
-- 2024 Donations
-- ======================
((SELECT id FROM donors WHERE name = 'Bob Johnson'), '2024-01-12', 250.00, FALSE, FALSE, 'Monthly individual donation'),
((SELECT id FROM donors WHERE name = 'Emily Carter'), '2024-02-05', 400.00, FALSE, FALSE, 'One-time personal gift'),
((SELECT id FROM donors WHERE name = 'Faith Helpers'), '2024-03-18', 3200.00, TRUE, TRUE, 'Spring outreach fundraiser'),
((SELECT id FROM donors WHERE name = 'Community Giving Circle'), '2024-04-22', 5000.00, TRUE, FALSE, 'Quarterly pooled donation'),
((SELECT id FROM donors WHERE name = 'Greenwood Community Fund'), '2024-06-10', 12000.00, TRUE, TRUE, 'Mid-year operating grant'),
((SELECT id FROM donors WHERE name = 'Silver Linings Foundation'), '2024-09-15', 20000.00, TRUE, TRUE, 'Capital improvement grant'),
((SELECT id FROM donors WHERE name = 'Lighthouse Supporters'), '2024-11-20', 8500.00, TRUE, FALSE, 'Annual giving campaign'),
((SELECT id FROM donors WHERE name = 'Anonymous Donor'), '2024-12-28', 1500.00, FALSE, FALSE, 'Year-end anonymous gift'),

-- ======================
-- 2025 Donations
-- ======================
((SELECT id FROM donors WHERE name = 'Bob Johnson'), '2025-01-10', 300.00, FALSE, FALSE, 'January monthly donation'),
((SELECT id FROM donors WHERE name = 'Emily Carter'), '2025-02-14', 600.00, FALSE, FALSE, 'Valentine’s Day contribution'),
((SELECT id FROM donors WHERE name = 'Faith Helpers'), '2025-03-30', 4200.00, TRUE, TRUE, 'Lenten support drive'),
((SELECT id FROM donors WHERE name = 'Community Giving Circle'), '2025-05-08', 7500.00, TRUE, FALSE, 'Spring collective donation'),
((SELECT id FROM donors WHERE name = 'Greenwood Community Fund'), '2025-06-18', 15000.00, TRUE, TRUE, 'Program expansion grant'),
((SELECT id FROM donors WHERE name = 'Silver Linings Foundation'), '2025-08-25', 25000.00, TRUE, TRUE, 'Major housing initiative'),
((SELECT id FROM donors WHERE name = 'Lighthouse Supporters'), '2025-10-12', 9500.00, TRUE, FALSE, 'Fall fundraising event'),
((SELECT id FROM donors WHERE name = 'Anonymous Donor'), '2025-12-30', 2200.00, FALSE, FALSE, 'End-of-year gift'),

-- ======================
-- January 2026 Donations
-- ======================
((SELECT id FROM donors WHERE name = 'Bob Johnson'), '2026-01-05', 325.00, FALSE, FALSE, 'January recurring donation'),
((SELECT id FROM donors WHERE name = 'Faith Helpers'), '2026-01-09', 5000.00, TRUE, TRUE, 'Winter emergency assistance'),
((SELECT id FROM donors WHERE name = 'Silver Linings Foundation'), '2026-01-20', 18000.00, TRUE, TRUE, 'Early-year strategic grant');


-- ======================
-- Feb–Apr 2026 Donations
-- ======================
((SELECT id FROM donors WHERE name = 'Emily Carter'), '2026-02-03', 550.00, FALSE, FALSE, 'February personal gift'),
((SELECT id FROM donors WHERE name = 'Community Giving Circle'), '2026-02-14', 4800.00, TRUE, FALSE, 'Valentine’s Day community donation'),
((SELECT id FROM donors WHERE name = 'Faith Helpers'), '2026-02-20', 3200.00, TRUE, TRUE, 'Winter outreach event'),

((SELECT id FROM donors WHERE name = 'Bob Johnson'), '2026-03-05', 350.00, FALSE, FALSE, 'March monthly donation'),
((SELECT id FROM donors WHERE name = 'Greenwood Community Fund'), '2026-03-15', 12500.00, TRUE, TRUE, 'Quarterly program grant'),
((SELECT id FROM donors WHERE name = 'Lighthouse Supporters'), '2026-03-25', 9000.00, TRUE, FALSE, 'Spring fundraiser'),

((SELECT id FROM donors WHERE name = 'Emily Carter'), '2026-04-02', 600.00, FALSE, FALSE, 'April donation'),
((SELECT id FROM donors WHERE name = 'Community Giving Circle'), '2026-04-10', 5200.00, TRUE, FALSE, 'April collective gift'),
((SELECT id FROM donors WHERE name = 'Silver Linings Foundation'), '2026-04-22', 20000.00, TRUE, TRUE, 'Spring strategic grant');
