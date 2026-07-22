import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const API = 'https://jj-college-5poa.onrender.com/api';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const PER_PAGE = 6;

  useEffect(() => {
    axios.get(`${API}/events`)
      .then(res => { if (res.data.success) setEvents(res.data.data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const formatDate = (d) => new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' });
  const isUpcoming = (d) => new Date(d) >= new Date();

  const filtered = events.filter(e =>
    e.title.toLowerCase().includes(search.toLowerCase()) ||
    e.venue.toLowerCase().includes(search.toLowerCase())
  );

  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-indigo-950 text-white py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-slate-900 opacity-90" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4 drop-shadow-md">
            Upcoming <span className="text-amber-400">Events</span>
          </h2>
          <p className="text-lg text-indigo-100 max-w-2xl mx-auto font-light leading-relaxed">
            Discover exciting events, seminars, workshops, and competitions happening at JJ Engineering College.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4 flex-wrap">
          <p className="text-slate-500 text-sm">{filtered.length} event{filtered.length !== 1 ? 's' : ''} found</p>
          <input
            type="text"
            placeholder="Search events or venues..."
            value={search}
            onChange={e => { setSearch(e.target.value); setPage(1); }}
            className="border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full sm:w-72"
          />
        </div>
      </section>

      {/* Events Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden animate-pulse">
                <div className="h-48 bg-slate-200" />
                <div className="p-5 space-y-3">
                  <div className="h-5 bg-slate-200 rounded w-4/5" />
                  <div className="h-3 bg-slate-200 rounded w-2/3" />
                  <div className="h-3 bg-slate-200 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : paginated.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <p className="text-5xl mb-4">📅</p>
            <p className="font-medium text-lg">No events found</p>
            <p className="text-sm mt-1">Check back soon for upcoming events.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginated.map(item => (
              <div key={item._id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                <div className="relative overflow-hidden h-48">
                  <img src={item.image && item.image.startsWith('/uploads') ? `https://jj-college-5poa.onrender.com${item.image}` : item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={e => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80'; }} />
                  <div className="absolute top-3 right-3">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${isUpcoming(item.date) ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}`}>
                      {isUpcoming(item.date) ? 'Upcoming' : 'Completed'}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-indigo-900 text-base leading-snug mb-3 line-clamp-2">{item.title}</h3>
                  <div className="space-y-1.5 text-xs text-slate-600 mb-3">
                    <div className="flex items-center gap-2"><FaCalendarAlt className="text-amber-500 shrink-0" /><span>{formatDate(item.date)}</span></div>
                    <div className="flex items-center gap-2"><FaClock className="text-indigo-500 shrink-0" /><span>{item.time}</span></div>
                    <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-red-500 shrink-0" /><span>{item.venue}</span></div>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 flex-1">{item.description}</p>
                  <div className="mt-4">
                    <span className={`inline-block px-4 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${
                      isUpcoming(item.date)
                        ? 'bg-indigo-900 text-white hover:bg-indigo-800'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}>
                      {isUpcoming(item.date) ? 'View Details / Register' : 'View Details'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-10">
            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50 disabled:opacity-40 transition">← Prev</button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
              <button key={p} onClick={() => setPage(p)} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${page === p ? 'bg-indigo-900 text-white' : 'border border-slate-200 text-slate-600 hover:bg-slate-50'}`}>{p}</button>
            ))}
            <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50 disabled:opacity-40 transition">Next →</button>
          </div>
        )}

        <div className="text-center mt-6">
          <Link to="/" className="text-indigo-600 text-sm hover:underline">← Back to Home</Link>
        </div>
      </section>
    </>
  );
};

export default Events;
