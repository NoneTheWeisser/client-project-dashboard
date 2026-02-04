/* finance weekly */
INSERT INTO finance_weekly (
  date,
  total_assets,
  operating_account_balance,
  bills_paid,
  payroll_paid,
  revenue_received,
  major_expenses,
  notes,
  created_by
) VALUES
('2025-07-01', 125000.00, 42000.00, 8200.00, 14500.00, 18000.00, 'Payroll, Utilities, Food supplies', 'Stable summer operations', 1),
('2025-07-08', 127300.00, 43800.00, 7900.00, 14500.00, 19500.00, 'Payroll, Facility maintenance', 'Small private donation received', 1),
('2025-07-15', 128900.00, 45200.00, 8600.00, 14500.00, 20000.00, 'Payroll, Outreach supplies', 'Community outreach grant', 1),
('2025-07-22', 130400.00, 46700.00, 9100.00, 14500.00, 20500.00, 'Payroll, HVAC repair', 'Unexpected repair expense', 1),
('2025-07-29', 132200.00, 48600.00, 8700.00, 14500.00, 21500.00, 'Payroll, Food program', 'End of month balance increase', 1),

('2025-08-05', 134000.00, 50500.00, 9200.00, 15000.00, 23000.00, 'Payroll, Insurance, Utilities', 'Insurance premium paid', 1),
('2025-08-12', 135800.00, 52200.00, 8900.00, 15000.00, 22500.00, 'Payroll, Program supplies', 'Steady operations', 1),
('2025-08-19', 137900.00, 54100.00, 9400.00, 15000.00, 24500.00, 'Payroll, Transportation', 'Transportation support grant', 1),
('2025-08-26', 139600.00, 55800.00, 9600.00, 15000.00, 25500.00, 'Payroll, Equipment purchase', 'Equipment upgrade completed', 1),

('2025-09-02', 141200.00, 57300.00, 9800.00, 15000.00, 26000.00, 'Payroll, Rent, Utilities', 'Start of fall programs', 1),
('2025-09-09', 143100.00, 59000.00, 10200.00, 15000.00, 27000.00, 'Payroll, Food supplies', 'Increased program usage', 1),
('2025-09-16', 145000.00, 60700.00, 9900.00, 15000.00, 27500.00, 'Payroll, Outreach materials', 'Strong donor engagement', 1),
('2025-09-23', 147100.00, 62600.00, 10400.00, 15000.00, 29500.00, 'Payroll, Winter prep supplies', 'Preparing for cold season', 1),
('2025-09-30', 149000.00, 64500.00, 10100.00, 15000.00, 29000.00, 'Payroll, Utilities', 'Stable close to Q3', 1),

('2025-10-07', 151300.00, 66500.00, 10800.00, 15500.00, 31000.00, 'Payroll, Heating systems', 'Cold weather transition', 1),
('2025-10-14', 153600.00, 68400.00, 11200.00, 15500.00, 32000.00, 'Payroll, Fuel, Maintenance', 'Higher heating costs', 1),
('2025-10-21', 155900.00, 70200.00, 11500.00, 15500.00, 32500.00, 'Payroll, Security upgrades', 'Safety improvements made', 1),
('2025-10-28', 158200.00, 72000.00, 11800.00, 15500.00, 33000.00, 'Payroll, Winter clothing', 'Winter gear distribution', 1),

('2025-11-04', 160800.00, 74100.00, 12000.00, 16000.00, 35000.00, 'Payroll, Utilities, Food', 'Increased demand', 1),
('2025-11-11', 163400.00, 76400.00, 11800.00, 16000.00, 36000.00, 'Payroll, Veterans services', 'Veterans Day support', 1),
('2025-11-18', 166100.00, 78800.00, 12500.00, 16000.00, 38000.00, 'Payroll, Holiday food supplies', 'Thanksgiving preparations', 1),
('2025-11-25', 168700.00, 81100.00, 12800.00, 16000.00, 39000.00, 'Payroll, Holiday outreach', 'Strong donor support', 1),

('2025-12-02', 171600.00, 83500.00, 13000.00, 16500.00, 40000.00, 'Payroll, Heating, Snow removal', 'Early winter storms', 1),
('2025-12-09', 174900.00, 86200.00, 13500.00, 16500.00, 43000.00, 'Payroll, Emergency supplies', 'Extreme cold response', 1),
('2025-12-16', 178200.00, 89000.00, 13800.00, 16500.00, 45000.00, 'Payroll, Gift cards, Supplies', 'Holiday assistance programs', 1),
('2025-12-23', 181500.00, 91800.00, 14000.00, 16500.00, 47000.00, 'Payroll, Holiday meals', 'Peak holiday giving', 1),
('2025-12-29', 185000.00, 94500.00, 13800.00, 16500.00, 46000.00, 'Payroll, Year-end adjustments', 'Year-end financial close', 1);





----finance weekly data for 2024-----

INSERT INTO finance_weekly (
    date,
    total_assets,
    operating_account_balance,
    bills_paid,
    payroll_paid,
    revenue_received,
    major_expenses,
    notes
) VALUES
-- January 2024 (High winter costs)
('2024-01-01', 485000.00, 128000.00, 24500.00, 52000.00, 61000.00, 'Utilities, emergency supplies, winter contracts', 'New Year expenses and winter surge costs.'),
('2024-01-08', 482500.00, 125500.00, 26000.00, 52500.00, 62000.00, 'Heating, snow removal, food supplies', 'Extreme cold increased utility spending.'),
('2024-01-15', 480800.00, 123800.00, 25500.00, 53000.00, 63500.00, 'Staff overtime, food services', 'Overtime payroll due to staffing needs.'),
('2024-01-22', 479200.00, 122200.00, 25000.00, 52000.00, 64000.00, 'Maintenance, utilities', 'Stabilizing expenses mid-month.'),
('2024-01-29', 478000.00, 121000.00, 24500.00, 51500.00, 63000.00, 'Food, transportation', 'End-of-month reconciliation.'),

-- February 2024
('2024-02-05', 477500.00, 120500.00, 24000.00, 51000.00, 62000.00, 'Utilities, food services', 'Consistent winter operations.'),
('2024-02-12', 478200.00, 121200.00, 23500.00, 50500.00, 62500.00, 'Facility upkeep', 'Slightly improved revenue flow.'),
('2024-02-19', 479000.00, 122000.00, 23000.00, 50000.00, 63000.00, 'Program supplies', 'Lower incidents reduced variable costs.'),
('2024-02-26', 480500.00, 123500.00, 22500.00, 49500.00, 64000.00, 'Food contracts', 'End-of-month improvement.'),

-- March 2024 (Transition period)
('2024-03-04', 482000.00, 125000.00, 22000.00, 49000.00, 64500.00, 'Maintenance, outreach supplies', 'Weather improvement reduced costs.'),
('2024-03-11', 483800.00, 126800.00, 21500.00, 48500.00, 65000.00, 'Facility repairs', 'Stable operations.'),
('2024-03-18', 485500.00, 128500.00, 21000.00, 48000.00, 65500.00, 'Program materials', 'Increased housing transitions.'),
('2024-03-25', 487000.00, 130000.00, 20500.00, 47500.00, 66000.00, 'Transportation', 'End-of-quarter strength.'),

-- April 2024
('2024-04-01', 489500.00, 132500.00, 20000.00, 47000.00, 66500.00, 'Spring maintenance', 'Seasonal cost reductions.'),
('2024-04-08', 492000.00, 135000.00, 19500.00, 46500.00, 67000.00, 'Supplies restock', 'Lower operating costs.'),
('2024-04-15', 494800.00, 137800.00, 19000.00, 46000.00, 67500.00, 'Program support', 'Improved net position.'),
('2024-04-22', 497500.00, 140500.00, 18500.00, 45500.00, 68000.00, 'Minimal repairs', 'Stable positive net change.'),
('2024-04-29', 500000.00, 143000.00, 18000.00, 45000.00, 68500.00, 'Food services', 'End-of-month reporting.'),

-- May 2024
('2024-05-06', 503000.00, 146000.00, 17500.00, 44500.00, 69000.00, 'Outreach events', 'Warmer weather reduced costs.'),
('2024-05-13', 506500.00, 149500.00, 17000.00, 44000.00, 69500.00, 'Community programs', 'Consistent donor revenue.'),
('2024-05-20', 510000.00, 153000.00, 16500.00, 43500.00, 70000.00, 'Transportation, supplies', 'Increased outreach efficiency.'),
('2024-05-27', 513500.00, 156500.00, 16000.00, 43000.00, 70500.00, 'Facility upkeep', 'Holiday week stability.'),

-- June 2024 (Strongest financial position)
('2024-06-03', 517500.00, 160500.00, 15500.00, 42500.00, 71000.00, 'Minimal expenses', 'Early summer financial strength.'),
('2024-06-10', 521500.00, 164500.00, 15000.00, 42000.00, 71500.00, 'Program supplies', 'Low operational overhead.'),
('2024-06-17', 525500.00, 168500.00, 14500.00, 41500.00, 72000.00, 'Transportation', 'Stable payroll and revenues.'),
('2024-06-24', 530000.00, 173000.00, 14000.00, 41000.00, 72500.00, 'Administrative costs', 'End-of-quarter financial reporting.');


-- February 2026
INSERT INTO finance_weekly (
  date, total_assets, operating_account_balance,
  bills_paid, payroll_paid, revenue_received,
  major_expenses, notes, created_by
)
VALUES
('2026-02-03', 187800.00, 96200.00, 14200.00, 17000.00, 42000.00,
 'Payroll, Heating, Snow removal', 'Sustained winter costs', 1),

('2026-02-10', 190600.00, 98000.00, 13800.00, 17000.00, 44000.00,
 'Payroll, Emergency supplies', 'Cold weather response', 1),

('2026-02-17', 193400.00, 99800.00, 14500.00, 17000.00, 46000.00,
 'Payroll, Maintenance', 'Mid-winter stability', 1),

('2026-02-24', 196200.00, 101500.00, 14000.00, 17000.00, 47000.00,
 'Payroll, Utilities', 'Preparing for spring transition', 1);