const mockEnquiries = [
  { id: 1, name: 'Rahul Sharma', email: 'rahul@example.com', phone: '9876543210', course: 'B.E CSE', date: '2026-07-10' },
  { id: 2, name: 'Priya Patel', email: 'priya@example.com', phone: '9876543211', course: 'B.Tech AI', date: '2026-07-12' },
  { id: 3, name: 'Amit Kumar', email: 'amit@example.com', phone: '9876543212', course: 'MBA', date: '2026-07-13' },
];

const Overview = () => {
  const totalEnquiries = mockEnquiries.length;
  const totalCourses = 8;
  const totalStudents = 500;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <p className="text-sm text-slate-500">Total Enquiries</p>
          <p className="text-2xl font-bold text-indigo-900">{totalEnquiries}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <p className="text-sm text-slate-500">Total Courses</p>
          <p className="text-2xl font-bold text-green-600">{totalCourses}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <p className="text-sm text-slate-500">Admissions (2026)</p>
          <p className="text-2xl font-bold text-amber-600">120</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <p className="text-sm text-slate-500">Students Placed (2025)</p>
          <p className="text-2xl font-bold text-emerald-600">{totalStudents}</p>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200">
          <h2 className="font-bold text-indigo-900">Recent Enquiries</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {mockEnquiries.map((enq) => (
                <tr key={enq.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{enq.name}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{enq.email}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{enq.phone}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{enq.course}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{enq.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Overview;