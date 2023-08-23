import express from 'express';
import morgan from 'morgan';

const app = express();
const PORT = 5001;

app.use(morgan('dev'));

app.use(express.json()); // метод делает то же, что и строки 10-18
// app.use((req, res, next) => {
// 	let data = '';
// 	req.on('data', (chunk) => (data += chunk));
// 	req.on('end', () => {
// 		const parsedJSON = JSON.parse(data);
// 		req.body = parsedJSON;
// 		next();
// 	});
// });

app.use((req, res) => {
	console.log(req.body);
	return res.send(`<h1>Это express сервер...</h1>`);
});

app.listen(PORT, () => console.log(`Сервер слушает на порту ${PORT}`));
