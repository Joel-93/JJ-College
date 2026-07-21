import { useAuth } from '../../context/AuthContext.jsx';

const StudentOverview = () => {
  const { user } = useAuth();
  const firstName = user?.name?.split(' ')[0] || 'Student';

  const stats = [
    { label: 'Enrolled Courses', value: '6', icon: '📚', color: 'from-sky-400 to-cyan-400', bg: 'bg-sky-50' },
    { label: 'Attendance', value: '87%', icon: '📋', color: 'from-emerald-400 to-green-400', bg: 'bg-emerald-50' },
    { label: 'CGPA', value: '8.4', icon: '🏆', color: 'from-amber-400 to-yellow-400', bg: 'bg-amber-50' },
    { label: 'Pending Fees', value: '₹0', icon: '💳', color: 'from-violet-400 to-purple-400', bg: 'bg-violet-50' },
  ];

  const upcomingClasses = [
    { time: '09:00 AM', subject: 'Data Structures & Algorithms', room: 'Room 301', faculty: 'Dr. S. Meena' },
    { time: '10:30 AM', subject: 'Database Management Systems', room: 'Lab 204', faculty: 'Dr. R. Karthik' },
    { time: '01:00 PM', subject: 'Computer Networks', room: 'Room 405', faculty: 'Prof. A. Kumar' },
    { time: '03:00 PM', subject: 'Operating Systems', room: 'Room 302', faculty: 'Dr. P. Vani' },
  ];

  const announcements = [
    { title: 'Internal Exam Schedule Released', date: 'Jul 25, 2026', type: 'Exam', color: 'bg-red-100 text-red-700' },
    { title: 'Hackathon Registration Open', date: 'Jul 22, 2026', type: 'Event', color: 'bg-sky-100 text-sky-700' },
    { title: 'Library hours extended till 10PM', date: 'Jul 20, 2026', type: 'Notice', color: 'bg-amber-100 text-amber-700' },
    { title: 'Placement Training - Batch 3', date: 'Jul 28, 2026', type: 'Training', color: 'bg-emerald-100 text-emerald-700' },
  ];

  const assignments = [
    { subject: 'Data Structures', title: 'Binary Tree Implementation', due: 'Jul 24', status: 'Pending', statusColor: 'bg-amber-100 text-amber-700' },
    { subject: 'DBMS', title: 'ER Diagram for Library System', due: 'Jul 22', status: 'Submitted', statusColor: 'bg-emerald-100 text-emerald-700' },
    { subject: 'Networks', title: 'TCP/IP Protocol Analysis', due: 'Jul 26', status: 'Pending', statusColor: 'bg-amber-100 text-amber-700' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
        <div className="absolute bottom-0 left-1/2 w-24 h-24 bg-white/5 rounded-full translate-y-8"></div>
        <div className="relative z-10">
          <p className="text-sky-100 text-sm font-medium">Good Morning 👋</p>
          <h2 className="text-2xl sm:text-3xl font-bold mt-1">{firstName}!</h2>
          <p className="text-sky-100 text-sm mt-2 max-w-md">You have 4 classes today and 2 pending assignments. Keep up the good work!</p>
          <div className="flex gap-3 mt-4">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold">B.E CSE — 3rd Year</span>
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold">Section A</span>
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold hidden sm:inline">Roll: CSE2024042</span>
          </div>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className={`${s.bg} rounded-2xl p-5 border border-slate-100 hover:shadow-md transition`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{s.icon}</span>
              <div className={`w-8 h-8 bg-gradient-to-br ${s.color} rounded-lg opacity-30`}></div>
            </div>
            <p className="text-2xl font-bold text-slate-800">{s.value}</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">📅 Today's Classes</h3>
            <span className="text-xs text-sky-600 font-semibold">Monday, Jul 21</span>
          </div>
          <div className="divide-y divide-slate-50">
            {upcomingClasses.map((c, i) => (
              <div key={i} className="px-6 py-4 flex items-center gap-4 hover:bg-sky-50/50 transition">
                <div className="text-center shrink-0 w-16">
                  <p className="text-sm font-bold text-sky-700">{c.time}</p>
                </div>
                <div className="w-1 h-10 bg-gradient-to-b from-sky-400 to-cyan-400 rounded-full shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-800 text-sm truncate">{c.subject}</p>
                  <p className="text-xs text-slate-500">{c.faculty} • {c.room}</p>
                </div>
                <span className="text-xs bg-sky-100 text-sky-700 px-2 py-0.5 rounded-full font-medium hidden sm:inline">Upcoming</span>
              </div>
            ))}
          </div>
        </div>

        {/* Announcements */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">📢 Announcements</h3>
          </div>
          <div className="divide-y divide-slate-50">
            {announcements.map((a, i) => (
              <div key={i} className="px-6 py-3 hover:bg-slate-50 transition">
                <div className="flex items-start gap-2">
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full shrink-0 mt-0.5 ${a.color}`}>{a.type}</span>
                  <div>
                    <p className="text-sm font-medium text-slate-800 leading-tight">{a.title}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{a.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pending Assignments */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-bold text-slate-800 flex items-center gap-2">📝 Assignments</h3>
          <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold">2 Pending</span>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                {['Subject', 'Assignment', 'Due Date', 'Status'].map(h => (
                  <th key={h} className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {assignments.map((a, i) => (
                <tr key={i} className="hover:bg-sky-50/50 transition">
                  <td className="px-6 py-3 font-medium text-sky-700">{a.subject}</td>
                  <td className="px-6 py-3 text-slate-700">{a.title}</td>
                  <td className="px-6 py-3 text-slate-500">{a.due}</td>
                  <td className="px-6 py-3">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${a.statusColor}`}>{a.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentOverview;
