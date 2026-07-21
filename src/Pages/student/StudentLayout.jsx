import { useState } from 'react';
import { Outlet, NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';

const navItems = [
  { path: '/student', label: 'Dashboard', icon: '🏠' },
  { path: '/student/courses', label: 'My Courses', icon: '📚' },
  { path: '/student/results', label: 'Results', icon: '📊' },
  { path: '/student/timetable', label: 'Timetable', icon: '📅' },
  { path: '/student/profile', label: 'My Profile', icon: '👤' },
];

const StudentLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => { logout(); navigate('/login'); };

  const initials = user?.name
    ? user.name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
    : 'S';

  return (
    <div className="flex h-screen bg-sky-50 overflow-hidden">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-20 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed md:static inset-y-0 left-0 z-30 w-64 bg-gradient-to-b from-sky-900 via-sky-800 to-sky-900 text-white flex flex-col shadow-2xl transform transition-transform duration-200 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        {/* Header */}
        <div className="p-5 border-b border-sky-700/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sky-400 rounded-xl flex items-center justify-center font-black text-sky-900 text-sm">🎓</div>
            <div>
              <p className="font-bold text-sky-200 text-sm">Student Portal</p>
              <p className="text-sky-400 text-[10px]">JJ Engineering College</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/student'}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                  isActive ? 'bg-sky-400 text-sky-900 shadow-lg shadow-sky-400/30' : 'text-sky-200 hover:bg-sky-700/50 hover:text-white'
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* User info */}
        <div className="p-4 border-t border-sky-700/50">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-cyan-400 rounded-full flex items-center justify-center font-bold text-sky-900 text-sm shadow-lg">{initials}</div>
            <div className="overflow-hidden">
              <p className="text-white text-sm font-semibold truncate">{user?.name || 'Student'}</p>
              <p className="text-sky-300 text-[10px] truncate">🎓 Student</p>
            </div>
          </div>
          <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 bg-sky-700/50 hover:bg-red-600 text-white font-medium py-2 rounded-xl transition text-sm border border-sky-600/30">
            ⏻ Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <header className="bg-white border-b border-sky-100 px-4 sm:px-6 py-3 flex justify-between items-center shrink-0 shadow-sm">
          <div className="flex items-center gap-3">
            <button className="md:hidden p-2 rounded-lg text-sky-600 hover:bg-sky-50" onClick={() => setSidebarOpen(true)}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
            <div>
              <h1 className="text-lg font-bold text-sky-900">Student Portal</h1>
              <p className="text-xs text-sky-500 hidden sm:block">Welcome back, {user?.name?.split(' ')[0] || 'Student'}!</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-xs text-sky-600 hover:underline hidden sm:block">← View Website</Link>
            <div className="w-9 h-9 bg-gradient-to-br from-sky-100 to-cyan-100 rounded-full flex items-center justify-center text-sky-800 font-bold text-sm">{initials}</div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gradient-to-br from-sky-50 to-slate-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default StudentLayout;
