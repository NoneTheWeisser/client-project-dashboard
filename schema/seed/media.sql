-- ---------------- Media Seed Data: Last 6 Months ----------------
INSERT INTO media_stats (
    month_date, platform, total_visits, unique_visits, pageviews, bounce_rate, 
    social_views, audience_start, audience_end, total_sent, total_opens, open_rate, total_clicks, click_rate, notes
)
VALUES
-- Website Metrics
('2025-08-01', 'Website', 5200, 4300, 9800, 58.5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'August Website Metrics'),
('2025-09-01', 'Website', 4800, 4000, 9400, 60.2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'September Website Metrics'),
('2025-10-01', 'Website', 5600, 4500, 10500, 57.8, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'October Website Metrics'),
('2025-11-01', 'Website', 6100, 5000, 11500, 55.5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'November Website Metrics'),
('2025-12-01', 'Website', 5900, 4700, 11000, 56.7, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'December Website Metrics'),
('2026-01-01', 'Website', 6300, 5100, 11800, 54.9, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'January Website Metrics'),

-- Facebook Metrics
('2025-08-01', 'Facebook', NULL, NULL, NULL, NULL, 31200, 6200, 6250, NULL, NULL, NULL, NULL, NULL, 'August Facebook Metrics'),
('2025-09-01', 'Facebook', NULL, NULL, NULL, NULL, 29800, 6250, 6300, NULL, NULL, NULL, NULL, NULL, 'September Facebook Metrics'),
('2025-10-01', 'Facebook', NULL, NULL, NULL, NULL, 34500, 6300, 6350, NULL, NULL, NULL, NULL, NULL, 'October Facebook Metrics'),
('2025-11-01', 'Facebook', NULL, NULL, NULL, NULL, 36800, 6350, 6400, NULL, NULL, NULL, NULL, NULL, 'November Facebook Metrics'),
('2025-12-01', 'Facebook', NULL, NULL, NULL, NULL, 38200, 6400, 6450, NULL, NULL, NULL, NULL, NULL, 'December Facebook Metrics'),
('2026-01-01', 'Facebook', NULL, NULL, NULL, NULL, 40000, 6450, 6500, NULL, NULL, NULL, NULL, NULL, 'January Facebook Metrics'),

-- Instagram Metrics
('2025-08-01', 'Instagram', NULL, NULL, NULL, NULL, 1250, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'August Instagram Metrics'),
('2025-09-01', 'Instagram', NULL, NULL, NULL, NULL, 980, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'September Instagram Metrics'),
('2025-10-01', 'Instagram', NULL, NULL, NULL, NULL, 1430, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'October Instagram Metrics'),
('2025-11-01', 'Instagram', NULL, NULL, NULL, NULL, 1680, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'November Instagram Metrics'),
('2025-12-01', 'Instagram', NULL, NULL, NULL, NULL, 2120, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'December Instagram Metrics'),
('2026-01-01', 'Instagram', NULL, NULL, NULL, NULL, 2500, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'January Instagram Metrics'),

-- TikTok Metrics
('2025-08-01', 'TikTok', NULL, NULL, NULL, NULL, 480, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'August TikTok Metrics'),
('2025-09-01', 'TikTok', NULL, NULL, NULL, NULL, 560, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'September TikTok Metrics'),
('2025-10-01', 'TikTok', NULL, NULL, NULL, NULL, 620, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'October TikTok Metrics'),
('2025-11-01', 'TikTok', NULL, NULL, NULL, NULL, 700, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'November TikTok Metrics'),
('2025-12-01', 'TikTok', NULL, NULL, NULL, NULL, 838, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'December TikTok Metrics'),
('2026-01-01', 'TikTok', NULL, NULL, NULL, NULL, 910, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'January TikTok Metrics'),

-- Newsletter Metrics
('2025-08-15', 'Newsletter', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2950, 450, 15.3, 75, 2.5, 'Aug 15 Newsletter'),
('2025-09-01', 'Newsletter', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 3000, 480, 16.0, 80, 2.7, 'September Newsletter'),
('2025-10-01', 'Newsletter', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 3100, 510, 16.5, 95, 3.0, 'October Newsletter'),
('2025-11-01', 'Newsletter', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 3200, 530, 16.6, 100, 3.1, 'November Newsletter'),
('2025-12-01', 'Newsletter', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 3300, 560, 17.0, 110, 3.3, 'December Newsletter'),
('2026-01-01', 'Newsletter', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 3400, 580, 17.1, 115, 3.4, 'January Newsletter');

INSERT INTO media_stats (
    month_date, platform, total_visits, unique_visits, pageviews, bounce_rate, 
    social_views, audience_start, audience_end, total_sent, total_opens, open_rate, total_clicks, click_rate, notes
)
VALUES-- Website

('2026-02-01', 'Website', 6100, 4950, 11200, 55.6, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'February Website Metrics'),

-- Facebook
('2026-02-01', 'Facebook', NULL, NULL, NULL, NULL, 39500, 6500, 6550, NULL, NULL, NULL, NULL, NULL, 'February Facebook Metrics'),

-- Instagram
('2026-02-01', 'Instagram', NULL, NULL, NULL, NULL, 2650, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'February Instagram Metrics'),

-- TikTok
('2026-02-01', 'TikTok', NULL, NULL, NULL, NULL, 980, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'February TikTok Metrics'),

-- Newsletter
('2026-02-01', 'Newsletter', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 3500, 610, 17.4, 125, 3.6, 'February Newsletter');