const FacultyData = require("../models/FacultyData");

exports.getFacultyDashboard = async (req, res) => {
  try {
    const facultyData = await FacultyData.findOne({ user: req.user.id }).populate('user', 'name username email');
    
    if (!facultyData) {
      return res.status(404).json({ success: false, message: "Faculty data not found" });
    }

    res.status(200).json({ success: true, data: facultyData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
