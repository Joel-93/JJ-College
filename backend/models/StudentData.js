const mongoose = require("mongoose");

const studentDataSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    rollNo: String,
    regNo: String,
    department: String,
    year: String,
    section: String,
    batch: String,
    dob: String,
    phone: String,
    parentName: String,
    parentPhone: String,
    bloodGroup: String,
    address: String,
    overallAttendance: Number,
    cgpa: Number,
    courses: [
      {
        code: String,
        name: String,
        faculty: String,
        credits: Number,
        attendance: Number,
        grade: String,
        color: String,
      }
    ],
    semesters: [
      {
        sem: String,
        gpa: String,
        status: String,
        subjects: [
          {
            code: String,
            name: String,
            internal: mongoose.Schema.Types.Mixed,
            external: mongoose.Schema.Types.Mixed,
            total: mongoose.Schema.Types.Mixed,
            grade: String,
            credits: Number,
          }
        ]
      }
    ],
    schedule: {
      type: Map,
      of: [String]
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("StudentData", studentDataSchema);
