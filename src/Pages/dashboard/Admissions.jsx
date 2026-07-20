import { useState } from 'react';

const INITIAL = [
  { id: 1, student: 'Ravi Kumar',  course: 'B.E CSE',    year: '1st Year', status: 'Confirmed', date: '2026-06-15', phone: '9876543210' },
  { id: 2, student: 'Sneha Reddy', course: 'B.Tech AI',   year: '1st Year', status: 'Pending',   date: '2026-06-20', phone: '9876543211' },
  { id: 3, student: 'Arjun Singh', course: 'MBA',          year: '1st Year', status: 'Confirmed', date: '2026-06-25', phone: '9876543212' },
];

const EMPTY_FORM = { student: '', course: 'B.E CSE', year: '1st Year', status: 'Pending', date: '', phone: '' };

const Admissions = () => {
  const [admissions, setAdmissions] = useState(INITIAL);
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);

  const openAdd = () => { setEditId(null); setForm(EMPTY_FORM); setShowModal(true); };
  const openEdit = (a) => { setEditId(a.id); setForm({ student: a.student, course: a.course, year: a.year, status: a.status, date: a.date, phone: a.phone }); setShowModal(true); };

  const handleSave = () => {
    if (!form.student.trim()) return alert('Student name is required');
    if (editId) {
      setAdmissions((prev) => prev.map((a) => a.id === editId ? { ...a, ...form } : a));
    } else {
      setAdmissions((prev) => [...prev, { ...form, id: Date.now() }]);
    }
    setShowModal(false);
  };

  const deleteAdmission = (id) => {
    if (!window.confirm('Remove this admission record?')) return;
    setAdmissions((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Admissions</h2>
          <p className="text-slate-500 text-sm mt-0.5">Track and manage student admission records</p>
        </div>
        <button onClick={openAdd} className="flex items-center gap-2 bg-indigo-900 hover:bg-indigo-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
          + Add Admission
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50">
              <tr>
                {['Student', 'Course', 'Year', 'Phone', 'Date', 'Status', 'Actions'].map((h) => (
                  <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {admissions.map((a) => (
                <tr key={a.id} className="hover:bg-slate-50 transition">
                  <td className="px-5 py-3 font-medium text-slate-900">{a.student}</td>
                  <td className="px-5 py-3 text-slate-600">{a.course}</td>
                  <td className="px-5 py-3 text-slate-600">{a.year}</td>
                  <td className="px-5 py-3 text-slate-600">{a.phone}</td>
                  <td className="px-5 py-3 text-slate-500 text-xs">{a.date}</td>
                  <td className="px-5 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${a.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                      {a.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 flex gap-3">
                    <button onClick={() => openEdit(a)} className="text-indigo-600 hover:text-indigo-800 font-medium text-xs">Edit</button>
                    <button onClick={() => deleteAdmission(a.id)} className="text-red-500 hover:text-red-700 font-medium text-xs">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center">
              <h3 className="font-bold text-slate-800 text-lg">{editId ? 'Edit Admission' : 'New Admission'}</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600 text-2xl leading-none">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Student Name *</label>
                <input className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" value={form.student} onChange={(e) => setForm({ ...form, student: e.target.value })} placeholder="Full Name" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Course</label>
                  <select className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })}>
                    <option>B.E CSE</option><option>B.Tech IT</option><option>B.Tech AI</option>
                    <option>B.E ECE</option><option>B.E EEE</option><option>B.E Mech</option>
                    <option>B.E Civil</option><option>MBA</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Year</label>
                  <select className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })}>
                    <option>1st Year</option><option>2nd Year</option><option>3rd Year</option><option>4th Year</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Phone</label>
                  <input className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="10-digit number" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Status</label>
                  <select className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
                    <option>Pending</option><option>Confirmed</option><option>Cancelled</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Admission Date</label>
                <input type="date" className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
              </div>
            </div>
            <div className="p-4 border-t flex justify-end gap-3">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 border border-slate-300 rounded-lg text-sm text-slate-600 hover:bg-slate-50">Cancel</button>
              <button onClick={handleSave} className="px-4 py-2 bg-indigo-900 text-white rounded-lg text-sm hover:bg-indigo-800">{editId ? 'Save Changes' : 'Add Admission'}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admissions;