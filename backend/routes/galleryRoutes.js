const express = require('express');
const { getAll, getPreview, create, update, remove } = require('../controllers/galleryController');
const verifyToken = require('../middleware/authmiddleware');

const router = express.Router();

router.get('/', getAll);
router.get('/preview', getPreview);
router.post('/', verifyToken, create);
router.put('/:id', verifyToken, update);
router.delete('/:id', verifyToken, remove);

module.exports = router;
