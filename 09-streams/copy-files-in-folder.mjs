import fs from 'fs';
import path from 'path';

const sourceDir = './files';
const destinationDir = './copied-files';

if (!fs.existsSync(sourceDir)) {
	console.warn(`Исходная папка ${sourceDir} не существует`);
	console.log('Exiting...');
	process.exit(0);
}

if (fs.existsSync(destinationDir)) {
	// уудаляем папку и содержимое
	fs.rmSync(destinationDir, { recursive: true });
	console.log(`Папка ${destinationDir} удалена`);
}

fs.mkdirSync(destinationDir);
console.log(`Папка ${destinationDir} создана`);

fs.readdir(sourceDir, (err, fileNames) => {
	try {
		if (err) {
			console.log(err);
			process.exit(1);
		}

		fileNames.forEach((fileName, index) => {
			const sourceFilePath = path.join(sourceDir, fileName);
			const destFilePath = path.join(
				destinationDir,
				`${index + 1}. ${fileName}`
			);

			const readFileStream = fs.createReadStream(sourceFilePath);
			const writeFileStream = fs.createWriteStream(destFilePath);

			readFileStream.pipe(writeFileStream);

			writeFileStream.on('finish', () => {
				console.log(`Файл ${fileName} скопирован`);
			});
		});
	} catch (error) {
		console.log('Ошибка try: ', error);
	}
});
