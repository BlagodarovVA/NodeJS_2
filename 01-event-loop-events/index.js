const fs = require('fs');
const dns = require('dns');

function info(text) {
	console.log(text, '-', performance.now().toFixed(2));
}

console.log('Program start');

// Close events
fs.writeFile('./test.txt', 'Hello node', () => info('File written'));

// Promises
Promise.resolve().then(() => info('Promise 1'));

// Next tick
process.nextTick(() => info('next tick 1'));

// setImmediate (Check)
setImmediate(() => info('Immediate 1'));

// Timeouts
setTimeout(() => info('Timeout 1'), 0);
setTimeout(() => {
	process.nextTick(() => info('Next tick 2'));
	info('Timeout 2');
}, 100);

// Intervals
let intervalCount = 0;
const intervalId = setInterval(() => {
	info(`Interval ${intervalCount += 1}`);
	if (intervalCount === 2) {
		clearInterval(intervalId);
	}
}, 50);

// I/O events
dns.lookup('hoster.by', (err, address, family) => {
	info('DNS hoster.by: ', address);
	Promise.resolve().then(() => info('Promise 2'));
	process.nextTick(() => info('Next tick 3'));
});

console.log('Program end');