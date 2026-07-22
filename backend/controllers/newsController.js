const News = require('../models/News');

// GET all news (public) - sorted newest first
const getAll = async (req, res) => {
  try {
    const news = await News.find().sort({ publishDate: -1 });
    res.json({ success: true, data: news });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// GET latest 3 (for home page preview)
const getLatest = async (req, res) => {
  try {
    const news = await News.find().sort({ publishDate: -1 }).limit(3);
    res.json({ success: true, data: news });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// POST create (protected)
const create = async (req, res) => {
  try {
    const { title, description, image, category, publishDate } = req.body;
    if (!title || !description || !image || !category) {
      return res.status(400).json({ success: false, message: 'Title, description, image and category are required.' });
    }
    const news = await News.create({ title, description, image, category, publishDate });
    res.status(201).json({ success: true, data: news });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// PUT update (protected)
const update = async (req, res) => {
  try {
    const news = await News.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!news) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, data: news });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// DELETE (protected)
const remove = async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);
    if (!news) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = { getAll, getLatest, create, update, remove };
