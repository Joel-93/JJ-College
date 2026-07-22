const Event = require('../models/Event');

// GET all events (public) - sorted by date ascending
const getAll = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.json({ success: true, data: events });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// GET upcoming 3 events (home page preview) - nearest future events
const getUpcoming = async (req, res) => {
  try {
    const now = new Date();
    // Try to get future events first, fall back to all sorted events
    let events = await Event.find({ date: { $gte: now } }).sort({ date: 1 }).limit(3);
    if (events.length === 0) {
      events = await Event.find().sort({ date: 1 }).limit(3);
    }
    res.json({ success: true, data: events });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// POST create (protected)
const create = async (req, res) => {
  try {
    const { title, description, image, date, time, venue } = req.body;
    if (!title || !description || !image || !date || !time || !venue) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }
    const event = await Event.create({ title, description, image, date, time, venue });
    res.status(201).json({ success: true, data: event });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// PUT update (protected)
const update = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!event) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, data: event });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// DELETE (protected)
const remove = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = { getAll, getUpcoming, create, update, remove };
