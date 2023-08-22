const express = require('express');
const commentsRouter = require('./routes/comments');
const usersRouter = require('./routes/users');

const app = express();
const PORT = 5001;

const getRootHandler = (req, res) => {
	console.log('GET: getRootHandler');
	res.sendFile(__dirname + '/tits.txt');
};

app.get('/', getRootHandler);
app.use('/comments', commentsRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => {
	console.log(
		`INFO: Tits was started on http://${process.env.COMPUTERNAME}:${PORT}/ ...`
	);
});
