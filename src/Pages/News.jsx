import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API = 'https://jj-college-5poa.onrender.com/api';

const CATEGORIES = ['All', 'Academics', 'Events', 'Sports', 'Research', 'Placement', 'General'];

const News = () => {
  const [news, setNews] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const PER_PAGE = 9;

  useEffect(() => {
    axios.get(`${API}/news`)
      .then(res => { if (res.data.success) { setNews(res.data.data); setFiltered(res.data.data); } })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    let result = news;
    if (activeCategory !== 'All') result = result.filter(n => n.category === activeCategory);
    if (search.trim()) result = result.filter(n => n.title.toLowerCase().includes(search.toLowerCase()) || n.description.toLowerCase().includes(search.toLowerCase()));
    setFiltered(result);
    setPage(1);
  }, [activeCategory, search, news]);

  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);

  const formatDate = (d) => new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

  const categoryColors = {
    Academics: 'bg-indigo-100 text-indigo-800',
    Events: 'bg-amber-100 text-amber-800',
    Sports: 'bg-emerald-100 text-emerald-800',
    Research: 'bg-purple-100 text-purple-800',
    Placement: 'bg-sky-100 text-sky-800',
    General: 'bg-slate-100 text-slate-700',
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-indigo-950 text-white py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-slate-900 opacity-90" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4 drop-shadow-md">
            Latest <span className="text-amber-400">News</span>
          </h2>
          <p className="text-lg text-indigo-100 max-w-2xl mx-auto font-light leading-relaxed">
            Stay up-to-date with the latest announcements, achievements, and happenings at JJ Engineering College.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
                  activeCategory === cat
                    ? 'bg-indigo-900 text-white border-indigo-900'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search news..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full sm:w-64"
          />
        </div>
      </section>

      {/* News Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden animate-pulse">
                <div className="h-48 bg-slate-200" />
                <div className="p-5 space-y-3">
                  <div className="h-3 bg-slate-200 rounded w-1/3" />
                  <div className="h-5 bg-slate-200 rounded w-4/5" />
                  <div className="h-3 bg-slate-200 rounded w-full" />
                  <div className="h-3 bg-slate-200 rounded w-3/4" />
                </div>
              </div>
            ))}
          </div>
        ) : paginated.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <p className="text-5xl mb-4">📰</p>
            <p className="font-medium text-lg">No news found</p>
            <p className="text-sm mt-1">Try a different filter or search term.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginated.map(item => (
              <div key={item._id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                <div className="relative overflow-hidden h-48">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={e => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&q=80'; }} />
                  <div className="absolute top-3 left-3">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${categoryColors[item.category] || 'bg-slate-100 text-slate-700'}`}>{item.category}</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs text-slate-400 mb-2">{formatDate(item.publishDate)}</p>
                  <h3 className="font-bold text-indigo-900 text-base leading-snug mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 flex-1">{item.description}</p>
                  <div className="mt-4">
                    <span className="inline-flex items-center gap-1 text-indigo-700 text-sm font-semibold hover:text-indigo-900 cursor-pointer group-hover:underline">
                      Read More <span>→</span>
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

export default News;
