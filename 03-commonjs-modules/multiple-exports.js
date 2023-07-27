const myName = 'Valery';
const myHobbies = ['reyki', 'car', 'spiritual development'];
const myFavouriteNumber = 9;

console.log('Text from the multiple-exports CommonJS module');

module.exports.myName = myName;
exports.myHobbies = myHobbies;
exports.myFavouriteNumber = myFavouriteNumber;
