import { Outlet, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

const DashboardLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { path: '/dashboard', label: 'Overview' },
    { path: '/dashboard/enquiries', label: 'Enquiries' },
    { path: '/dashboard/courses', label: 'Courses' },
    { path: '/dashboard/admissions', label: 'Admissions' },
    { path: '/dashboard/users', label: 'Users' },
  ];

  return (
    <div className="flex h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-900 text-white flex flex-col shadow-xl shrink-0">
        <div className="p-6 border-b border-indigo-800">
          <h2 className="text-2xl font-bold text-amber-400">Admin Panel</h2>
          <p className="text-xs text-indigo-300">JJ Engineering College</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition ${
                  isActive ? 'bg-indigo-800' : 'hover:bg-indigo-800'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
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

      {/* Main content – nested routes render here */}
      <div className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-10">
          <h1 className="text-xl font-bold text-indigo-900">Dashboard</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-600">Admin</span>
            <div className="w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-800 font-bold">
              A
            </div>
          </div>
        </header>
        <div className="p-6">
          <Outlet />  {/* Nested components render here */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;