const StudentResults = () => {
  const semesters = [
    {
      sem: 'Semester 5 (Current)',
      gpa: '8.6',
      status: 'In Progress',
      subjects: [
        { code: 'CS301', name: 'Data Structures & Algorithms', internal: 45, external: '-', total: '-', grade: '-', credits: 4 },
        { code: 'CS302', name: 'Database Management Systems', internal: 42, external: '-', total: '-', grade: '-', credits: 4 },
        { code: 'CS303', name: 'Computer Networks', internal: 38, external: '-', total: '-', grade: '-', credits: 3 },
        { code: 'CS304', name: 'Operating Systems', internal: 44, external: '-', total: '-', grade: '-', credits: 4 },
        { code: 'CS305', name: 'Software Engineering', internal: 36, external: '-', total: '-', grade: '-', credits: 3 },
        { code: 'MA301', name: 'Probability & Statistics', internal: 40, external: '-', total: '-', grade: '-', credits: 3 },
      ],
    },
    {
      sem: 'Semester 4',
      gpa: '8.4',
      status: 'Completed',
      subjects: [
        { code: 'CS201', name: 'Object Oriented Programming', internal: 44, external: 68, total: 86, grade: 'A', credits: 4 },
        { code: 'CS202', name: 'Discrete Mathematics', internal: 40, external: 62, total: 78, grade: 'B+', credits: 3 },
        { code: 'CS203', name: 'Digital Electronics', internal: 42, external: 70, total: 88, grade: 'A', credits: 4 },
        { code: 'CS204', name: 'Computer Architecture', internal: 38, external: 65, total: 80, grade: 'A', credits: 4 },
        { code: 'EC201', name: 'Signals & Systems', internal: 35, external: 58, total: 72, grade: 'B+', credits: 3 },
        { code: 'HS201', name: 'Professional Ethics', internal: 46, external: 72, total: 92, grade: 'O', credits: 2 },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center flex-wrap gap-3">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Academic Results</h2>
          <p className="text-slate-500 text-sm mt-0.5">View your semester-wise performance</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-5 py-2 rounded-xl text-center">
            <p className="text-2xl font-bold">8.4</p>
            <p className="text-[10px] font-medium text-sky-100">CGPA</p>
          </div>
          <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-5 py-2 rounded-xl text-center">
            <p className="text-2xl font-bold">86%</p>
            <p className="text-[10px] font-medium text-emerald-100">Overall %</p>
          </div>
        </div>
      </div>

      {semesters.map((sem) => (
        <div key={sem.sem} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-gradient-to-r from-slate-50 to-white">
            <h3 className="font-bold text-slate-800">{sem.sem}</h3>
            <div className="flex items-center gap-3">
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${sem.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                {sem.status}
              </span>
              <span className="bg-sky-100 text-sky-800 text-xs font-bold px-2.5 py-1 rounded-full">GPA: {sem.gpa}</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  {['Code', 'Subject', 'Credits', 'Internal (50)', 'External (100)', 'Total', 'Grade'].map(h => (
                    <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-slate-500 uppercase">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {sem.subjects.map((s) => (
                  <tr key={s.code} className="hover:bg-sky-50/50 transition">
                    <td className="px-5 py-3 font-mono text-sky-600 font-semibold text-xs">{s.code}</td>
                    <td className="px-5 py-3 font-medium text-slate-800">{s.name}</td>
                    <td className="px-5 py-3 text-slate-600 text-center">{s.credits}</td>
                    <td className="px-5 py-3 text-center">
                      <span className={`font-semibold ${typeof s.internal === 'number' && s.internal >= 40 ? 'text-emerald-600' : 'text-slate-400'}`}>{s.internal}</span>
                    </td>
                    <td className="px-5 py-3 text-center text-slate-600">{s.external}</td>
                    <td className="px-5 py-3 text-center font-semibold text-slate-800">{s.total}</td>
                    <td className="px-5 py-3 text-center">
                      {s.grade !== '-' ? (
                        <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${s.grade === 'O' ? 'bg-amber-100 text-amber-800' : s.grade === 'A' ? 'bg-emerald-100 text-emerald-800' : 'bg-sky-100 text-sky-800'}`}>{s.grade}</span>
                      ) : <span className="text-slate-300">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentResults;
