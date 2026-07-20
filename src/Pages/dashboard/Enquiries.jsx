import { useState, useEffect } from 'react';
import axios from 'axios';

const Enquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewModal, setViewModal] = useState(null);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/contact');
      if (res.data.success) setEnquiries(res.data.data);
    } catch (err) {
      console.error('Failed to load enquiries', err);
    } finally {
      setLoading(false);
    }
  };

  const deleteEnquiry = async (id) => {
    if (!window.confirm('Delete this enquiry?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/contact/${id}`);
      setEnquiries((prev) => prev.filter((e) => e._id !== id));
    } catch {
      alert('Failed to delete enquiry');
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Enquiries</h2>
          <p className="text-slate-500 text-sm mt-0.5">All contact form submissions from prospective students</p>
        </div>
        <span className="bg-indigo-100 text-indigo-800 text-sm font-semibold px-3 py-1 rounded-full">
          {enquiries.length} total
        </span>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {loading ? (
          <div className="p-10 text-center text-slate-400">Loading enquiries...</div>
        ) : enquiries.length === 0 ? (
          <div className="p-10 text-center text-slate-400">
            <p className="text-4xl mb-3">📭</p>
            <p className="font-medium">No enquiries yet</p>
            <p className="text-sm mt-1">Submissions from the Contact page will appear here.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  {['Name', 'Email', 'Phone', 'City', 'Course', 'Date', 'Actions'].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {enquiries.map((enq) => (
                  <tr key={enq._id} className="hover:bg-slate-50 transition">
                    <td className="px-4 py-3 font-medium text-slate-900">{enq.fullName}</td>
                    <td className="px-4 py-3 text-slate-600">{enq.email}</td>
                    <td className="px-4 py-3 text-slate-600">{enq.phone}</td>
                    <td className="px-4 py-3 text-slate-600">{enq.city}</td>
                    <td className="px-4 py-3">
                      <span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded text-xs font-medium">{enq.course}</span>
                    </td>
                    <td className="px-4 py-3 text-slate-500 text-xs">{new Date(enq.createdAt).toLocaleDateString('en-IN')}</td>
                    <td className="px-4 py-3 flex gap-2">
                      <button
                        onClick={() => setViewModal(enq)}
                        className="text-indigo-600 hover:text-indigo-800 font-medium text-xs"
                      >View</button>
                      <button
                        onClick={() => deleteEnquiry(enq._id)}
                        className="text-red-500 hover:text-red-700 font-medium text-xs"
                      >Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* View Modal */}
      {viewModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center">
              <h3 className="font-bold text-slate-800 text-lg">Enquiry Details</h3>
              <button onClick={() => setViewModal(null)} className="text-slate-400 hover:text-slate-600 text-2xl leading-none">&times;</button>
            </div>
            <div className="p-6 space-y-3 text-sm">
              {[
                { label: 'Name', val: viewModal.fullName },
                { label: 'Email', val: viewModal.email },
                { label: 'Phone', val: viewModal.phone },
                { label: 'City', val: viewModal.city },
                { label: 'Course', val: viewModal.course },
                { label: 'Message', val: viewModal.message },
                { label: 'Submitted', val: new Date(viewModal.createdAt).toLocaleString('en-IN') },
              ].map(({ label, val }) => (
                <div key={label} className="flex gap-3">
                  <span className="w-24 font-semibold text-slate-500 shrink-0">{label}:</span>
                  <span className="text-slate-800">{val}</span>
                </div>
              ))}
            </div>
            <div className="p-4 border-t flex justify-end">
              <button onClick={() => setViewModal(null)} className="px-4 py-2 bg-indigo-900 text-white rounded-lg text-sm">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Enquiries;