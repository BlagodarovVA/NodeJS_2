const http = require('http');

const PORT = 5000;
let count = 0;

const comments = [
	{ id: 100, text: 'First comment', author: 'Valery' },
	{ id: 202, text: 'Second comment', author: 'Diana' },
	{ id: 333, text: 'Last comment', author: 'Vasil' },
];

const server = http.createServer((req, res) => {
	if (req.url === '/html') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.write('<html><body><div>');
		res.write('<h1>Greating from the HTTP server</h1>');
		res.write('</div></body></html>');
		count++;
		console.log(`Запрос № ${count}: на /html`);
		return res.end();
	} else if (req.url === '/text') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		count++;
		console.log(`Запрос № ${count}: на /text`);
		return res.end('This is plain text');
	} else if (req.url === '/json') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		count++;
		console.log(`Запрос № ${count}: на \/json`);
		return res.end(JSON.stringify(comments));
	}

	res.statusCode = 404;
	res.setHeader('Content-Type', 'text/html');
	count++;
	console.log(`Запрос № ${count}: на 404`);
	return res.end('<h1>404: Page not found</h1>');
});

server.listen(PORT, () => {
	console.log(`Server was launched on port ${PORT}`);
});
