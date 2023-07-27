const { myName, myHobbies, myFavouriteNumber } = require('./multiple-exports');

// не нужно использовать абсолютные пути
// const greetingFn = require('d:\\JS\\Node_2\\03-commonjs-modules\\my-modules\\single-export.js');
const greetingFn = require('./my-modules/single-export');
const {
	myName: myOtherName,
	myFriendsname,
	myGreatHobbies,
} = require('./export-and-import');

// console.log(arguments.callee.toString());

console.log(__filename);
//console.log(__dirname);

// console.log(exports);
// console.log(require);

console.log('---------------------------------');

// импорты multiple-exports
console.log(myName);
console.log(myHobbies);
console.log(myFavouriteNumber);

myHobbies.push('juorney');

// импорты single-export
greetingFn(myName);

// импорты export-and-import
console.log(myOtherName);
console.log(myFriendsname);
console.log(myGreatHobbies);
