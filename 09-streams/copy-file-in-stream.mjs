import fs from 'fs';

const fileName = './files/file.log';
const copiedFileName = './copied-files/file.log';

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(copiedFileName);

readStream.pipe(writeStream);

readStream.on('end', () => console.log('INFO: Поток чтения завершен'));
writeStream.on('finish', () => console.log('INFO: Файл скопирован'));
writeStream.on('close', () => console.log('INFO: Поток записи завершен'));
