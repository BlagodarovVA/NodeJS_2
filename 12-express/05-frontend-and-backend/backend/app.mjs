import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
const PORT = 5001;

// логи запросов
app.use(morgan('dev'));
// конвертация JSON в бъект
app.use(express.json());
// конвертация данных формы в объект
app.use(express.urlencoded({ extended: true }));
// разрешаем запросы с других серверов
app.use(cors());

app.use((req, res) => {
	const personData = {
		name: 'Valery',
		isProgrammer: true,
	};
	console.log(req.body);
	// конвертация объекта в JSON
	return res.json(personData);
});

app.listen(PORT, () => console.log(`Сервер слушает на порту ${PORT}`));
