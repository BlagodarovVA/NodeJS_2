import { Transform } from 'stream';
import fs from 'fs';

const upperCaseStream = new Transform({
	transform: function (chunk, encoding, cb) {
		const upperCased = chunk.toString().toUpperCase();
		//console.log(upperCased);
		cb(null, upperCased);
	},
});

const reverseStream = new Transform({
	transform: function (chunk, encoding, cb) {
		const arrayOfChars = chunk.toString().split('');
		const lastChar = arrayOfChars.pop();
		const reversed = arrayOfChars.reverse().concat(lastChar).join('');
		//console.log(reversed);
		cb(null, reversed);
	},
});

process.stdin.pipe(upperCaseStream).pipe(reverseStream).pipe(process.stdout);

// // пайп в файл
// const filePath = './files/stdin-dump.txt';
// const writeStream = fs.createWriteStream(filePath);
// process.stdin.pipe(writeStream);

// // пайп в stdout
// process.stdin.pipe(process.stdout);
