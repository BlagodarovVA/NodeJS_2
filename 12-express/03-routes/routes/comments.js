const express = require('express');
const {
	getCommentsHandler,
	get1CommentHandler,
	postCommentsHandler,
	delete1CommentHandler,
} = require('../controllers/comments');

const router = express.Router();

router.get('/', getCommentsHandler);
router.post('/', postCommentsHandler);
router.get('/:commentId', get1CommentHandler);
router.delete('/:commentId', delete1CommentHandler);

// экспорт по умолчанию
module.exports = router;
