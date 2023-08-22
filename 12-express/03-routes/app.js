const express = require('express');
// при импорте из файла index его в пути импорта можно опускать
const router = require('./routes');

const app = express();
const PORT = 5001;

app.use(router);

app.listen(PORT, () => {
	console.log(
		`INFO: Tits was started on http://${process.env.COMPUTERNAME}:${PORT}/ ...`
	);
});
