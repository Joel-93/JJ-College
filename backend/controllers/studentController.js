const StudentData = require("../models/StudentData");
const User = require("../models/User");
const { createDummyStudentData } = require("../utils/dummyDataGenerator");

exports.getStudentDashboard = async (req, res) => {
  try {
    let studentData = await StudentData.findOne({ user: req.user.id }).populate('user', 'name username email');
    
    if (!studentData) {
      const user = await User.findById(req.user.id);
      if (user) {
        studentData = await createDummyStudentData(user);
        studentData = await StudentData.findById(studentData._id).populate('user', 'name username email');
      }
    }

    if (!studentData) {
      return res.status(404).json({ success: false, message: "Student data not found" });
    }

    res.status(200).json({ success: true, data: studentData });
  } catch (error) {
    console.error("getStudentDashboard Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
