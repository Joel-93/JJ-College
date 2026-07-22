import { useState } from 'react';
import { Outlet, NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import {
  FaChartBar,
  FaChalkboardTeacher,
  FaUsers,
  FaClipboardList,
  FaUser,
  FaSignOutAlt
} from 'react-icons/fa';

const navItems = [
  { path: '/faculty', label: 'Dashboard', icon: FaChartBar },
  { path: '/faculty/classes', label: 'My Classes', icon: FaChalkboardTeacher },
  { path: '/faculty/students', label: 'Students', icon: FaUsers },
  { path: '/faculty/attendance', label: 'Attendance', icon: FaClipboardList },
  { path: '/faculty/profile', label: 'My Profile', icon: FaUser },
];

const FacultyLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => { logout(); navigate('/login'); };

  const initials = user?.name
    ? user.name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
    : 'F';

  return (
    <div className="flex h-screen bg-emerald-50/50 overflow-hidden w-full">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-20 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed md:static inset-y-0 left-0 z-30 w-64 bg-gradient-to-b from-emerald-900 via-emerald-800 to-teal-900 text-white flex flex-col shadow-2xl transform transition-transform duration-200 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="p-5 border-b border-emerald-700/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-400 rounded-xl flex items-center justify-center text-emerald-900 shrink-0">
              <FaChalkboardTeacher className="text-xl" />
            </div>
            <div>
              <p className="font-bold text-emerald-200 text-sm">Faculty Portal</p>
              <p className="text-emerald-400 text-[10px]">JJ Engineering College</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/faculty'}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                    isActive ? 'bg-emerald-400 text-emerald-900 shadow-lg shadow-emerald-400/30' : 'text-emerald-200 hover:bg-emerald-700/50 hover:text-white'
                  }`
                }
              >
                <Icon className="text-base shrink-0" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="p-4 border-t border-emerald-700/50">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center font-bold text-emerald-900 text-sm shadow-lg">{initials}</div>
            <div className="overflow-hidden">
              <p className="text-white text-sm font-semibold truncate">{user?.name || 'Faculty'}</p>
              <p className="text-emerald-300 text-[10px] truncate flex items-center gap-1">
                <FaUser className="text-[9px]" /> Faculty
              </p>
            </div>
          </div>
          <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 bg-emerald-700/50 hover:bg-red-600 text-white font-medium py-2 rounded-xl transition text-sm border border-emerald-600/30">
            <FaSignOutAlt className="text-sm" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0 w-full">
        <header className="bg-white border-b border-emerald-100 px-4 sm:px-6 py-3 flex justify-between items-center shrink-0 shadow-sm">
          <div className="flex items-center gap-3">
            <button className="md:hidden p-2 rounded-lg text-emerald-600 hover:bg-emerald-50" onClick={() => setSidebarOpen(true)}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
            <div>
              <h1 className="text-lg font-bold text-emerald-900">Faculty Portal</h1>
              <p className="text-xs text-emerald-500 hidden sm:block">Welcome, {user?.name?.split(' ')[0] || 'Professor'}!</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-xs text-emerald-600 hover:underline hidden sm:block">← View Website</Link>
            <div className="w-9 h-9 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center text-emerald-800 font-bold text-sm">{initials}</div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gradient-to-br from-emerald-50/50 to-slate-50 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default FacultyLayout;
