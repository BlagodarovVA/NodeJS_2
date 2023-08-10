const fs = require('fs');
const comments = require('./data');

let count = 0;

function getHome(req, res) {
	fs.readFile('./files/comment-form.html', (err, data) => {
		if (err) {
			res.statusCode = 500;
			res.setHeader('Content-Type', 'text/plain');
			console.log('getHome: ', err);
			res.end('Ошибка сервера при загрузке HTML файла');
		} else {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			res.end(data);
		}
	});
}

function getHTML(req, res) {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.write('<html><body><div>');
	res.write('<h1>Greating from the HTTP server</h1>');
	res.write('</div></body></html>');
	count++;
	console.log(`№ ${count}: Запрос ${req.method}: на ${req.url}`);
	res.end();
}

function getText(req, res) {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	count++;
	console.log(`№ ${count}: Запрос ${req.method}: на ${req.url}`);
	res.end('This is plain text');
}

function getComments(req, res) {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	count++;
	console.log(`№ ${count}: Запрос ${req.method}: на ${req.url}`);
	res.end(JSON.stringify(comments));
}

function postComment(req, res) {
	res.setHeader('Content-Type', 'text/html');
	if (req.headers['content-type'] === 'application/json') {
		let commentJSON = '';

		req.on('data', (chunk) => (commentJSON += chunk));
		req.on('end', () => {
			try {
				comments.push(JSON.parse(commentJSON));
				res.statusCode = 200;
				res.end('INFO: Data was received');
			} catch (error) {
				res.statusCode = 400;
				res.end('Error: invalid JSON');
			}
		});
	} else {
		res.statusCode = 400;
		res.end('Error: Data must be in JSON format');
	}
}

function handleNotFound(req, res) {
	res.statusCode = 404;
	res.setHeader('Content-Type', 'text/html');
	count++;
	console.log(`№ ${count}: Запрос ${req.method}: на 404`);
	res.end('<h1>404: Page not found</h1>');
}

module.exports = {
	getHTML,
	getText,
	getComments,
	postComment,
	handleNotFound,
	getHome,
};
