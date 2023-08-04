import EventEmitter from 'events';

class Post extends EventEmitter {
	constructor(author, text) {
		super();
		this.author = author;
		this.text = text;
		this.likesQty = 0;
	}

	like(username) {
		this.likesQty += 1;
		this.emit('likePost', username);
	}
}

const myPost = new Post('Valery', 'Перый пост');
myPost.on('likePost', (username) => {
	console.log(`Новый лайк от ${username}`);
});

// console.log(myPost.author);
// console.log(myPost.text);
// console.log(myPost.likesQty);

myPost.like('Василий');
setTimeout(() => myPost.like('Фросий'), 1000);
setTimeout(() => myPost.like('Зинаида Павловна'), 2000);
// console.log(myPost.likesQty);
