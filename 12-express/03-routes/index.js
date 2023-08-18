const express = require('express');

const app = express();
const PORT = 5001;

const getRootHandler = (req, res) => {
	console.log('INFO: getRootHandler');
	res.sendFile(__dirname + '/tits.txt');
};

const getCommentsHandler = (req, res) => {
	console.log('INFO: getCommentsHandler');
	res.send('Get comments route');
};

const postCommentsHandler = (req, res) => {
	console.log('INFO: postCommentsHandler');
	res.sendFile(__dirname + '/ClmC0rrUoAAAZnM.jpg');
};

app.get('/', getRootHandler);
app.get('/comments', getCommentsHandler);
app.post('/comments', postCommentsHandler);

app.listen(PORT, () => {
	console.log(
		`Tits was started on http://${process.env.COMPUTERNAME}:${PORT}/ ...`
	);
});