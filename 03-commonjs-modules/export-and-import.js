const { myName, myHobbies } = require('./multiple-exports');

const myFriendsname = 'Diana';

module.exports.myName = myName;
module.exports.myFriendsname = myFriendsname;
// имя свойства может отличаться от имени переменной
module.exports.myGreatHobbies = myHobbies;
