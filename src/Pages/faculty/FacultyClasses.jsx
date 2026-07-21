const FacultyClasses = () => {
  const classes = [
    { code: 'CS301', name: 'Data Structures & Algorithms', section: 'CSE-A', year: '3rd Year', students: 62, schedule: 'Mon, Wed, Fri', type: 'Theory', color: 'from-emerald-500 to-teal-500' },
    { code: 'CS301', name: 'Data Structures & Algorithms', section: 'CSE-B', year: '3rd Year', students: 60, schedule: 'Tue, Thu, Fri', type: 'Theory', color: 'from-sky-500 to-cyan-500' },
    { code: 'CS301L', name: 'DSA Lab', section: 'CSE-A', year: '3rd Year', students: 62, schedule: 'Monday', type: 'Practical', color: 'from-violet-500 to-purple-500' },
    { code: 'CS405', name: 'Machine Learning', section: 'AI&DS-A', year: '4th Year', students: 64, schedule: 'Mon, Wed, Thu', type: 'Theory', color: 'from-amber-500 to-orange-500' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">My Classes</h2>
          <p className="text-slate-500 text-sm mt-0.5">Assigned subjects for Current Semester</p>
        </div>
        <span className="bg-emerald-100 text-emerald-800 text-sm font-semibold px-4 py-1.5 rounded-full">{classes.length} Classes Assigned</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {classes.map((c, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className={`bg-gradient-to-r ${c.color} p-5 relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="flex justify-between items-start relative z-10">
                <div>
                  <span className="bg-white/20 text-white text-xs font-bold px-2 py-1 rounded-lg mb-2 inline-block">{c.code}</span>
                  <h3 className="text-white font-bold text-lg leading-tight">{c.name}</h3>
                </div>
                <span className="bg-white text-slate-800 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">{c.type}</span>
              </div>
            </div>
            
            <div className="p-5 space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div>
                  <p className="text-xs text-slate-500 font-medium">Class / Section</p>
                  <p className="font-bold text-slate-800">{c.year} • {c.section}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500 font-medium">Students</p>
                  <p className="font-bold text-emerald-600">{c.students}</p>
                </div>
              </div>
              
              <div>
                <p className="text-xs text-slate-500 font-medium mb-1">Schedule</p>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <span>📅</span> {c.schedule}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button className="flex-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-semibold py-2 rounded-xl transition text-sm">
                  View Syllabus
                </button>
                <button className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold py-2 rounded-xl transition text-sm">
                  Upload Notes
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyClasses;
