import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEnvelope, FaUser, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const StatCard = ({ label, value, color, Icon }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
      <Icon className="text-2xl" />
    </div>
    <div>
      <p className="text-sm text-slate-500 font-medium">{label}</p>
      <p className="text-3xl font-bold text-slate-800 mt-0.5">{value}</p>
    </div>
  </div>
);

const Overview = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const [enqRes, usrRes] = await Promise.all([
          axios.get('https://jj-college-5poa.onrender.com/api/contact'),
          axios.get('https://jj-college-5poa.onrender.com/api/users'),
        ]);
        if (enqRes.data.success) setEnquiries(enqRes.data.data);
        if (usrRes.data.success) setUsers(usrRes.data.data);
      } catch {
        // backend may not be running; silently use defaults
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const recent = enquiries.slice(-5).reverse();

  return (
    <div className="space-y-6 w-full">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Overview</h2>
        <p className="text-slate-500 text-sm mt-1">Welcome back! Here's a summary of your college portal.</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard label="Total Enquiries" value={enquiries.length} Icon={FaEnvelope} color="bg-indigo-50 text-indigo-600" />
        <StatCard label="Total Users" value={users.length} Icon={FaUser} color="bg-blue-50 text-blue-600" />
        <StatCard label="Admissions 2026" value={120} Icon={FaGraduationCap} color="bg-amber-50 text-amber-600" />
        <StatCard label="Placed (2025)" value={465} Icon={FaBriefcase} color="bg-emerald-50 text-emerald-600" />
      </div>

      {/* Recent enquiries */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
          <h3 className="font-bold text-slate-800">Recent Enquiries</h3>
          <span className="text-xs text-slate-400">{enquiries.length} total</span>
        </div>
        {loading ? (
          <div className="p-8 text-center text-slate-400">Loading...</div>
        ) : recent.length === 0 ? (
          <div className="p-8 text-center text-slate-400">No enquiries yet. They will appear here once submitted via the Contact page.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  {['Name','Email','Phone','Course','Date'].map(h => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recent.map((e) => (
                  <tr key={e._id} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-900">{e.fullName}</td>
                    <td className="px-4 py-3 text-slate-600">{e.email}</td>
                    <td className="px-4 py-3 text-slate-600">{e.phone}</td>
                    <td className="px-4 py-3 text-slate-600">{e.course}</td>
                    <td className="px-4 py-3 text-slate-500 text-xs">{new Date(e.createdAt).toLocaleDateString('en-IN')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;