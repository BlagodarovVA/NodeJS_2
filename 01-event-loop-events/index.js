const fs = require('fs');
const dns = require('dns');

function timestamp() {
	return performance.now().toFixed(2);
}

console.log('Program start');

// Close events
fs.writeFile('./test.txt', 'Hello node', () => console.log('File written', ' - ', timestamp()));

// Promises
Promise.resolve().then(() => console.log('Promise 1', ' - ', timestamp()));

// Next tick
process.nextTick(() => console.log('next tick 1', ' - ', timestamp()));

// setImmediate (Check)
setImmediate(() => console.log('Immediate 1', ' - ', timestamp()));

// Timeouts
setTimeout(() => console.log('Timeout 1', ' - ', timestamp()), 0);
setTimeout(() => {
	process.nextTick(() => console.log('Next tick 2', ' - ', timestamp()));
	console.log('Timeout 2', ' - ', timestamp());
}, 10);

// I/O events
dns.lookup('hoster.by', (err, address, family) => {
	console.log('DNS hoster.by: ', address, ' - ', timestamp());
	Promise.resolve().then(() => console.log('Promise 2', ' - ', timestamp()));
	process.nextTick(() => console.log('Next tick 3', ' - ', timestamp()));
});

console.log('Program end');