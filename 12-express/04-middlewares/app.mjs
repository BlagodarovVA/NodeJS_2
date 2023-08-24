import express from 'express';
import morgan from 'morgan';
// import qs from 'querystring';

const app = express();
const PORT = 5001;

app.use(morgan('dev'));
app.use(express.json());
// метод выше делает то же, что и следующие 9 строк
// app.use((req, res, next) => {
// 	let data = '';
// 	req.on('data', (chunk) => (data += chunk));
// 	req.on('end', () => {
// 		const parsedJSON = JSON.parse(data);
// 		req.body = parsedJSON;
// 		next();
// 	});
// });

app.use(express.urlencoded({ extended: true }));
// метод выше делает то же, что и следующие 13 строк
// app.use((req, res, next) => {
// 	if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
// 		let data = '';
// 		req.on('data', (chunk) => (data += chunk.toString()));
// 		req.on('end', () => {
// 			const parsedFormData = qs.parse(data);
// 			req.body = parsedFormData;
// 			next();
// 		});
// 	} else {
// 		next();
// 	}
// });

app.use((req, res) => {
	console.log(req.body);
	return res.send(`<h1>Это express сервер...</h1>`);
});

app.listen(PORT, () => console.log(`Сервер слушает на порту ${PORT}`));
