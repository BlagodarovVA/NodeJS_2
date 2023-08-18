const express = require('express');

const app = express();
const PORT = 5001;

const firstHandler = (req, res, next) => {
	console.log('INFO: First handler');
	next(); // позволяет перейти к следующему обработчику
};

const secondHandler = (req, res) => {
	console.log('INFO: Second handler');
	res.sendFile(__dirname + '/tits.txt');
};

const siskiHandler = (req, res) => {
	console.log('INFO: siskiHandler handler');
	res.sendFile(__dirname + '/ClmC0rrUoAAAZnM.jpg');
};

app.get('/', firstHandler, secondHandler);
app.get('/siski', siskiHandler);

app.listen(PORT, () => {
	console.log(
		`Tits was started on http://${process.env.COMPUTERNAME}:${PORT}/ ...`
	);
});
