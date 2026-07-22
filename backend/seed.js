const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('MongoDB Connected');
};

const User = require('./models/User');
const StudentData = require('./models/StudentData');
const FacultyData = require('./models/FacultyData');

const seedUsers = async () => {
  await connectDB();

  // Clear ALL existing users and data
  await User.deleteMany({});
  await StudentData.deleteMany({});
  await FacultyData.deleteMany({});

  const users = [
    { name: 'Admin User', email: 'admin@gmail.com', username: 'admin', password: 'admin@123', role: 'admin' },
    { name: 'Dr. Smith', email: 'faculty@gmail.com', username: 'fac_cse01', password: 'faculty@123', role: 'faculty' },
    { name: 'Joel', email: 'joel.student@gmail.com', username: '23ucs082', password: 'student@123', role: 'student' },
    { name: 'Sam', email: 'sam.student@gmail.com', username: '23ucs083', password: 'student@123', role: 'student' },
  ];

  for (const u of users) {
    const existing = await User.findOne({ username: u.username });
    if (existing) {
      console.log(`Already exists: ${u.username}`);
      continue;
    }
    const hashed = await bcrypt.hash(u.password, 10);
    const user = await User.create({ name: u.name, email: u.email, username: u.username, password: hashed, role: u.role });
    console.log(`Created User: ${u.username} (${u.role})`);

    // Create associated data
    if (user.role === 'student') {
      await StudentData.create({
        user: user._id,
        rollNo: u.username, // using username as rollNo for simplicity
        regNo: `JJEC/2023/CSE/${u.username.slice(-3)}`,
        department: 'Computer Science & Engineering',
        year: '3rd Year',
        section: 'A',
        batch: '2023-2027',
        dob: '15-Mar-2005',
        phone: '+91 98765 43210',
        parentName: 'Mr. Parent',
        parentPhone: '+91 98765 43211',
        bloodGroup: 'O+',
        address: 'No. 12, Gandhi Street, Trichy, Tamil Nadu - 620001',
        overallAttendance: u.name === 'Joel' ? 88 : 72,
        cgpa: u.name === 'Joel' ? 8.6 : 7.4,
        courses: [
          { code: 'CS301', name: 'Data Structures & Algorithms', faculty: 'Dr. S. Meena', credits: 4, attendance: 92, grade: 'A', color: 'from-sky-500 to-cyan-500' },
          { code: 'CS302', name: 'Database Management Systems', faculty: 'Dr. R. Karthik', credits: 4, attendance: 88, grade: 'A', color: 'from-violet-500 to-purple-500' }
        ],
        semesters: [
          {
            sem: 'Semester 5 (Current)',
            gpa: '8.6',
            status: 'In Progress',
            subjects: [
              { code: 'CS301', name: 'Data Structures & Algorithms', internal: 45, external: '-', total: '-', grade: '-', credits: 4 }
            ]
          }
        ],
        schedule: {
          Monday: ['DSA', 'DBMS', 'Free'],
          Tuesday: ['OS', 'DSA', 'SE'],
          Wednesday: ['CN', 'OS', 'DSA'],
          Thursday: ['DBMS', 'Math', 'DSA Lab'],
          Friday: ['SE', 'CN', 'OS']
        }
      });
      console.log(`Created StudentData for ${u.username}`);
    } else if (user.role === 'faculty') {
      await FacultyData.create({
        user: user._id,
        employeeId: 'JJEC/FAC/CSE/012',
        department: 'Computer Science & Engineering',
        designation: 'Assistant Professor',
        joiningDate: '12-Aug-2018',
        qualification: 'Ph.D in Machine Learning, M.Tech (CSE)',
        experience: '8 Years',
        phone: '+91 98765 12345',
        bloodGroup: 'B+',
        address: 'Faculty Quarters, Block A, JJEC Campus, Trichy - 620001',
        publications: '12 International Journals, 5 Conference Papers',
        classesAssigned: [
          { code: 'CS301', name: 'Data Structures & Algorithms', section: 'CSE-A', year: '3rd Year', students: 62, schedule: 'Mon, Wed, Fri', type: 'Theory', color: 'from-emerald-500 to-teal-500' }
        ]
      });
      console.log(`Created FacultyData for ${u.username}`);
    }
  }

  console.log('Seed complete!');
  process.exit(0);
};

seedUsers().catch(err => { console.error(err); process.exit(1); });
