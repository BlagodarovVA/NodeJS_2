const getCommentsHandler = (req, res) => {
	console.log('GET: getCommentsHandler');
	res.send('Get comments route');
};
const get1CommentHandler = (req, res) => {
	console.log('GET: getCommentHandler');
	res.send(`Get 1 comment route. CommentId '${req.params.commentId}'`);
};
const postCommentsHandler = (req, res) => {
	console.log('POST: postCommentsHandler');
	res.sendFile(__dirname + '\\ClmC0rrUoAAAZnM.jpg');
};
const delete1CommentHandler = (req, res) => {
	console.log('DEL: deleteCommentHandler');
	res.send(`Delete comment route. CommentId '${req.params.commentId}'`);
};

module.exports = {
	getCommentsHandler,
	get1CommentHandler,
	postCommentsHandler,
	delete1CommentHandler,
};
