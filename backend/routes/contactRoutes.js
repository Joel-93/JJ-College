const express = require('express');
const { getAllContacts, submitContact, deleteContact } = require('../controllers/contactController');

const router = express.Router();

router.get('/', getAllContacts);
router.post('/', submitContact);
router.delete('/:id', deleteContact);

module.exports = router;
