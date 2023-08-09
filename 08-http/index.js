const http = require('http');
const { getHTML, getText, getComments, handleNotFound } = require('./handlers');

const PORT = 5001;

const server = http.createServer((req, res) => {
	if (req.method === 'GET' && req.url === '/html') {
		return getHTML(req, res);
	} else if (req.method === 'GET' && req.url === '/text') {
		return getText(req, res);
	} else if (req.method === 'GET' && req.url === '/comments') {
		return getComments(req, res);
	}

	return handleNotFound(req, res);
});

server.listen(PORT, () => {
	console.log(`Server was launched on port ${PORT}`);
});
