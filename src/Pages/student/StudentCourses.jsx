const StudentCourses = () => {
  const courses = [
    { code: 'CS301', name: 'Data Structures & Algorithms', faculty: 'Dr. S. Meena', credits: 4, attendance: 92, grade: 'A', color: 'from-sky-500 to-cyan-500' },
    { code: 'CS302', name: 'Database Management Systems', faculty: 'Dr. R. Karthik', credits: 4, attendance: 88, grade: 'A', color: 'from-violet-500 to-purple-500' },
    { code: 'CS303', name: 'Computer Networks', faculty: 'Prof. A. Kumar', credits: 3, attendance: 85, grade: 'B+', color: 'from-emerald-500 to-green-500' },
    { code: 'CS304', name: 'Operating Systems', faculty: 'Dr. P. Vani', credits: 4, attendance: 90, grade: 'A', color: 'from-amber-500 to-orange-500' },
    { code: 'CS305', name: 'Software Engineering', faculty: 'Prof. M. Reddy', credits: 3, attendance: 78, grade: 'B', color: 'from-rose-500 to-pink-500' },
    { code: 'MA301', name: 'Probability & Statistics', faculty: 'Dr. L. Priya', credits: 3, attendance: 82, grade: 'B+', color: 'from-teal-500 to-cyan-500' },
  ];

  return (
    <div className="space-y-6 w-full">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">My Courses</h2>
          <p className="text-slate-500 text-sm mt-0.5">Semester 5 — Academic Year 2026-27</p>
        </div>
        <span className="bg-sky-100 text-sky-800 text-sm font-semibold px-4 py-1.5 rounded-full">{courses.length} Courses • 21 Credits</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {courses.map((c) => (
          <div key={c.code} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300 group">
            {/* Color header */}
            <div className={`bg-gradient-to-r ${c.color} p-4 relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-6 translate-x-6"></div>
              <span className="text-white/80 text-xs font-mono">{c.code}</span>
              <h3 className="text-white font-bold text-sm mt-1 leading-tight">{c.name}</h3>
            </div>
            <div className="p-5 space-y-4">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span className="w-7 h-7 bg-slate-100 rounded-full flex items-center justify-center text-xs">👨‍🏫</span>
                <span>{c.faculty}</span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-sky-50 rounded-xl py-2">
                  <p className="text-lg font-bold text-sky-700">{c.credits}</p>
                  <p className="text-[10px] text-slate-500 font-medium">Credits</p>
                </div>
                <div className={`rounded-xl py-2 ${c.attendance >= 85 ? 'bg-emerald-50' : 'bg-amber-50'}`}>
                  <p className={`text-lg font-bold ${c.attendance >= 85 ? 'text-emerald-700' : 'text-amber-700'}`}>{c.attendance}%</p>
                  <p className="text-[10px] text-slate-500 font-medium">Attendance</p>
                </div>
                <div className="bg-violet-50 rounded-xl py-2">
                  <p className="text-lg font-bold text-violet-700">{c.grade}</p>
                  <p className="text-[10px] text-slate-500 font-medium">Grade</p>
                </div>
              </div>
              {/* Attendance bar */}
              <div>
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>Attendance Progress</span>
                  <span className={c.attendance >= 85 ? 'text-emerald-600' : 'text-amber-600'}>{c.attendance}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${c.attendance >= 85 ? 'bg-gradient-to-r from-emerald-400 to-green-400' : 'bg-gradient-to-r from-amber-400 to-orange-400'}`}
                    style={{ width: `${c.attendance}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentCourses;
