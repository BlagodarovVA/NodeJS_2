import http from 'http';
import fs from 'fs';

const PORT = 5001;

const server = http.createServer((req, res) => {
	const filePath = './files/index.html';
	if ((req.url === '/') & (req.method === 'GET')) {
		const readStream = fs.createReadStream(filePath);
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		readStream.pipe(res);
	}
	if ((req.url === '/no-stream') & (req.method === 'GET')) {
		fs.readFile(filePath, (err, data) => {
			if (err) {
				res.statusCode = 500;
				console.log('no-stream: ', err);
				res.end('Error reading file on server');
			} else {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'text/html');
				res.end(data);
			}
		});
	}
});

server.listen(PORT, () => {
	console.log(`Сервер слушается на порту ${PORT}`);
});
