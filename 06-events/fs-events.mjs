import EventEmitter from 'events';
import fs from 'fs';

const fileEmitter = new EventEmitter();

const filepath = './first.txt';

fileEmitter.on('writeComplete', () => {
	console.log(`Файл ${filepath} записан`);
	fs.appendFile(filepath, '\nВторая строка', () => {
		fileEmitter.emit('appendComplete');
	});
});

fileEmitter.on('appendComplete', () => {
	console.log(`Файл ${filepath} дописан`);
	fs.rename(filepath, './renamed-first.txt', () => {
		fileEmitter.emit('renameComplete');
	});
});

fileEmitter.on('renameComplete', () => {
	console.log(`Файл ${filepath} переименован`);
});

fs.writeFile(filepath, 'First file text', () => {
	fileEmitter.emit('writeComplete');
});
