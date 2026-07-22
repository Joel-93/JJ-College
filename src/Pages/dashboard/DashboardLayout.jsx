import { useState } from 'react';
import { Outlet, NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import {
  FaChartBar,
  FaEnvelope,
  FaBook,
  FaGraduationCap,
  FaUsers,
  FaNewspaper,
  FaCalendarAlt,
  FaImages,
  FaSignOutAlt
} from 'react-icons/fa';

const navItems = [
  { path: '/dashboard', label: 'Overview', icon: FaChartBar },
  { path: '/dashboard/enquiries', label: 'Enquiries', icon: FaEnvelope },
  { path: '/dashboard/courses', label: 'Courses', icon: FaBook },
  { path: '/dashboard/admissions', label: 'Admissions', icon: FaGraduationCap },
  { path: '/dashboard/users', label: 'Users', icon: FaUsers },
  { path: '/dashboard/news', label: 'Manage News', icon: FaNewspaper },
  { path: '/dashboard/events', label: 'Manage Events', icon: FaCalendarAlt },
  { path: '/dashboard/gallery', label: 'Manage Gallery', icon: FaImages },
];

const DashboardLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const initials = user?.name
    ? user.name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
    : 'A';

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden w-full">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-30 w-64 bg-indigo-900 text-white flex flex-col shadow-2xl transform transition-transform duration-200 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Sidebar header */}
        <div className="p-5 border-b border-indigo-800 flex items-center gap-3">
          <Link to="/" className="w-9 h-9 bg-amber-400 rounded-lg flex items-center justify-center font-black text-indigo-900 text-sm shrink-0">
            JJ
          </Link>
          <div>
            <p className="font-bold text-amber-400 leading-tight text-sm">Admin Panel</p>
            <p className="text-indigo-300 text-[10px]">JJ Engineering College</p>
          </div>
        </div>

        {/* Nav links */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/dashboard'}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? 'bg-amber-400 text-indigo-900 shadow-sm'
                      : 'text-indigo-200 hover:bg-indigo-800 hover:text-white'
                  }`
                }
              >
                <Icon className="text-base shrink-0" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* User info + logout */}
        <div className="p-4 border-t border-indigo-800">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 bg-indigo-600 rounded-full flex items-center justify-center font-bold text-white text-sm">
              {initials}
            </div>
            <div className="overflow-hidden">
              <p className="text-white text-sm font-semibold truncate">{user?.name || 'Admin'}</p>
              <p className="text-indigo-300 text-[10px] truncate capitalize">{user?.role || 'admin'}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-lg transition text-sm"
          >
            <FaSignOutAlt className="text-sm" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0 w-full">
        {/* Top bar */}
        <header className="bg-white border-b border-slate-200 px-4 sm:px-6 py-3 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 rounded-md text-slate-500 hover:bg-slate-100"
              onClick={() => setSidebarOpen(true)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-lg font-bold text-indigo-900">JJ Engineering College — Admin</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-xs text-indigo-600 hover:underline hidden sm:block">← View Website</Link>
            <div className="w-9 h-9 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-800 font-bold text-sm">
              {initials}
            </div>
          </div>
        </header>

        {/* Page content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;