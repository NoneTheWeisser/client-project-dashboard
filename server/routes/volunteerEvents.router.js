const express = require("express");
const pool = require("../modules/pool");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

const router = express.Router();
// GET /api/volunteer-events
router.get("/", rejectUnauthenticated, async (req, res) => {
  const sqlText = `
  SELECT ve.*, v.name AS volunteer_name
  FROM volunteer_events ve
  JOIN volunteers v ON ve.volunteer_id = v.id
  ORDER BY ve.event_date DESC;
  `;
  try {
    const result = await pool.query(sqlText);
    res.json(result.rows);
  } catch (err) {
    console.error("GET /api/volunteer-events error:", err);
    res.sendStatus(500);
  }
});
// POST /api/volunteer-events
router.post("/", rejectUnauthenticated, async (req, res) => {
  const {
    volunteer_id,
    event_date,
    location,
    number_volunteers,
    software_signups,
  } = req.body;

  if (!volunteer_id || !event_date || !location) {
    return res
      .status(400)
      .json({ error: "volunteer_id, event_date, and location are required" });
  }

  const sqlText = `
  INSERT INTO volunteer_events
  (volunteer_id, event_date, location, number_volunteers, software_signups)
  VALUES ($1, DATE_TRUNC('week', $2::date), $3, $4, $5)
  RETURNING *;
  `;

  try {
    const result = await pool.query(sqlText, [
      volunteer_id,
      event_date,
      location,
      number_volunteers ?? 1,
      software_signups ?? 0,
    ]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("POST /api/volunteer-events error:", err);
    res.sendStatus(500);
  }
});

// GET /api/volunteer-events/:id
router.get("/:id", rejectUnauthenticated, async (req, res) => {
  const eventId = req.params.id;
  const sqlText = `
  SELECT ve.*, v.name AS volunteer_name
  FROM volunteer_events ve
  JOIN volunteers v ON ve.volunteer_id = v.id
  WHERE ve.id = $1;
  `;
  try {
    const result = await pool.query(sqlText, [eventId]);
    if (result.rowCount === 0) return res.sendStatus(404);
    res.json(result.rows[0]);
  } catch (err) {
    console.error("GET /api/volunteer-events/:id error:", err);
    res.sendStatus(500);
  }
});
// PUT /api/volunteer-events/:id
router.put("/:id", rejectUnauthenticated, async (req, res) => {
  const eventId = req.params.id;
  const {
    volunteer_id,
    event_date,
    location,
    number_volunteers,
    software_signups,
  } = req.body;

  const sqlText = `
    UPDATE volunteer_events
    SET
      volunteer_id = COALESCE($1, volunteer_id),
      event_date = COALESCE($2, event_date),
      location = COALESCE($3, location),
      number_volunteers = COALESCE($4, number_volunteers),
      software_signups = COALESCE($5, software_signups),
      updated_at = CURRENT_TIMESTAMP
    WHERE id = $6
    RETURNING *;
  `;

  try {
    const result = await pool.query(sqlText, [
      volunteer_id,
      event_date,
      location,
      number_volunteers,
      software_signups,
      eventId,
    ]);
    if (result.rowCount === 0) return res.sendStatus(404);
    res.json(result.rows[0]);
  } catch (err) {
    console.error("PUT /api/volunteer-events/:id error:", err);
    res.sendStatus(500);
  }
});

// DELETE /api/volunteer-events/:id
router.delete("/:id", rejectUnauthenticated, async (req, res) => {
  const eventId = req.params.id;

  const sqlText = `DELETE FROM volunteer_events WHERE id = $1;`;
  try {
    const result = await pool.query(sqlText, [eventId]);
    if (result.rowCount === 0) return res.sendStatus(404);
    res.sendStatus(204);
  } catch (err) {
    console.error("DELETE /api/volunteer-events/:id error:", err);
    res.sendStatus(500);
  }
});

module.exports = router;
