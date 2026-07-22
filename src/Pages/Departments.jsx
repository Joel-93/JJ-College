import { Link } from 'react-router-dom';
import { FaUsers, FaFlask, FaChalkboardTeacher, FaMicroscope, FaChartLine, FaRocket, FaCode, FaGlobe, FaBrain, FaBroadcastTower, FaBolt, FaCog, FaBuilding, FaChartBar, FaTrophy, FaMicrophone, FaFutbol, FaVideo } from 'react-icons/fa';

const Departments = () => {
  const departments = [
    {
      id: 1,
      name: 'Computer Science & Engineering',
      code: 'CSE',
      icon: <FaCode className="text-indigo-900" />,
      description: 'Pioneering the future of computing with cutting-edge curriculum in AI, ML, Cloud Computing, and Cybersecurity.',
      hod: 'Dr. S. Meena, Ph.D.',
      labs: ['Programming Lab', 'AI & ML Lab', 'Database Lab', 'Cloud Computing Lab', 'Cyber Security Lab'],
      faculty: 24,
      students: 480,
    },
    {
      id: 2,
      name: 'Information Technology',
      code: 'IT',
      icon: <FaGlobe className="text-indigo-900" />,
      description: 'Bridging technology and business with expertise in web development, networking, and data analytics.',
      hod: 'Dr. R. Karthik, Ph.D.',
      labs: ['Web Technology Lab', 'Networking Lab', 'Mobile App Development Lab', 'Data Analytics Lab'],
      faculty: 18,
      students: 360,
    },
    {
      id: 3,
      name: 'Artificial Intelligence & Data Science',
      code: 'AI&DS',
      icon: <FaBrain className="text-indigo-900" />,
      description: 'Transforming data into intelligence with deep learning, NLP, computer vision, and big data technologies.',
      hod: 'Dr. P. Vani, Ph.D.',
      labs: ['Deep Learning Lab', 'Data Science Lab', 'NLP Lab', 'Computer Vision Lab'],
      faculty: 15,
      students: 240,
    },
    {
      id: 4,
      name: 'Electronics & Communication Engineering',
      code: 'ECE',
      icon: <FaBroadcastTower className="text-indigo-900" />,
      description: 'Innovating the world of communication with embedded systems, VLSI, signal processing, and IoT.',
      hod: 'Dr. M. Anand, Ph.D.',
      labs: ['Embedded Systems Lab', 'VLSI Lab', 'Communication Lab', 'Signal Processing Lab'],
      faculty: 20,
      students: 360,
    },
    {
      id: 5,
      name: 'Electrical & Electronics Engineering',
      code: 'EEE',
      icon: <FaBolt className="text-amber-500" />,
      description: 'Powering the future with expertise in power systems, renewable energy, control systems, and automation.',
      hod: 'Dr. L. Priya, Ph.D.',
      labs: ['Power Systems Lab', 'Electrical Machines Lab', 'Control Systems Lab', 'Renewable Energy Lab'],
      faculty: 16,
      students: 240,
    },
    {
      id: 6,
      name: 'Mechanical Engineering',
      code: 'ME',
      icon: <FaCog className="text-slate-600 animate-spin-slow" />,
      description: 'Building the world with precision in design, manufacturing, thermal systems, and robotics.',
      hod: 'Dr. K. Rajan, Ph.D.',
      labs: ['CAD/CAM Lab', 'Manufacturing Lab', 'Thermal Engineering Lab', 'Robotics Lab'],
      faculty: 18,
      students: 240,
    },
    {
      id: 7,
      name: 'Civil Engineering',
      code: 'CE',
      icon: <FaBuilding className="text-indigo-900" />,
      description: 'Creating sustainable infrastructure with expertise in structural engineering, surveying, and construction.',
      hod: 'Dr. S. Nandini, Ph.D.',
      labs: ['Survey Lab', 'Structural Engineering Lab', 'Construction Materials Lab', 'Environmental Lab'],
      faculty: 14,
      students: 180,
    },
    {
      id: 8,
      name: 'Master of Business Administration',
      code: 'MBA',
      icon: <FaChartBar className="text-indigo-900" />,
      description: 'Developing future business leaders with strategic management, finance, marketing, and entrepreneurship.',
      hod: 'Dr. R. Venkat, Ph.D.',
      labs: ['Business Analytics Lab', 'Simulation Lab', 'Finance Lab'],
      faculty: 12,
      students: 120,
    },
  ];

  const labs = [
    'Programming Laboratory',
    'Internet Laboratory',
    'Database Laboratory',
    'AI & ML Laboratory',
    'Networking Laboratory',
    'Cloud Computing Lab',
    'Language Laboratory',
    'Electronics Laboratory',
    'Electrical Machines Lab',
    'Mechanical Workshop',
    'Civil Survey Laboratory',
    'Embedded Systems Lab',
    'VLSI Design Lab',
    'Robotics Lab',
    'Data Science Lab',
    'Business Analytics Lab',
  ];

  const facultyHighlights = [
    { name: 'Dr. S. Meena', dept: 'CSE', expertise: 'Artificial Intelligence & Machine Learning' },
    { name: 'Dr. R. Karthik', dept: 'IT', expertise: 'Cloud Computing & Networking' },
    { name: 'Dr. P. Vani', dept: 'AI&DS', expertise: 'Deep Learning & NLP' },
    { name: 'Dr. M. Anand', dept: 'ECE', expertise: 'Embedded Systems & IoT' },
    { name: 'Dr. L. Priya', dept: 'EEE', expertise: 'Power Systems & Renewable Energy' },
    { name: 'Dr. K. Rajan', dept: 'ME', expertise: 'Manufacturing & Robotics' },
    { name: 'Dr. S. Nandini', dept: 'CE', expertise: 'Structural Engineering' },
  ];

  const researchAreas = [
    'Artificial Intelligence & Machine Learning',
    'Deep Learning & Neural Networks',
    'Natural Language Processing',
    'Computer Vision',
    'Internet of Things (IoT)',
    'Cloud Computing',
    'Big Data Analytics',
    'Embedded Systems',
    'VLSI Design',
    'Power Systems & Renewable Energy',
    'Sustainable Construction',
    'Robotics & Automation',
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-indigo-950 text-white py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-slate-900 opacity-90"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-indigo-900/30"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4 drop-shadow-md">
            Academic <span className="text-amber-400">Departments</span>
          </h2>
          <p className="text-lg sm:text-xl text-indigo-100 max-w-2xl mx-auto font-light leading-relaxed">
            Explore our diverse range of engineering and management programs designed to shape future leaders and innovators.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">Department Overview</h2>
            <p className="text-slate-600 leading-relaxed">
              JJ Engineering College offers a comprehensive range of undergraduate and postgraduate programs 
              across eight departments. Each department is equipped with state-of-the-art laboratories, 
              experienced faculty, and industry-aligned curriculum to ensure students receive world-class 
              education and practical exposure.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              <div className="bg-indigo-50 p-4 rounded-xl">
                <p className="text-2xl font-bold text-indigo-900">8</p>
                <p className="text-sm text-slate-600">Departments</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-xl">
                <p className="text-2xl font-bold text-indigo-900">137</p>
                <p className="text-sm text-slate-600">Faculty Members</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-xl">
                <p className="text-2xl font-bold text-indigo-900">2,220</p>
                <p className="text-sm text-slate-600">Students</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-xl">
                <p className="text-2xl font-bold text-indigo-900">16+</p>
                <p className="text-sm text-slate-600">Laboratories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Cards */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-indigo-900 mb-8 text-center border-b-2 border-indigo-100 pb-2 inline-block mx-auto block max-w-xs">
          Our Departments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                <div className="text-4xl flex items-center justify-center h-12 w-12 bg-indigo-50 rounded-xl mb-1">{dept.icon}</div>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-2 py-1 rounded">
                    {dept.code}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-indigo-900 mb-2">{dept.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{dept.description}</p>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <FaUsers className="text-indigo-600" /> {dept.students} Students
                  </span>
                  <span className="flex items-center gap-1">
                    <FaChalkboardTeacher className="text-indigo-600" /> {dept.faculty} Faculty
                  </span>
                </div>
              </div>
              <div className="bg-slate-50 px-6 py-3 border-t border-slate-100">
                <p className="text-xs text-slate-600">
                  <span className="font-semibold">HOD:</span> {dept.hod}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOD Message */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-indigo-50 rounded-2xl p-8 md:p-12 border border-indigo-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6">Message from the Head of Departments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-slate-600 italic leading-relaxed text-sm">
                  "Our departments are committed to academic excellence and holistic development. 
                  We provide a stimulating environment where students can explore, innovate, and grow 
                  into competent professionals ready to tackle global challenges."
                </p>
                <p className="text-indigo-900 font-semibold mt-3">— Dr. S. Meena</p>
                <p className="text-xs text-slate-500">Head, Department of CSE</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-slate-600 italic leading-relaxed text-sm">
                  "We believe in bridging the gap between academia and industry. Through our 
                  industry-aligned curriculum, cutting-edge labs, and research initiatives, we prepare 
                  students to become innovators and leaders in their chosen fields."
                </p>
                <p className="text-indigo-900 font-semibold mt-3">— Dr. R. Karthik</p>
                <p className="text-xs text-slate-500">Head, Department of IT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratories */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6 text-center border-b-2 border-indigo-100 pb-2 inline-block mx-auto block max-w-xs">
            Laboratories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {labs.map((lab, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100 hover:border-indigo-300 transition"
              >
                <FaFlask className="text-amber-500 text-sm" />
                <span className="text-sm text-slate-700">{lab}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Highlights */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-indigo-900 mb-8 text-center border-b-2 border-indigo-100 pb-2 inline-block mx-auto block max-w-xs">
          Faculty Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {facultyHighlights.map((faculty, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-800 font-bold text-sm">
                  {faculty.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-indigo-900 text-sm">{faculty.name}</p>
                  <p className="text-xs text-slate-500">{faculty.dept}</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                <span className="font-medium">Expertise:</span> {faculty.expertise}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Student Activities */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-indigo-900 text-white rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">Student Activities</h2>
            <p className="text-indigo-100 mb-6">
              Beyond academics, students engage in a vibrant ecosystem of technical and cultural activities.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-indigo-800/50 p-4 rounded-xl flex flex-col items-center justify-center">
                <FaCode className="text-amber-400 text-3xl mb-2" />
                <p className="text-sm font-medium">Hackathons</p>
              </div>
              <div className="bg-indigo-800/50 p-4 rounded-xl flex flex-col items-center justify-center">
                <FaMicrophone className="text-amber-400 text-3xl mb-2" />
                <p className="text-sm font-medium">Symposiums</p>
              </div>
              <div className="bg-indigo-800/50 p-4 rounded-xl flex flex-col items-center justify-center">
                <FaFutbol className="text-amber-400 text-3xl mb-2" />
                <p className="text-sm font-medium">Sports</p>
              </div>
              <div className="bg-indigo-800/50 p-4 rounded-xl flex flex-col items-center justify-center">
                <FaVideo className="text-amber-400 text-3xl mb-2" />
                <p className="text-sm font-medium">Cultural Events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6 text-center border-b-2 border-indigo-100 pb-2 inline-block mx-auto block max-w-xs">
            Research Areas
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-indigo-50 p-3 rounded-lg border border-indigo-100"
              >
                <FaMicroscope className="text-indigo-600 text-sm" />
                <span className="text-sm text-slate-700">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Statistics */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6 text-center border-b-2 border-indigo-100 pb-2 inline-block mx-auto block max-w-xs">
            Placement Statistics
          </h2>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-center">
              <thead className="bg-indigo-900 text-white">
                <tr>
                  <th className="px-6 py-4 font-semibold text-sm tracking-wider">Year</th>
                  <th className="px-6 py-4 font-semibold text-sm tracking-wider">Students Placed</th>
                  <th className="px-6 py-4 font-semibold text-sm tracking-wider">Highest Package</th>
                  <th className="px-6 py-4 font-semibold text-sm tracking-wider">Average Package</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4 font-semibold">2023</td>
                  <td className="px-6 py-4">412</td>
                  <td className="px-6 py-4 text-emerald-600 font-medium">12 LPA</td>
                  <td className="px-6 py-4">4.8 LPA</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4 font-semibold">2024</td>
                  <td className="px-6 py-4">438</td>
                  <td className="px-6 py-4 text-emerald-600 font-medium">15 LPA</td>
                  <td className="px-6 py-4">5.4 LPA</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4 font-semibold">2025</td>
                  <td className="px-6 py-4">465</td>
                  <td className="px-6 py-4 text-emerald-600 font-medium">18 LPA</td>
                  <td className="px-6 py-4">6.1 LPA</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-6">
            <Link
              to="/placement"
              className="inline-flex items-center gap-2 bg-indigo-900 hover:bg-indigo-800 text-white font-bold px-6 py-3 rounded-lg transition"
            >
              <FaChartLine /> View Placement Details
            </Link>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="max-w-7xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-amber-400 mb-4">Ready to Join Us?</h2>
          <p className="text-indigo-100 max-w-2xl mx-auto mb-6">
            Take the first step towards a rewarding career in engineering or management. 
            Apply now and become part of the JJ Engineering College family.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/admissions"
              className="bg-amber-400 hover:bg-amber-300 text-indigo-900 font-bold px-6 py-3 rounded-lg transition transform hover:-translate-y-0.5"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="bg-indigo-700 hover:bg-indigo-600 text-white font-bold px-6 py-3 rounded-lg transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Departments;