import { useAuth } from '../../context/AuthContext.jsx';

const FacultyOverview = () => {
  const { user } = useAuth();
  const firstName = user?.name?.split(' ')[0] || 'Professor';

  const stats = [
    { label: 'Classes Today', value: '4', icon: '🏫', bg: 'bg-emerald-50', accent: 'text-emerald-700' },
    { label: 'Total Students', value: '186', icon: '👥', bg: 'bg-sky-50', accent: 'text-sky-700' },
    { label: 'Subjects Handled', value: '3', icon: '📚', bg: 'bg-violet-50', accent: 'text-violet-700' },
    { label: 'Avg Attendance', value: '84%', icon: '📊', bg: 'bg-amber-50', accent: 'text-amber-700' },
  ];

  const todayClasses = [
    { time: '09:00 AM', subject: 'Data Structures & Algorithms', section: 'CSE-A', room: 'Room 301', students: 62 },
    { time: '10:30 AM', subject: 'Data Structures & Algorithms', section: 'CSE-B', room: 'Room 305', students: 60 },
    { time: '01:00 PM', subject: 'Machine Learning', section: 'AI&DS-A', room: 'Lab 201', students: 64 },
    { time: '03:00 PM', subject: 'DSA Lab', section: 'CSE-A', room: 'Lab 301', students: 62 },
  ];

  const recentActivity = [
    { action: 'Marked attendance for CSE-A DSA', time: '2 hours ago', icon: '✅' },
    { action: 'Uploaded Unit 3 notes — Machine Learning', time: '5 hours ago', icon: '📄' },
    { action: 'Updated internal marks for CSE-B', time: 'Yesterday', icon: '📝' },
    { action: 'Scheduled remedial class for weak students', time: '2 days ago', icon: '📅' },
    { action: 'Published Assignment: Binary Tree', time: '3 days ago', icon: '📋' },
  ];

  const lowAttendance = [
    { name: 'R. Vikram', rollNo: 'CSE042', attendance: '62%', subject: 'DSA' },
    { name: 'P. Sneha', rollNo: 'CSE018', attendance: '68%', subject: 'DSA' },
    { name: 'K. Arun', rollNo: 'CSE055', attendance: '70%', subject: 'ML' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
        <div className="absolute bottom-0 left-1/3 w-28 h-28 bg-white/5 rounded-full translate-y-12"></div>
        <div className="relative z-10">
          <p className="text-emerald-100 text-sm font-medium">Good Morning 👋</p>
          <h2 className="text-2xl sm:text-3xl font-bold mt-1">Dr. {firstName}!</h2>
          <p className="text-emerald-100 text-sm mt-2 max-w-lg">You have 4 classes scheduled today. 3 students need attendance warnings.</p>
          <div className="flex gap-3 mt-4">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold">Dept. of CSE</span>
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold">Asst. Professor</span>
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold hidden sm:inline">ID: JJEC/FAC/CSE/012</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className={`${s.bg} rounded-2xl p-5 border border-slate-100 hover:shadow-md transition`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{s.icon}</span>
            </div>
            <p className={`text-2xl font-bold ${s.accent}`}>{s.value}</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Classes */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">🏫 Today's Classes</h3>
            <span className="text-xs text-emerald-600 font-semibold">Monday, Jul 21</span>
          </div>
          <div className="divide-y divide-slate-50">
            {todayClasses.map((c, i) => (
              <div key={i} className="px-6 py-4 flex items-center gap-4 hover:bg-emerald-50/50 transition">
                <div className="text-center shrink-0 w-20">
                  <p className="text-sm font-bold text-emerald-700">{c.time}</p>
                </div>
                <div className="w-1 h-10 bg-gradient-to-b from-emerald-400 to-teal-400 rounded-full shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-800 text-sm truncate">{c.subject}</p>
                  <p className="text-xs text-slate-500">{c.section} • {c.room} • {c.students} students</p>
                </div>
                <button className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-lg font-semibold hover:bg-emerald-200 transition hidden sm:block">
                  Mark Attendance
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">🕐 Recent Activity</h3>
          </div>
          <div className="divide-y divide-slate-50">
            {recentActivity.map((a, i) => (
              <div key={i} className="px-6 py-3 hover:bg-slate-50 transition">
                <div className="flex items-start gap-2">
                  <span className="text-sm mt-0.5">{a.icon}</span>
                  <div>
                    <p className="text-sm text-slate-700 leading-tight">{a.action}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{a.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Low Attendance Warning */}
      <div className="bg-white rounded-2xl shadow-sm border border-red-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-red-100 bg-red-50 flex justify-between items-center">
          <h3 className="font-bold text-red-800 flex items-center gap-2">⚠️ Low Attendance Alerts</h3>
          <span className="text-xs bg-red-200 text-red-800 px-2 py-0.5 rounded-full font-bold">{lowAttendance.length} students</span>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                {['Student', 'Roll No', 'Subject', 'Attendance', 'Action'].map(h => (
                  <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-slate-500 uppercase">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {lowAttendance.map((s, i) => (
                <tr key={i} className="hover:bg-red-50/50 transition">
                  <td className="px-5 py-3 font-medium text-slate-800">{s.name}</td>
                  <td className="px-5 py-3 text-slate-600 font-mono text-xs">{s.rollNo}</td>
                  <td className="px-5 py-3 text-slate-600">{s.subject}</td>
                  <td className="px-5 py-3"><span className="text-red-600 font-bold">{s.attendance}</span></td>
                  <td className="px-5 py-3">
                    <button className="text-xs text-amber-700 bg-amber-100 px-3 py-1 rounded-lg font-semibold hover:bg-amber-200 transition">Send Warning</button>
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

export default FacultyOverview;
