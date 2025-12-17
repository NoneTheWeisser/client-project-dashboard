const express = require("express");
const pool = require("../modules/pool");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

const router = express.Router();

//  GET /api/donations
router.get("/", rejectUnauthenticated, async (req, res) => {
  const sqlText = `
  SELECT
  d.id,
  d.donor_id,
  d.date,
  d.amount,
  d.notable,
  d.restricted,
  d.notes,
  donors.name AS donor_name,
  donors.type AS donor_type
  FROM donations d
  JOIN donors on d.donor_id = donors.id
  ORDER BY d.date DESC;
  `;
  try {
    const result = await pool.query(sqlText);
    res.json(result.rows);
  } catch (err) {
    console.error("GET /api/donations error:", err);
    res.sendStatus(500);
  }
});

//  POST /api/donations
router.post("/", rejectUnauthenticated, async (req, res) => {
  const { donor_id, date, amount, notable, restricted, notes } = req.body;

  const sqlText = `
  INSERT INTO donations 
  (donor_id, date, amount, notable, restricted, notes)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *;
  `;
  try {
    const result = await pool.query(sqlText, [
      donor_id,
      date,
      amount,
      notable ?? false,
      restricted ?? false,
      notes,
    ]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("POST /api/donations error:", err);
    res.sendStatus(500);
  }
});

//  PUT /api/donations/:id

//  DELETE /api/donations/:id

module.exports = router;
