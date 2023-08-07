const path = require('path');

const filePath = 'd:\\JS\\Node_2\\07-path\\index.js';
const textFilePath = 'd:\\JS\\Node_2\\07-path\\file.txt';
const relativePath = '../07-path\\movie.mov';
const directoryPath = '../07-path\\subfolder';

console.log(path.isAbsolute(filePath)); // true
console.log(path.isAbsolute(relativePath)); // false

console.log(path.basename(filePath)); // index.js
console.log(path.basename(directoryPath)); // subfolder

console.log(path.dirname(filePath)); // d:/JS/Node_2/07-path
console.log(path.dirname(directoryPath)); // ../07-path

console.log(path.resolve(relativePath)); // d:\JS\07-path\movie.mov

console.log(path.extname(textFilePath)); // .txt
console.log(path.extname(directoryPath));

console.log(path.parse(filePath));

const parsedPath = path.parse(filePath);
console.log(filePath);
// d:\JS\Node_2\07-path\index.js
console.log(path.join(parsedPath.dir, `renamed-${parsedPath.name}.mjs`));
// d:\JS\Node_2\07-path\renamed-index.mjs
