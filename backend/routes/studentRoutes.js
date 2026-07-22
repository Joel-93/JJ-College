const express = require("express");
const { getStudentDashboard } = require("../controllers/studentController");
const auth = require("../middleware/authmiddleware"); // Assuming you have an auth middleware to get req.user

const router = express.Router();

router.get("/dashboard", auth, getStudentDashboard);

module.exports = router;
