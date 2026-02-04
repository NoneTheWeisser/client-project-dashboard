-- ---------------- Events ----------------
INSERT INTO events (name, datetime, venue, type, shelter_id, notes)
VALUES
('Holiday Fundraiser', '2025-12-15 18:00:00-06', 'Community Hall', 'Fundraiser', NULL, 'Annual holiday fundraising event'),
('Winter Coat Drive', '2025-12-20 10:00:00-06', 'Micah''s Mission - Basement', 'Community Events', 
  (SELECT id FROM housing_building WHERE name='Micah''s Mission'), 'Collecting coats for families in need'),
('Soup Kitchen Prep', '2025-12-22 09:00:00-06', 'Kitchen', 'Large Volunteer Event', NULL, 'Preparing meals for the community'),
('Neighborhood Clean-Up', '2025-12-28 08:30:00-06', 'Bright Sky', 'Community Events', NULL, NULL),
('Summer Picnic', '2025-06-10 12:00:00-06', 'Community Picnic', 'Community Events', NULL, 'Fun picnic with games and food'),
('Back-to-School Drive', '2025-08-20 14:00:00-06', 'Dorothy Day Food Pantry', 'Fundraiser', NULL, 'Supplies for students'),
('Volunteer Appreciation Night', '2025-09-15 18:30:00-06', 'Silver Linings', 'Other', NULL, 'Celebrating our volunteers'),
('Emergency Shelter Setup', '2025-11-05 16:00:00-06', 'Micah''s Mission - Pantry', 'Large Volunteer Event', 
  (SELECT id FROM housing_building WHERE name='Micah''s Mission'), 'Preparing emergency kits'),
('Community Art Fair', '2025-10-12 10:00:00-06', 'Community Hall', 'Community Events', NULL, 'Local artists showcase'),
('Charity Auction', '2025-11-22 19:00:00-06', 'Community Hall', 'Fundraiser', NULL, 'Auction to support programs');
