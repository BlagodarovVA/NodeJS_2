const getUsersHandler = (req, res) => {
	console.log('GET: getUsersHandler');
	res.send('Get users route');
};
const get1UserHandler = (req, res) => {
	console.log('GET: get1UserHandler');
	res.send(`Get 1 user route. UserId ${req.params.userId}`);
};
const post1UserHandler = (req, res) => {
	console.log('POST: postUsersHandler');
	res.send('Post user route');
};

module.exports = {
	getUsersHandler,
	get1UserHandler,
	post1UserHandler,
};
