const fs = require('fs');

function timestamp() {
	return performance.now().toFixed(2);
}

console.log('Program start');

setTimeout(() => console.log('Timeout 1', timestamp()), 0);
setTimeout(() => console.log('Timeout 2', timestamp()), 10);

fs.writeFile('./test.txt', 'Hello node', () => console.log('File written', timestamp()));

Promise.resolve().then(() => console.log('Promise 1', timestamp()));

process.nextTick(() => console.log('next tick 1', timestamp()));

setImmediate(() => console.log('Immediate 1', timestamp()));

console.log('Program end');