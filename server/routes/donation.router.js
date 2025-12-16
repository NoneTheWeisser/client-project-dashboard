const express = require("express");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");

const router = express.Router();

//  GET /api/donors
router.get("/", (req, res) => {
  const sqlText = `SELECT * FROM donors ORDER BY name;`;

  pool
    .query(sqlText)
    .then((result) => res.json(result.rows))
    .catch((error) => {
      console.error("GET donors error", error);
      res.sendStatus(500);
    });
});

//  POST /api/donors
router.post("/", (req, res) => {
  const { name, type } = req.body;
  const sqlText = `
    INSERT INTO donors (name, type)
    VALUES ($1, $2)
    RETURNING *;`;

  pool
    .query(sqlText, [name, type])
    .then((result) => res.status(201).json(result.rows[0]))
    .catch((error) => {
      console.error("POST donor error", error);
      res.sendStatus(500);
    });
});
//  PUT /api/donors/:id

//  DELETE /api/donors/:id

//  GET /api/donations

//  POST /api/donations

//  PUT /api/donations/:id

//  DELETE /api/donations/:id


module.exports = router;
