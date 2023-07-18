const fs = require('fs');

console.log('Program start');

setTimeout(() => console.log('Timeout 1'), 0);
setTimeout(() => console.log('Timeout 2'), 10);

fs.writeFile('./test.txt', 'Hello node', () => console.log('File written'));

Promise.resolve().then(() => console.log('Promise 1'));

console.log('Program end');