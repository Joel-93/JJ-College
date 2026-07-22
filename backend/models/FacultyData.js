const mongoose = require("mongoose");

const facultyDataSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    employeeId: String,
    department: String,
    designation: String,
    joiningDate: String,
    qualification: String,
    experience: String,
    phone: String,
    bloodGroup: String,
    address: String,
    publications: String,
    classesAssigned: [
      {
        code: String,
        name: String,
        section: String,
        year: String,
        students: Number,
        schedule: String,
        type: { type: String },
        color: String,
      }
    ]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("FacultyData", facultyDataSchema);
