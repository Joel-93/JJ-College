const express = require('express');
const { getAll, getLatest, create, update, remove } = require('../controllers/newsController');
const verifyToken = require('../middleware/authmiddleware');

const router = express.Router();

router.get('/', getAll);
router.get('/latest', getLatest);
router.post('/', verifyToken, create);
router.put('/:id', verifyToken, update);
router.delete('/:id', verifyToken, remove);

module.exports = router;
