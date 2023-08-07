const http = require('http');

const PORT = 5000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end('<h1>Greating from the HTTP server</h1>');
	console.log('Пользователь подключился'); // 2 раза принтует почему-то
});

server.listen(PORT, () => {
	console.log(`Server was launched on port ${PORT}`);
});
