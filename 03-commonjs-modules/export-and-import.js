const { myName } = require('./multiple-exports');

const myFriendsname = 'Diana';

module.exports.myName = myName;
module.exports.myFriendsname = myFriendsname;
