import { useState } from 'react';

const FacultyAttendance = () => {
  const [selectedClass, setSelectedClass] = useState('CSE-A / DSA');
  const [date, setDate] = useState('2026-07-21');

  const students = [
    { rollNo: 'CSE001', name: 'Aarav Patel', status: 'Present' },
    { rollNo: 'CSE018', name: 'P. Sneha', status: 'Absent' },
    { rollNo: 'CSE022', name: 'Karthik Raj', status: 'Present' },
    { rollNo: 'CSE042', name: 'R. Vikram', status: 'Absent' },
    { rollNo: 'CSE045', name: 'N. Priya', status: 'Present' },
    { rollNo: 'CSE051', name: 'S. Rahul', status: 'Present' },
  ];

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex justify-between items-end flex-wrap gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Mark Attendance</h2>
          <p className="text-slate-500 text-sm mt-0.5">Record daily attendance for your classes</p>
        </div>
        
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-slate-50 transition shadow-sm">
            View Reports
          </button>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-xl text-sm font-bold shadow-md shadow-emerald-200 transition">
            Save Attendance
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Controls */}
        <div className="md:col-span-1 space-y-4">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
            <h3 className="font-bold text-slate-800 mb-4">Session Details</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Select Class</label>
                <select 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                >
                  <option>CSE-A / DSA</option>
                  <option>CSE-B / DSA</option>
                  <option>AI&DS-A / ML</option>
                  <option>CSE-A / DSA Lab</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Date</label>
                <input 
                  type="date" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Time Slot</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>09:00 AM - 10:00 AM</option>
                  <option>10:00 AM - 11:00 AM</option>
                  <option>01:00 PM - 02:00 PM</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-slate-600">Total Students</span>
                <span className="text-sm font-bold text-slate-800">{students.length}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-emerald-600">Present</span>
                <span className="text-sm font-bold text-emerald-700">{students.filter(s => s.status === 'Present').length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-red-600">Absent</span>
                <span className="text-sm font-bold text-red-700">{students.filter(s => s.status === 'Absent').length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Student List */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
            <h3 className="font-bold text-slate-800">Student List</h3>
            <div className="flex gap-2">
              <button className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-lg hover:bg-emerald-200 transition">Mark All Present</button>
            </div>
          </div>
          
          <div className="divide-y divide-slate-100">
            {students.map((s, i) => (
              <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-50 transition">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-sm shrink-0">
                    {s.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{s.name}</p>
                    <p className="text-xs font-mono text-slate-500">{s.rollNo}</p>
                  </div>
                </div>
                
                <div className="flex gap-2 bg-slate-100 p-1 rounded-xl">
                  <button className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${s.status === 'Present' ? 'bg-emerald-500 text-white shadow-sm' : 'text-slate-500 hover:bg-slate-200'}`}>
                    Present
                  </button>
                  <button className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${s.status === 'Absent' ? 'bg-red-500 text-white shadow-sm' : 'text-slate-500 hover:bg-slate-200'}`}>
                    Absent
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyAttendance;
