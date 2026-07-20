const Contact = require('../models/Contact');

// GET all contact submissions
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: contacts });
  } catch (err) {
    console.error('Get Contacts Error:', err);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// POST - submit new contact form
exports.submitContact = async (req, res) => {
  try {
    const { fullName, email, phone, city, course, message } = req.body;

    if (!fullName || !email || !phone || !city || !course || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }

    const newContact = await Contact.create({ fullName, email, phone, city, course, message });

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: newContact,
    });
  } catch (err) {
    console.error('Contact Submission Error:', err);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// DELETE a contact enquiry
exports.deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
