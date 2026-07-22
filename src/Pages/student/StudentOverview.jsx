import { useAuth } from '../../context/AuthContext.jsx';
import { useState, useEffect } from 'react';
import { getStudentDashboard } from '../../services/dataService.js';

const StudentOverview = () => {
  const { user } = useAuth();
  const firstName = user?.name?.split(' ')[0] || 'Student';

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await getStudentDashboard();
        if (res.success) {
          setDashboardData(res.data);
        }
      } catch (err) {
        console.error("Error fetching dashboard", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboard();
  }, []);

  if (loading) return <div className="p-8 text-center text-sky-600">Loading Dashboard...</div>;

  const dbData = dashboardData || {};

  const stats = [
    { label: 'Enrolled Courses', value: dbData.courses?.length || 0, icon: '📚', color: 'from-sky-400 to-cyan-400', bg: 'bg-sky-50' },
    { label: 'Attendance', value: `${dbData.overallAttendance || 0}%`, icon: '📋', color: 'from-emerald-400 to-green-400', bg: 'bg-emerald-50' },
    { label: 'CGPA', value: dbData.cgpa || '0.0', icon: '🏆', color: 'from-amber-400 to-yellow-400', bg: 'bg-amber-50' },
    { label: 'Pending Fees', value: '₹0', icon: '💳', color: 'from-violet-400 to-purple-400', bg: 'bg-violet-50' },
  ];

  // Map schedule for today (assuming Monday for demo if not found)
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const todaysScheduleRaw = dbData.schedule ? (dbData.schedule[today] || dbData.schedule['Monday'] || []) : [];
  
  // Create dummy objects for the timeline since we only stored strings in backend map
  const upcomingClasses = todaysScheduleRaw.map((subject, idx) => ({
    time: ['09:00 AM', '10:30 AM', '01:00 PM', '03:00 PM'][idx % 4],
    subject: subject,
    room: ['Room 301', 'Lab 204', 'Room 405', 'Room 302'][idx % 4],
    faculty: 'Assigned Faculty'
  }));

  const announcements = [
    { title: 'Internal Exam Schedule Released', date: 'Jul 25, 2026', type: 'Exam', color: 'bg-red-100 text-red-700' },
    { title: 'Hackathon Registration Open', date: 'Jul 22, 2026', type: 'Event', color: 'bg-sky-100 text-sky-700' },
  ];

  const assignments = [
    { subject: 'Data Structures', title: 'Binary Tree Implementation', due: 'Jul 24', status: 'Pending', statusColor: 'bg-amber-100 text-amber-700' },
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
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold">{dbData.department || 'B.E CSE'} — {dbData.year || '1st Year'}</span>
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold">Section {dbData.section || 'A'}</span>
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold hidden sm:inline">Roll: {dbData.rollNo || 'N/A'}</span>
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
