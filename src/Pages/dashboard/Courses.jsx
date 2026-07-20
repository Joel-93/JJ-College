import { useState } from 'react';

const COURSE_LIST = [
  { id: 1, name: 'B.E Computer Science Engineering', degree: 'B.E', duration: '4 Years', intake: 120 },
  { id: 2, name: 'B.Tech Information Technology', degree: 'B.Tech', duration: '4 Years', intake: 120 },
  { id: 3, name: 'B.Tech Artificial Intelligence & Data Science', degree: 'B.Tech', duration: '4 Years', intake: 60 },
  { id: 4, name: 'B.E Electronics & Communication Engineering', degree: 'B.E', duration: '4 Years', intake: 90 },
  { id: 5, name: 'B.E Electrical & Electronics Engineering', degree: 'B.E', duration: '4 Years', intake: 60 },
  { id: 6, name: 'B.E Mechanical Engineering', degree: 'B.E', duration: '4 Years', intake: 60 },
  { id: 7, name: 'B.E Civil Engineering', degree: 'B.E', duration: '4 Years', intake: 60 },
];

const EMPTY_FORM = { name: '', degree: 'B.E', duration: '4 Years', intake: 60 };

const Courses = () => {
  const [courses, setCourses] = useState(COURSE_LIST);
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);

  const openAdd = () => {
    setEditId(null);
    setForm(EMPTY_FORM);
    setShowModal(true);
  };

  const openEdit = (course) => {
    setEditId(course.id);
    setForm({ name: course.name, degree: course.degree, duration: course.duration, intake: course.intake });
    setShowModal(true);
  };

  const handleSave = () => {
    if (!form.name.trim()) return alert('Course name is required');
    if (editId) {
      setCourses((prev) => prev.map((c) => c.id === editId ? { ...c, ...form, intake: Number(form.intake) } : c));
    } else {
      setCourses((prev) => [...prev, { ...form, id: Date.now(), intake: Number(form.intake) }]);
    }
    setShowModal(false);
  };

  const deleteCourse = (id) => {
    if (!window.confirm('Delete this course?')) return;
    setCourses((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Courses</h2>
          <p className="text-slate-500 text-sm mt-0.5">Manage all academic departments and programs</p>
        </div>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 bg-indigo-900 hover:bg-indigo-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
        >
          + Add Course
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50">
              <tr>
                {['Course Name', 'Degree', 'Duration', 'Intake', 'Actions'].map((h) => (
                  <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {courses.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50 transition">
                  <td className="px-5 py-3 font-medium text-slate-900">{c.name}</td>
                  <td className="px-5 py-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-semibold ${c.degree === 'B.E' ? 'bg-indigo-100 text-indigo-800' : 'bg-amber-100 text-amber-800'}`}>
                      {c.degree}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-slate-600">{c.duration}</td>
                  <td className="px-5 py-3 text-slate-600">{c.intake}</td>
                  <td className="px-5 py-3 flex gap-3">
                    <button onClick={() => openEdit(c)} className="text-indigo-600 hover:text-indigo-800 font-medium text-xs">Edit</button>
                    <button onClick={() => deleteCourse(c.id)} className="text-red-500 hover:text-red-700 font-medium text-xs">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center">
              <h3 className="font-bold text-slate-800 text-lg">{editId ? 'Edit Course' : 'Add New Course'}</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600 text-2xl leading-none">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Course Name *</label>
                <input
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. B.E Civil Engineering"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Degree</label>
                  <select
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={form.degree}
                    onChange={(e) => setForm({ ...form, degree: e.target.value })}
                  >
                    <option>B.E</option>
                    <option>B.Tech</option>
                    <option>MBA</option>
                    <option>M.E</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Duration</label>
                  <select
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={form.duration}
                    onChange={(e) => setForm({ ...form, duration: e.target.value })}
                  >
                    <option>4 Years</option>
                    <option>2 Years</option>
                    <option>3 Years</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Intake (seats)</label>
                <input
                  type="number"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={form.intake}
                  onChange={(e) => setForm({ ...form, intake: e.target.value })}
                />
              </div>
            </div>
            <div className="p-4 border-t flex justify-end gap-3">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 border border-slate-300 rounded-lg text-sm text-slate-600 hover:bg-slate-50">Cancel</button>
              <button onClick={handleSave} className="px-4 py-2 bg-indigo-900 text-white rounded-lg text-sm hover:bg-indigo-800">
                {editId ? 'Save Changes' : 'Add Course'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;