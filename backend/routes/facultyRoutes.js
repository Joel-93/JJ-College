const express = require("express");
const { getFacultyDashboard } = require("../controllers/facultyController");
const auth = require("../middleware/authmiddleware");

const router = express.Router();

router.get("/dashboard", auth, getFacultyDashboard);

module.exports = router;
