import { useState } from 'react';

const initialAdmissions = [
  { id: 1, student: 'Ravi Kumar', course: 'B.E CSE', status: 'Confirmed', date: '2026-06-15' },
  { id: 2, student: 'Sneha Reddy', course: 'B.Tech AI', status: 'Pending', date: '2026-06-20' },
  { id: 3, student: 'Arjun Singh', course: 'MBA', status: 'Confirmed', date: '2026-06-25' },
];

const Admissions = () => {
  const [admissions, setAdmissions] = useState(initialAdmissions);

  const deleteAdmission = (id) => {
    setAdmissions(admissions.filter((a) => a.id !== id));
  };

  const addAdmission = () => {
    const newAdmission = {
      id: Date.now(),
      student: 'New Student',
      course: 'B.E CSE',
      status: 'Pending',
      date: new Date().toISOString().slice(0, 10),
    };
    setAdmissions([...admissions, newAdmission]);
  };

  const editAdmission = (id) => {
    alert(`Edit admission with ID: ${id} (demo)`);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-indigo-900">Manage Admissions</h2>
        <button onClick={addAdmission} className="bg-indigo-900 text-white px-4 py-2 rounded-lg hover:bg-indigo-800 transition">
          Add Admission
        </button>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {admissions.map((adm) => (
                <tr key={adm.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{adm.student}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{adm.course}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      adm.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {adm.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{adm.date}</td>
                  <td className="px-6 py-4 text-sm space-x-2">
                    <button onClick={() => editAdmission(adm.id)} className="text-indigo-600 hover:underline">Edit</button>
                    <button onClick={() => deleteAdmission(adm.id)} className="text-red-600 hover:underline">Delete</button>
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

export default Admissions;