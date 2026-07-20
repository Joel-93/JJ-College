import { useState } from 'react';

const initialEnquiries = [
  { id: 1, name: 'Rahul Sharma', email: 'rahul@example.com', phone: '9876543210', course: 'B.E CSE', message: 'Need admission info', date: '2026-07-10' },
  { id: 2, name: 'Priya Patel', email: 'priya@example.com', phone: '9876543211', course: 'B.Tech AI', message: 'Hostel inquiry', date: '2026-07-12' },
  { id: 3, name: 'Amit Kumar', email: 'amit@example.com', phone: '9876543212', course: 'MBA', message: 'Placement details', date: '2026-07-13' },
];

const Enquiries = () => {
  const [enquiries, setEnquiries] = useState(initialEnquiries);

  const deleteEnquiry = (id) => {
    setEnquiries(enquiries.filter((e) => e.id !== id));
  };

  const editEnquiry = (id) => {
    alert(`Edit enquiry with ID: ${id} (demo)`);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-indigo-900">All Enquiries</h2>
        <button className="bg-indigo-900 text-white px-4 py-2 rounded-lg hover:bg-indigo-800 transition">Add Enquiry</button>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Message</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {enquiries.map((enq) => (
                <tr key={enq.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{enq.name}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{enq.email}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{enq.phone}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{enq.course}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 max-w-xs truncate">{enq.message}</td>
                  <td className="px-6 py-4 text-sm space-x-2">
                    <button onClick={() => editEnquiry(enq.id)} className="text-indigo-600 hover:underline">Edit</button>
                    <button onClick={() => deleteEnquiry(enq.id)} className="text-red-600 hover:underline">Delete</button>
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

export default Enquiries;