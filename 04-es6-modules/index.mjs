import { season, temperature } from './named-exports.mjs';
import { isRaining, humidity } from './inline-exports.mjs';
import getDataFromServer from './default-export.mjs';

console.log(season);
console.log(temperature);

console.log(isRaining);
console.log(humidity);

getDataFromServer('https://jsonplaceholder.typicode.com/posts/')
	.then((post) => console.log(post))
	.catch((err) => console.error(err));
