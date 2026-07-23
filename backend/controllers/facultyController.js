const FacultyData = require("../models/FacultyData");
const User = require("../models/User");
const { createDummyFacultyData } = require("../utils/dummyDataGenerator");

exports.getFacultyDashboard = async (req, res) => {
  try {
    let facultyData = await FacultyData.findOne({ user: req.user.id }).populate('user', 'name username email');
    
    if (!facultyData) {
      const user = await User.findById(req.user.id);
      if (user) {
        facultyData = await createDummyFacultyData(user);
        facultyData = await FacultyData.findById(facultyData._id).populate('user', 'name username email');
      }
    }

    if (!facultyData) {
      return res.status(404).json({ success: false, message: "Faculty data not found" });
    }

    res.status(200).json({ success: true, data: facultyData });
  } catch (error) {
    console.error("getFacultyDashboard Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
