// How to run program: node createfile.mjs <filename> <linesQty>
import fs from 'fs';
import path from 'path';

if (!process.argv[2] || !process.argv[3]) {
	console.log('Achtung: Имя файла и количество строк должны быть заполнены');
	process.exit(0);
}

const fileName = process.argv[2];
const linesQty = parseInt(process.argv[3]);
if (isNaN(linesQty)) {
	console.log('Achtung: linesQty должно быть числом');
	process.exit(0);
}

const writeStream = fs.createWriteStream(path.join('./files', fileName));

console.log('Start', performance.now());
for (let i = 1; i <= linesQty; i++) {
	writeStream.write(`Это строка № ${i} в автоматичеки сгенерированном файле\n`);
}
console.log('End', performance.now());
setTimeout(() => console.log('Timeout', performance.now()), 0);

writeStream.end(() => {
	console.log(
		`Автоматически сгенерированный файл ${fileName} с количеством строк - ${linesQty} был создан`
	);
});
