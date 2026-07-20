import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Mock enquiry data
const mockEnquiries = [
  { id: 1, name: 'Rahul Sharma', email: 'rahul@example.com', phone: '9876543210', course: 'B.E CSE', message: 'Interested in admission.', date: '2026-07-10' },
  { id: 2, name: 'Priya Patel', email: 'priya@example.com', phone: '9876543211', course: 'B.Tech AI', message: 'Need hostel information.', date: '2026-07-12' },
  { id: 3, name: 'Amit Kumar', email: 'amit@example.com', phone: '9876543212', course: 'MBA', message: 'Placement details?', date: '2026-07-13' },
];

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [enquiries] = useState(mockEnquiries);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Statistics
  const totalEnquiries = enquiries.length;
  const pendingEnquiries = enquiries.length; // mock
  const totalCourses = 8; // from courses page
  const totalStudents = 500; // mock

  return (
    <div className="flex h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-900 text-white flex flex-col shadow-xl">
        <div className="p-6 border-b border-indigo-800">
          <h2 className="text-2xl font-bold text-amber-400">Admin Panel</h2>
          <p className="text-xs text-indigo-300">JJ Engineering College</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="block px-4 py-2 rounded-lg bg-indigo-800 hover:bg-indigo-700 transition">Dashboard</a>
          <a href="#" className="block px-4 py-2 rounded-lg hover:bg-indigo-800 transition">Enquiries</a>
          <a href="#" className="block px-4 py-2 rounded-lg hover:bg-indigo-800 transition">Courses</a>
          <a href="#" className="block px-4 py-2 rounded-lg hover:bg-indigo-800 transition">Admissions</a>
          <a href="#" className="block px-4 py-2 rounded-lg hover:bg-indigo-800 transition">Users</a>
        </nav>
        <div className="p-4 border-t border-indigo-800">
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-900">Dashboard</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-600">Admin</span>
            <div className="w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-800 font-bold">
              A
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <p className="text-sm text-slate-500">Total Enquiries</p>
            <p className="text-2xl font-bold text-indigo-900">{totalEnquiries}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <p className="text-sm text-slate-500">Pending Enquiries</p>
            <p className="text-2xl font-bold text-amber-600">{pendingEnquiries}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <p className="text-sm text-slate-500">Total Courses</p>
            <p className="text-2xl font-bold text-green-600">{totalCourses}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <p className="text-sm text-slate-500">Students Placed (2025)</p>
            <p className="text-2xl font-bold text-emerald-600">{totalStudents}</p>
          </div>
        </div>

        {/* Enquiries Table */}
        <div className="px-6 pb-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
              <h2 className="font-bold text-indigo-900">Recent Enquiries</h2>
              <button className="text-sm text-indigo-600 hover:underline">View All</button>
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
                  {enquiries.map((enq) => (
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;