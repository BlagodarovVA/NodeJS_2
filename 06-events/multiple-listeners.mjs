import EventEmitter from 'events';

const myEmitter = new EventEmitter();

myEmitter.on('myEvent', () => {
	console.log('First event listener');
});

myEmitter.on('myEvent', () => {
	console.log('Second event listener');
});

myEmitter.on('otherEvent', () => console.log('Other event'));

// 10 по умолчанию. на практике обычно 1-2
myEmitter.setMaxListeners(20);
console.log(myEmitter.getMaxListeners());

console.log(myEmitter.eventNames());

setTimeout(() => myEmitter.emit('myEvent'), 1000);
