const express = require('express');
const {
	getUsersHandler,
	get1UserHandler,
	post1UserHandler,
} = require('../controllers/users');

const router = express.Router();

router.get('/', getUsersHandler);
router.post('/', post1UserHandler);
router.get('/:userId', get1UserHandler);

// экспорт по умолчанию
module.exports = router;
