const express = require('express');
const app = express();

let counter = 0;

app.get('/', function (req, res) {
	res.send('Hello Express');
	counter++;
	console.log(`INFO: ${counter} request...`);
});

app.listen(3000);
