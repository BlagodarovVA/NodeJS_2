const express = require('express');
const tits = require('./vars');

const app = express();

app.get('/', (req, res) => res.sendFile(__dirname + '/tits.txt'));

app.listen(5001, () => {
	console.log('Tits was started on port 5001...');
	console.log(`${tits}`);
});

// // без express
// const server = http.createServer(app);

// server.listen(5001, () => {
// 	console.log('Tits was started on port 5001...');
// 	console.log(`${tits}`);
// });
