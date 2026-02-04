const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();


router.get("/", async (req, res) => {
  // Look up demo user
  const result = await pool.query(`SELECT * FROM "user" WHERE username=$1`, ["demo"]);
  const demoUser = result.rows[0];

  // Attach to session
  req.login(demoUser, (err) => {
    if (err) return res.status(500).send("Error logging in demo user");

    // Redirect to the home page
    res.redirect("/"); 
  });
});

module.exports = router;
