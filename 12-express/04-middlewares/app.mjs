import express from 'express';

const app = express();
const PORT = 5001;

const logger = (req, res, next) => {
	console.log(req.method, req.path);
	next();
};

app.use(logger);

app.use((req, res) =>
	res.send(`
<h1>Привет</h1>
<h1>Это express сервер...</h1>
`)
);

app.listen(PORT, () => console.log(`Сервер слушает на порту ${PORT}`));
