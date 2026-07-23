import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logout } = useAuth();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/courses', label: 'Courses' },
    { to: '/departments', label: 'Departments' },
    { to: '/placement', label: 'Placement' },
    { to: '/campus-life', label: 'Campus Life' },
    { to: '/research', label: 'Research' },
    { to: '/admissions', label: 'Admissions' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-indigo-900 text-white shadow-md sticky top-0 z-50">
      {/* Main header */}
      <div className="w-full px-4 py-3 sm:px-8 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/college_logo.png" alt="JJ College Logo" className="w-16 h-16 object-cover rounded-full shadow-md border-2 border-amber-400 bg-white" />
          <div className="hidden sm:block">
            <h1 className="text-xl font-extrabold tracking-tight text-amber-400">
              JJ ENGINEERING COLLEGE
            </h1>
            <p className="text-[10px] text-indigo-200 font-medium">Anna University | AICTE</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? 'bg-amber-400 text-indigo-900'
                    : 'text-indigo-100 hover:bg-indigo-800 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="px-3 py-2 rounded-md text-sm font-medium bg-indigo-700 text-white hover:bg-indigo-600 transition"
              >
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="px-3 py-2 rounded-md text-sm font-medium bg-red-600 text-white hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="px-3 py-2 rounded-md text-sm font-medium bg-red-600 text-white hover:bg-red-700 transition font-bold"
            >
              Login
            </Link>
          )}
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-indigo-100 hover:text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-indigo-800 border-t border-indigo-700 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-sm font-medium transition ${
                  isActive
                    ? 'bg-amber-400 text-indigo-900'
                    : 'text-indigo-100 hover:bg-indigo-700'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          {user ? (
            <>
              <Link
                to="/dashboard"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-md text-sm bg-indigo-700 text-white"
              >
                Dashboard
              </Link>
              <button
                onClick={() => {
                  logout();
                  setMobileOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-md text-sm bg-red-600 text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-md text-sm bg-red-600 text-white font-bold"
            >
              Login
            </Link>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;