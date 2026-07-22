const Gallery = require('../models/Gallery');

// GET all (public) - optional ?category= filter
const getAll = async (req, res) => {
  try {
    const filter = req.query.category ? { category: req.query.category } : {};
    const items = await Gallery.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, data: items });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// GET preview 6 for home page
const getPreview = async (req, res) => {
  try {
    const items = await Gallery.find().sort({ createdAt: -1 }).limit(6);
    res.json({ success: true, data: items });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// POST create (protected)
const create = async (req, res) => {
  try {
    const { title, image, category } = req.body;
    if (!title || !image || !category) {
      return res.status(400).json({ success: false, message: 'Title, image and category are required.' });
    }
    const item = await Gallery.create({ title, image, category });
    res.status(201).json({ success: true, data: item });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// PUT update (protected)
const update = async (req, res) => {
  try {
    const item = await Gallery.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!item) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, data: item });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// DELETE (protected)
const remove = async (req, res) => {
  try {
    const item = await Gallery.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = { getAll, getPreview, create, update, remove };
