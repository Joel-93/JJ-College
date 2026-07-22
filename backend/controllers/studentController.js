const StudentData = require("../models/StudentData");

exports.getStudentDashboard = async (req, res) => {
  try {
    const studentData = await StudentData.findOne({ user: req.user.id }).populate('user', 'name username email');
    
    if (!studentData) {
      return res.status(404).json({ success: false, message: "Student data not found" });
    }

    res.status(200).json({ success: true, data: studentData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
