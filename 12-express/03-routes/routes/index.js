const express = require('express');
const commentsRouter = require('./comments');
const usersRouter = require('./users');
const rootRouter = require('./root');

const router = express.Router();

router.use('/comments', commentsRouter);
router.use('/users', usersRouter);
// корневой маршрут нужно распологать последним, иначе он будет обрабатывать все запросы
router.use('/', rootRouter);

module.exports = router;
