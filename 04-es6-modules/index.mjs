import { season, temperature } from './named-exports.mjs';
import { isRaining, humidity } from './inline-exports.mjs';

console.log(season);
console.log(temperature);

console.log(isRaining);
console.log(humidity);
