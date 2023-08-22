const getRootHandler = (req, res) => {
	console.log('GET: getRootHandler');
	res.sendFile(__dirname + '/tits.txt');
};

module.exports = { getRootHandler };
