const { myName, myHobbies, myFavouriteNumber } = require('./multiple-exports');

// console.log(arguments.callee.toString());

console.log(__filename);
console.log(__dirname);

// console.log(exports);
// console.log(require);

console.log('---------------------------------');
console.log(myName);
console.log(myHobbies);
console.log(myFavouriteNumber);
