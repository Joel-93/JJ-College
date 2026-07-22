import { FaUtensils } from 'react-icons/fa';

const StudentTimetable = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = ['09:00 - 10:00', '10:00 - 11:00', '11:15 - 12:15', '12:15 - 01:15', '02:00 - 03:00', '03:00 - 04:00'];

  const schedule = {
    Monday:    ['DSA', 'DBMS', 'CN Lab', 'CN Lab', 'OS', 'Free'],
    Tuesday:   ['OS', 'DSA', 'SE', 'Math', 'DBMS Lab', 'DBMS Lab'],
    Wednesday: ['CN', 'OS', 'DSA', 'Free', 'SE', 'Math'],
    Thursday:  ['DBMS', 'Math', 'DSA Lab', 'DSA Lab', 'CN', 'SE'],
    Friday:    ['SE', 'CN', 'OS', 'DSA', 'Free', 'Library'],
  };

  const subjectColors = {
    'DSA': 'bg-sky-100 text-sky-800 border-sky-200',
    'DBMS': 'bg-violet-100 text-violet-800 border-violet-200',
    'CN': 'bg-emerald-100 text-emerald-800 border-emerald-200',
    'OS': 'bg-amber-100 text-amber-800 border-amber-200',
    'SE': 'bg-rose-100 text-rose-800 border-rose-200',
    'Math': 'bg-teal-100 text-teal-800 border-teal-200',
    'DSA Lab': 'bg-sky-200 text-sky-900 border-sky-300',
    'DBMS Lab': 'bg-violet-200 text-violet-900 border-violet-300',
    'CN Lab': 'bg-emerald-200 text-emerald-900 border-emerald-300',
    'Free': 'bg-slate-50 text-slate-400 border-slate-100',
    'Library': 'bg-indigo-100 text-indigo-700 border-indigo-200',
  };

  const fullNames = {
    'DSA': 'Data Structures & Algorithms',
    'DBMS': 'Database Management Systems',
    'CN': 'Computer Networks',
    'OS': 'Operating Systems',
    'SE': 'Software Engineering',
    'Math': 'Probability & Statistics',
    'DSA Lab': 'DSA Lab',
    'DBMS Lab': 'DBMS Lab',
    'CN Lab': 'CN Lab',
    'Free': 'Free Period',
    'Library': 'Library Hour',
  };

  return (
    <div className="space-y-6 w-full">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Weekly Timetable</h2>
        <p className="text-slate-500 text-sm mt-0.5">Semester 5 — B.E Computer Science Engineering</p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(subjectColors).filter(([k]) => !k.includes('Lab') && k !== 'Free' && k !== 'Library').map(([name, cls]) => (
          <span key={name} className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${cls}`}>
            {name} — {fullNames[name]}
          </span>
        ))}
      </div>

      {/* Timetable Grid */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gradient-to-r from-sky-800 to-sky-700 text-white">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider w-28">Day</th>
                {timeSlots.map((t) => (
                  <th key={t} className="px-3 py-3 text-center text-xs font-semibold uppercase tracking-wider">{t}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {days.map((day) => (
                <tr key={day} className="hover:bg-sky-50/30 transition">
                  <td className="px-4 py-4 font-bold text-sky-800 text-sm">{day}</td>
                  {schedule[day].map((sub, i) => (
                    <td key={i} className="px-2 py-3 text-center">
                      <div className={`px-2 py-2 rounded-lg text-xs font-semibold border ${subjectColors[sub] || 'bg-slate-50 text-slate-400'} transition hover:scale-105`}>
                        {sub}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Break info */}
      <div className="flex items-center gap-3 text-sm text-slate-500 bg-amber-50 border border-amber-100 rounded-xl px-5 py-3">
        <FaUtensils className="text-amber-600 text-base" />
        <span><strong className="text-amber-700">Lunch Break:</strong> 01:15 PM — 02:00 PM (45 minutes)</span>
      </div>
    </div>
  );
};

export default StudentTimetable;
