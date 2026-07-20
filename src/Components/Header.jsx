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
    { to: '/admissions', label: 'Admissions' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-indigo-900 text-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-indigo-950 text-indigo-300 text-xs py-1 px-4 text-center hidden sm:block">
        Affiliated to Anna University &nbsp;|&nbsp; Approved by AICTE &nbsp;|&nbsp; Accredited Institution
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center font-black text-indigo-900 text-lg">
              JJ
            </div>
            <div>
              <div className="text-amber-400 font-extrabold text-lg leading-tight tracking-wide">
                JJ ENGINEERING COLLEGE
              </div>
              <div className="text-indigo-300 text-[10px] sm:hidden">Anna University | AICTE</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
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
              <div className="flex items-center gap-2 ml-3 pl-3 border-l border-indigo-700">
                <Link
                  to="/dashboard"
                  className="px-3 py-2 rounded-md text-sm font-medium bg-indigo-700 hover:bg-indigo-600 text-white transition"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="px-3 py-2 rounded-md text-sm font-medium bg-red-600 hover:bg-red-700 text-white transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="ml-3 px-4 py-2 bg-amber-400 hover:bg-amber-300 text-indigo-900 font-bold rounded-md text-sm transition"
              >
                Admin Login
              </Link>
            )}
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-md text-indigo-200 hover:bg-indigo-800"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-indigo-900 border-t border-indigo-800 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-sm font-medium transition ${
                  isActive ? 'bg-amber-400 text-indigo-900' : 'text-indigo-100 hover:bg-indigo-800'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          {user ? (
            <>
              <Link to="/dashboard" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-md text-sm bg-indigo-700 text-white">Dashboard</Link>
              <button onClick={() => { logout(); setMobileOpen(false); }} className="w-full text-left px-3 py-2 rounded-md text-sm bg-red-600 text-white">Logout</button>
            </>
          ) : (
            <Link to="/login" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-md text-sm bg-amber-400 text-indigo-900 font-bold">Admin Login</Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;