function greeting(name) {
	console.log('Buongiorno,', name);
}

// после этой строки module.exports останется пустым
// exports = greeting;

module.exports = greeting;
