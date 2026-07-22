import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API = 'https://jj-college-5poa.onrender.com/api';
const CATEGORIES = ['All', 'Campus', 'Sports', 'Symposium', 'NSS', 'Cultural Fest', 'Convocation'];

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const [page, setPage] = useState(1);
  const PER_PAGE = 12;

  useEffect(() => {
    axios.get(`${API}/gallery`)
      .then(res => { if (res.data.success) { setItems(res.data.data); setFiltered(res.data.data); } })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const result = activeCategory === 'All' ? items : items.filter(i => i.category === activeCategory);
    setFiltered(result);
    setPage(1);
  }, [activeCategory, items]);

  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);

  const categoryColors = {
    Campus: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    Sports: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    Symposium: 'bg-purple-100 text-purple-800 border-purple-200',
    NSS: 'bg-amber-100 text-amber-800 border-amber-200',
    'Cultural Fest': 'bg-pink-100 text-pink-800 border-pink-200',
    Convocation: 'bg-sky-100 text-sky-800 border-sky-200',
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-indigo-950 text-white py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-slate-900 opacity-90" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4 drop-shadow-md">
            Campus <span className="text-amber-400">Gallery</span>
          </h2>
          <p className="text-lg text-indigo-100 max-w-2xl mx-auto font-light leading-relaxed">
            A visual journey through life at JJ Engineering College — campus, events, sports, and more.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition ${
                activeCategory === cat
                  ? 'bg-indigo-900 text-white border-indigo-900 shadow-sm'
                  : `bg-white text-slate-600 border-slate-200 hover:border-indigo-300 ${cat !== 'All' ? categoryColors[cat] : ''}`
              }`}
            >
              {cat}
              {activeCategory !== 'All' && cat === activeCategory && (
                <span className="ml-2 text-xs opacity-70">({filtered.length})</span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1,2,3,4,5,6,7,8].map(i => <div key={i} className="h-52 bg-slate-200 rounded-xl animate-pulse" />)}
          </div>
        ) : paginated.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <p className="text-5xl mb-4">🖼️</p>
            <p className="font-medium text-lg">No images found</p>
            <p className="text-sm mt-1">No photos in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {paginated.map(item => (
              <div
                key={item._id}
                className="relative rounded-xl overflow-hidden cursor-pointer group h-52 shadow-sm hover:shadow-xl transition-all duration-300"
                onClick={() => setLightbox(item)}
              >
                <img
                  src={item.image && item.image.startsWith('/uploads') ? `https://jj-college-5poa.onrender.com${item.image}` : item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={e => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                  <p className="text-white font-bold text-sm leading-tight">{item.title}</p>
                  <span className={`mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full w-fit ${categoryColors[item.category] || 'bg-slate-100 text-slate-700'}`}>{item.category}</span>
                </div>
                <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
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

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img src={lightbox.image && lightbox.image.startsWith('/uploads') ? `https://jj-college-5poa.onrender.com${lightbox.image}` : lightbox.image} alt={lightbox.title} className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl" />
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-white font-bold text-lg">{lightbox.title}</p>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[lightbox.category] || 'bg-slate-100 text-slate-700'}`}>{lightbox.category}</span>
              </div>
              <button onClick={() => setLightbox(null)} className="text-white/70 hover:text-white text-sm border border-white/30 px-4 py-2 rounded-lg transition">✕ Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
