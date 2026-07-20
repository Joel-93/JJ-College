import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-indigo-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-amber-400">
            JJ ENGINEERING COLLEGE
          </h1>
          <p className="text-xs md:text-sm text-indigo-200 mt-1 font-medium">
            Affiliated to Anna University | Approved by AICTE | Accredited Institution
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-1 sm:gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition ${
                isActive ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-800'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition ${
                isActive ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-800'
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition ${
                isActive ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-800'
              }`
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/admissions"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition ${
                isActive ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-800'
              }`
            }
          >
            Admissions
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition ${
                isActive ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-800'
              }`
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;