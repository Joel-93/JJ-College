import { useState } from 'react';

const FacultyStudents = () => {
  const [filter, setFilter] = useState('CSE-A');

  const students = [
    { rollNo: 'CSE001', name: 'Aarav Patel', section: 'CSE-A', attendance: 88, cgpa: 8.5 },
    { rollNo: 'CSE018', name: 'P. Sneha', section: 'CSE-A', attendance: 68, cgpa: 7.2 },
    { rollNo: 'CSE022', name: 'Karthik Raj', section: 'CSE-A', attendance: 92, cgpa: 9.1 },
    { rollNo: 'CSE042', name: 'R. Vikram', section: 'CSE-A', attendance: 62, cgpa: 6.8 },
    { rollNo: 'CSE055', name: 'K. Arun', section: 'CSE-B', attendance: 70, cgpa: 7.5 },
    { rollNo: 'CSE061', name: 'Meera Iyer', section: 'CSE-B', attendance: 95, cgpa: 9.4 },
    { rollNo: 'AI012', name: 'Sanjay Kumar', section: 'AI&DS-A', attendance: 85, cgpa: 8.2 },
  ].filter(s => s.section === filter || filter === 'All');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Student Directory</h2>
          <p className="text-slate-500 text-sm mt-0.5">Manage students across your classes</p>
        </div>
        
        <div className="flex gap-2 bg-white p-1 rounded-xl shadow-sm border border-slate-100">
          {['All', 'CSE-A', 'CSE-B', 'AI&DS-A'].map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition ${filter === f ? 'bg-emerald-100 text-emerald-800' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
          <input 
            type="text" 
            placeholder="Search by name or roll number..." 
            className="px-4 py-2 rounded-lg border border-slate-200 text-sm w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <span className="text-xs font-bold text-slate-500">{students.length} Students</span>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-white border-b border-slate-200">
              <tr>
                {['Roll No', 'Student Name', 'Section', 'Overall Attendance', 'CGPA', 'Action'].map(h => (
                  <th key={h} className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {students.map((s, i) => (
                <tr key={i} className="hover:bg-emerald-50/30 transition">
                  <td className="px-6 py-4 font-mono text-emerald-700 font-semibold">{s.rollNo}</td>
                  <td className="px-6 py-4 font-bold text-slate-800 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">
                      {s.name.charAt(0)}
                    </div>
                    {s.name}
                  </td>
                  <td className="px-6 py-4 text-slate-600 font-medium">{s.section}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${s.attendance >= 75 ? 'bg-emerald-500' : 'bg-red-500'}`} 
                          style={{ width: `${s.attendance}%` }}
                        ></div>
                      </div>
                      <span className={`font-bold ${s.attendance >= 75 ? 'text-emerald-700' : 'text-red-600'}`}>{s.attendance}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-bold text-slate-800">{s.cgpa}</td>
                  <td className="px-6 py-4">
                    <button className="text-xs font-bold text-emerald-600 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg transition">
                      View Profile
                    </button>
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

export default FacultyStudents;
