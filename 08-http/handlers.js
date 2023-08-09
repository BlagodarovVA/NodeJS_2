const comments = require('./data');

let count = 0;

function getHTML(req, res) {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.write('<html><body><div>');
	res.write('<h1>Greating from the HTTP server</h1>');
	res.write('</div></body></html>');
	count++;
	console.log(`№ ${count}: Запрос ${req.method}: на ${req.url}`);
	return res.end();
}

function getText(req, res) {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	count++;
	console.log(`№ ${count}: Запрос ${req.method}: на ${req.url}`);
	return res.end('This is plain text');
}

function getComments(req, res) {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	count++;
	console.log(`№ ${count}: Запрос ${req.method}: на ${req.url}`);
	return res.end(JSON.stringify(comments));
}

function handleNotFound(req, res) {
	res.statusCode = 404;
	res.setHeader('Content-Type', 'text/html');
	count++;
	console.log(`№ ${count}: Запрос ${req.method}: на 404`);
	return res.end('<h1>404: Page not found</h1>');
}

module.exports = {
	getHTML,
	getText,
	getComments,
	handleNotFound,
};
