import { useState } from 'react';

const initialUsers = [
  { id: 1, username: 'admin', email: 'admin@jjec.edu.in', role: 'Super Admin' },
  { id: 2, username: 'staff1', email: 'staff1@jjec.edu.in', role: 'Staff' },
];

const Users = () => {
  const [users, setUsers] = useState(initialUsers);

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const addUser = () => {
    const newUser = {
      id: Date.now(),
      username: 'newuser',
      email: 'newuser@jjec.edu.in',
      role: 'Staff',
    };
    setUsers([...users, newUser]);
  };

  const editUser = (id) => {
    alert(`Edit user with ID: ${id} (demo)`);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-indigo-900">Manage Users</h2>
        <button onClick={addUser} className="bg-indigo-900 text-white px-4 py-2 rounded-lg hover:bg-indigo-800 transition">
          Add User
        </button>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Username</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{user.username}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{user.email}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{user.role}</td>
                  <td className="px-6 py-4 text-sm space-x-2">
                    <button onClick={() => editUser(user.id)} className="text-indigo-600 hover:underline">Edit</button>
                    <button onClick={() => deleteUser(user.id)} className="text-red-600 hover:underline">Delete</button>
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

export default Users;