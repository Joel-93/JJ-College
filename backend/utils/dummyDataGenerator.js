const StudentData = require("../models/StudentData");
const FacultyData = require("../models/FacultyData");

const createDummyStudentData = async (user) => {
  try {
    const existing = await StudentData.findOne({ user: user._id });
    if (existing) return existing;

    const depts = [
      "Computer Science & Engineering",
      "Information Technology",
      "Artificial Intelligence & Data Science",
      "Electronics & Communication Engineering"
    ];
    const dept = depts[Math.floor(Math.random() * depts.length)];
    const yearNum = Math.floor(Math.random() * 4) + 1;
    const yearStr = `${yearNum}${yearNum === 1 ? 'st' : yearNum === 2 ? 'nd' : yearNum === 3 ? 'rd' : 'th'} Year`;
    const section = ['A', 'B', 'C'][Math.floor(Math.random() * 3)];
    const rollNo = user.username || `CSE${Math.floor(1000 + Math.random() * 9000)}`;

    return await StudentData.create({
      user: user._id,
      rollNo: rollNo,
      regNo: `JJEC/2024/CSE/${Math.floor(100 + Math.random() * 900)}`,
      department: dept,
      year: yearStr,
      section: section,
      batch: '2024–2028',
      dob: '15-Mar-2005',
      phone: '+91 ' + Math.floor(7000000000 + Math.random() * 2999999999),
      parentName: 'Mr. ' + (user.name ? user.name.split(' ')[0] : 'Parent') + ' S.',
      parentPhone: '+91 ' + Math.floor(7000000000 + Math.random() * 2999999999),
      bloodGroup: ['O+', 'A+', 'B+', 'AB+'][Math.floor(Math.random() * 4)],
      address: `No. ${Math.floor(1 + Math.random() * 100)}, Gandhi Street, Trichy, Tamil Nadu - 620001`,
      overallAttendance: Math.floor(78 + Math.random() * 18),
      cgpa: Number((7.4 + Math.random() * 2.2).toFixed(1)),
      courses: [
        { code: 'CS301', name: 'Data Structures & Algorithms', faculty: 'Dr. S. Meena', credits: 4, attendance: Math.floor(82 + Math.random() * 15), grade: 'A', color: 'from-sky-500 to-cyan-500' },
        { code: 'CS302', name: 'Database Management Systems', faculty: 'Dr. R. Karthik', credits: 4, attendance: Math.floor(80 + Math.random() * 16), grade: 'A', color: 'from-violet-500 to-purple-500' },
        { code: 'CS303', name: 'Computer Networks', faculty: 'Prof. A. Kumar', credits: 3, attendance: Math.floor(78 + Math.random() * 18), grade: 'B+', color: 'from-emerald-500 to-green-500' },
        { code: 'CS304', name: 'Operating Systems', faculty: 'Dr. P. Vani', credits: 4, attendance: Math.floor(85 + Math.random() * 12), grade: 'A', color: 'from-amber-500 to-orange-500' },
        { code: 'CS305', name: 'Software Engineering', faculty: 'Prof. M. Reddy', credits: 3, attendance: Math.floor(75 + Math.random() * 20), grade: 'B', color: 'from-rose-500 to-pink-500' },
      ],
      semesters: [
        {
          sem: 'Semester 5 (Current)',
          gpa: (8.0 + Math.random() * 1.5).toFixed(1),
          status: 'In Progress',
          subjects: [
            { code: 'CS301', name: 'Data Structures & Algorithms', internal: 45, external: '-', total: '-', grade: '-', credits: 4 },
            { code: 'CS302', name: 'Database Management Systems', internal: 42, external: '-', total: '-', grade: '-', credits: 4 },
            { code: 'CS303', name: 'Computer Networks', internal: 38, external: '-', total: '-', grade: '-', credits: 3 },
            { code: 'CS304', name: 'Operating Systems', internal: 44, external: '-', total: '-', grade: '-', credits: 4 },
            { code: 'CS305', name: 'Software Engineering', internal: 36, external: '-', total: '-', grade: '-', credits: 3 },
          ]
        }
      ],
      schedule: {
        Monday: ['Data Structures & Algorithms', 'Database Management', 'Operating Systems', 'Software Engineering'],
        Tuesday: ['Operating Systems', 'Data Structures', 'Software Engineering', 'Probability & Stats'],
        Wednesday: ['Computer Networks', 'Operating Systems', 'Data Structures', 'Free'],
        Thursday: ['Database Management', 'Probability & Stats', 'DSA Lab', 'DSA Lab'],
        Friday: ['Software Engineering', 'Computer Networks', 'Operating Systems', 'Library'],
        Saturday: ['Web Technology', 'Aptitude Training', 'Soft Skills', 'Free'],
        Sunday: ['Free', 'Free', 'Free', 'Free']
      }
    });
  } catch (err) {
    console.error("Error generating dummy student data:", err);
    return null;
  }
};

const createDummyFacultyData = async (user) => {
  try {
    const existing = await FacultyData.findOne({ user: user._id });
    if (existing) return existing;

    const depts = [
      "Computer Science & Engineering",
      "Information Technology",
      "Artificial Intelligence & Data Science"
    ];
    const dept = depts[Math.floor(Math.random() * depts.length)];

    return await FacultyData.create({
      user: user._id,
      employeeId: `JJEC/FAC/CSE/${Math.floor(10 + Math.random() * 90)}`,
      department: dept,
      designation: ['Assistant Professor', 'Associate Professor', 'Professor'][Math.floor(Math.random() * 3)],
      joiningDate: '12-Aug-2018',
      qualification: 'Ph.D in Computer Science, M.Tech',
      experience: `${Math.floor(4 + Math.random() * 10)} Years`,
      phone: '+91 ' + Math.floor(7000000000 + Math.random() * 2999999999),
      bloodGroup: ['B+', 'O+', 'A+'][Math.floor(Math.random() * 3)],
      address: 'Faculty Quarters, Block A, JJEC Campus, Trichy - 620001',
      publications: `${Math.floor(5 + Math.random() * 15)} International Journals, ${Math.floor(3 + Math.random() * 8)} Conference Papers`,
      classesAssigned: [
        { code: 'CS301', name: 'Data Structures & Algorithms', section: 'CSE-A', year: '3rd Year', students: 62, schedule: 'Mon, Wed, Fri', type: 'Theory', color: 'from-emerald-500 to-teal-500' },
        { code: 'CS301', name: 'Data Structures & Algorithms', section: 'CSE-B', year: '3rd Year', students: 60, schedule: 'Tue, Thu, Fri', type: 'Theory', color: 'from-sky-500 to-cyan-500' },
        { code: 'CS301L', name: 'DSA Lab', section: 'CSE-A', year: '3rd Year', students: 62, schedule: 'Monday', type: 'Practical', color: 'from-violet-500 to-purple-500' },
        { code: 'CS405', name: 'Machine Learning', section: 'AI&DS-A', year: '4th Year', students: 64, schedule: 'Mon, Wed, Thu', type: 'Theory', color: 'from-amber-500 to-orange-500' }
      ]
    });
  } catch (err) {
    console.error("Error generating dummy faculty data:", err);
    return null;
  }
};

module.exports = {
  createDummyStudentData,
  createDummyFacultyData
};
