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
	fs.rmdirSync(destinationDir);
	console.log(`Папка ${destinationDir} удалена`);
}

fs.mkdirSync(destinationDir);
console.log(`Папка ${destinationDir} создана`);
