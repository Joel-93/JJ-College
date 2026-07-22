import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const Login = () => {
  const [role, setRole] = useState('admin');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const roleConfig = {
    admin: {
      label: 'Admin',
      color: 'from-indigo-950 via-indigo-900 to-slate-900',
      accent: 'text-amber-400',
      badge: 'bg-amber-400 text-indigo-900',
      hint: 'admin / admin@123',
    },
    faculty: {
      label: 'Faculty',
      color: 'from-emerald-950 via-emerald-900 to-slate-900',
      accent: 'text-emerald-400',
      badge: 'bg-emerald-400 text-emerald-900',
      hint: 'fac_cse01 / faculty@123',
    },
    student: {
      label: 'Student',
      color: 'from-sky-950 via-sky-900 to-slate-900',
      accent: 'text-sky-400',
      badge: 'bg-sky-400 text-sky-900',
      hint: '23ucs082 / student@123',
    },
  };

  const cfg = roleConfig[role];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const res = await login(username, password);
    setLoading(false);
    if (res.success) {
      // Route based on role from server response
      if (res.role === 'admin') navigate('/dashboard');
      else if (res.role === 'faculty') navigate('/faculty');
      else navigate('/student');
    } else {
      setError(res.message || 'Invalid credentials');
    }
  };

  return (
    <div className={`min-h-[calc(100vh-130px)] flex items-center justify-center bg-gradient-to-br ${cfg.color} px-4 py-12 transition-all duration-500`}>
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <img src="/college_logo.png" alt="JJ College Logo" className="w-24 h-24 object-cover mx-auto mb-4 rounded-full shadow-lg border-4 border-amber-400 bg-white" />
          <h2 className="text-3xl font-extrabold text-white">Welcome Back</h2>
          <p className="text-slate-300 text-sm mt-2">Sign in to your JJ Engineering College portal</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Role Selector Tabs */}
          <div className="grid grid-cols-3 border-b border-slate-200">
            {Object.entries(roleConfig).map(([key, val]) => (
              <button
                key={key}
                type="button"
                onClick={() => { setRole(key); setError(''); setUsername(''); setPassword(''); }}
                className={`py-3 text-sm font-semibold capitalize transition-all ${
                  role === key
                    ? 'bg-indigo-900 text-white border-b-2 border-amber-400'
                    : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                {val.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-5">
            {/* Role display badge */}
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${cfg.badge}`}>
                {role} Login
              </span>
            </div>

            {/* Role Field (display only) */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Login As</label>
              <div className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 text-sm text-slate-600 capitalize font-medium">
                {cfg.label}
              </div>
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Username</label>
              <input
                type="text"
                placeholder={`Enter your ${role} username`}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm transition"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm transition"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-2.5 flex items-center gap-2">
                <span>Error:</span> {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-900 hover:bg-indigo-800 text-white font-bold py-3 rounded-xl transition disabled:opacity-60 text-sm"
            >
              {loading ? 'Signing in...' : `Sign In as ${role.charAt(0).toUpperCase() + role.slice(1)}`}
            </button>

            {/* Demo credentials hint */}
            <p className="text-center text-xs text-slate-400 border-t pt-4">
              Demo: <span className="font-mono text-slate-500">{cfg.hint}</span>
            </p>
          </form>
        </div>

        <div className="text-center mt-4">
          <Link to="/" className="text-slate-300 hover:text-white text-sm transition">← Back to Website</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;