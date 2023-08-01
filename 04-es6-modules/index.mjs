import { season, temperature } from './named-exports.mjs';
import { isRaining, humidity } from './inline-exports.mjs';
import getDataFromServer from './default-export.mjs';
import DEFAULT_SERVER, {
	USERNAME,
	PASSWORD as MY_PASSWORD,
} from './mixed-exports.mjs';

console.log(season);
console.log(temperature);

console.log(isRaining);
console.log(humidity);

/*getDataFromServer('https://jsonplaceholder.typicode.com/posts/')
	.then((post) => console.log(post))
	.catch((err) => console.error(err));
*/

console.log(DEFAULT_SERVER);
console.log(USERNAME, MY_PASSWORD);
