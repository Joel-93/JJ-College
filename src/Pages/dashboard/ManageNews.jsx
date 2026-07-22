import { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'https://jj-college-5poa.onrender.com/api';
const EMPTY_FORM = { title: '', description: '', image: '', category: 'Academics', publishDate: '' };
const CATEGORIES = ['Academics', 'Events', 'Sports', 'Research', 'Placement', 'General'];

const categoryColors = {
  Academics: 'bg-indigo-100 text-indigo-800',
  Events: 'bg-amber-100 text-amber-800',
  Sports: 'bg-emerald-100 text-emerald-800',
  Research: 'bg-purple-100 text-purple-800',
  Placement: 'bg-sky-100 text-sky-800',
  General: 'bg-slate-100 text-slate-700',
};

const ManageNews = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [toast, setToast] = useState('');
  const [search, setSearch] = useState('');
  const [deleteId, setDeleteId] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  const token = localStorage.getItem('token');
  const authHeader = { Authorization: `Bearer ${token}` };

  useEffect(() => { fetchAll(); }, []);

  const fetchAll = async () => {
    try {
      const res = await axios.get(`${API}/news`);
      if (res.data.success) setItems(res.data.data);
    } catch { }
    finally { setLoading(false); }
  };

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(''), 3000); };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append('image', file);
    setUploadingImage(true);
    setError('');
    try {
      const res = await axios.post(`${API}/upload`, formData, {
        headers: { ...authHeader, 'Content-Type': 'multipart/form-data' }
      });
      if (res.data.success) {
        setForm(prev => ({ ...prev, image: res.data.url }));
        showToast('Image uploaded successfully!');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Image upload failed.');
    } finally {
      setUploadingImage(false);
    }
  };

  const openAdd = () => { setForm({ ...EMPTY_FORM, publishDate: new Date().toISOString().split('T')[0] }); setEditItem(null); setError(''); setShowModal(true); };
  const openEdit = (item) => {
    setForm({
      title: item.title, description: item.description, image: item.image,
      category: item.category, publishDate: new Date(item.publishDate).toISOString().split('T')[0],
    });
    setEditItem(item);
    setError('');
    setShowModal(true);
  };

  const handleSave = async () => {
    if (!form.title.trim() || !form.description.trim() || !form.image.trim()) {
      return setError('Title, description, and image are required.');
    }
    setSaving(true); setError('');
    try {
      if (editItem) {
        await axios.put(`${API}/news/${editItem._id}`, form, { headers: authHeader });
        showToast('News updated successfully!');
      } else {
        await axios.post(`${API}/news`, form, { headers: authHeader });
        showToast('News created successfully!');
      }
      setShowModal(false);
      await fetchAll();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save. Please try again.');
    } finally { setSaving(false); }
  };

  const confirmDelete = async () => {
    if (!deleteId) return;
    setDeleting(true);
    try {
      await axios.delete(`${API}/news/${deleteId}`, { headers: authHeader });
      setItems(prev => prev.filter(i => i._id !== deleteId));
      showToast('News deleted successfully!');
    } catch { showToast('Failed to delete.'); }
    finally { setDeleting(false); setDeleteId(null); }
  };

  const filtered = items.filter(i => i.title.toLowerCase().includes(search.toLowerCase()) || i.category.toLowerCase().includes(search.toLowerCase()));
  const formatDate = (d) => new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

  return (
    <div className="space-y-5">
      {/* Toast */}
      {toast && <div className="fixed top-5 right-5 z-50 bg-emerald-600 text-white px-5 py-3 rounded-xl shadow-lg text-sm font-medium animate-pulse">{toast}</div>}

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Manage News</h2>
          <p className="text-slate-500 text-sm mt-0.5">{items.length} article{items.length !== 1 ? 's' : ''} total</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <input type="text" placeholder="Search news..." value={search} onChange={e => setSearch(e.target.value)} className="border border-slate-200 rounded-lg px-3 py-2 text-sm flex-1 sm:w-52 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <button onClick={openAdd} className="flex items-center gap-2 bg-indigo-900 hover:bg-indigo-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition shrink-0">+ Add News</button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {loading ? (
          <div className="p-10 text-center text-slate-400">Loading...</div>
        ) : filtered.length === 0 ? (
          <div className="p-10 text-center text-slate-400">
            <p className="text-4xl mb-3">📰</p>
            <p className="font-medium">No news articles found</p>
            <p className="text-sm mt-1">Click "Add News" to create the first article.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  {['Image', 'Title', 'Category', 'Published', 'Actions'].map(h => (
                    <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map(item => (
                  <tr key={item._id} className="hover:bg-slate-50 transition">
                    <td className="px-5 py-3">
                      <img src={item.image && item.image.startsWith('/uploads') ? `https://jj-college-5poa.onrender.com${item.image}` : item.image} alt={item.title} className="w-14 h-10 object-cover rounded-lg border border-slate-200" onError={e => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=200&q=60'; }} />
                    </td>
                    <td className="px-5 py-3 font-medium text-slate-900 max-w-xs">
                      <p className="truncate">{item.title}</p>
                      <p className="text-xs text-slate-500 truncate mt-0.5">{item.description.substring(0, 60)}...</p>
                    </td>
                    <td className="px-5 py-3"><span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${categoryColors[item.category] || 'bg-slate-100 text-slate-700'}`}>{item.category}</span></td>
                    <td className="px-5 py-3 text-slate-500 text-xs">{formatDate(item.publishDate)}</td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        <button onClick={() => openEdit(item)} className="text-indigo-600 hover:text-indigo-900 text-xs font-medium border border-indigo-200 px-2.5 py-1 rounded-lg hover:bg-indigo-50 transition">Edit</button>
                        <button onClick={() => setDeleteId(item._id)} className="text-red-500 hover:text-red-700 text-xs font-medium border border-red-200 px-2.5 py-1 rounded-lg hover:bg-red-50 transition">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center sticky top-0 bg-white">
              <h3 className="font-bold text-slate-800 text-lg">{editItem ? 'Edit News Article' : 'Create News Article'}</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600 text-2xl leading-none">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              {error && <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Title *</label>
                <input className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="e.g. Admissions Open for 2026-27" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Description *</label>
                <textarea rows={4} className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} placeholder="Enter a short description of the news..." />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Upload Image *</label>
                <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
                {uploadingImage && <p className="text-xs text-indigo-600 animate-pulse mt-1">Uploading image...</p>}
                {form.image && <img src={form.image.startsWith('/uploads') ? `https://jj-college-5poa.onrender.com${form.image}` : form.image} alt="preview" className="mt-2 h-24 w-full object-cover rounded-lg border border-slate-200" onError={e => e.target.style.display = 'none'} />}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Category</label>
                  <select className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Publish Date</label>
                  <input type="date" className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" value={form.publishDate} onChange={e => setForm({ ...form, publishDate: e.target.value })} />
                </div>
              </div>
            </div>
            <div className="p-4 border-t flex justify-end gap-3 sticky bottom-0 bg-white">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 border border-slate-300 rounded-lg text-sm text-slate-600 hover:bg-slate-50">Cancel</button>
              <button onClick={handleSave} disabled={saving} className="px-4 py-2 bg-indigo-900 text-white rounded-lg text-sm hover:bg-indigo-800 disabled:opacity-60">
                {saving ? 'Saving...' : editItem ? 'Update Article' : 'Create Article'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 text-center">
            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-2xl">⚠</span>
            </div>
            <h3 className="font-bold text-slate-800 text-lg mb-2">Delete News Article?</h3>
            <p className="text-slate-500 text-sm mb-6">This action cannot be undone. The article will be permanently removed.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteId(null)} className="flex-1 px-4 py-2 border border-slate-300 rounded-lg text-sm text-slate-600 hover:bg-slate-50">Cancel</button>
              <button onClick={confirmDelete} disabled={deleting} className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 disabled:opacity-60">{deleting ? 'Deleting...' : 'Delete'}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageNews;
