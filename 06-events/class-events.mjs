import EventEmitter from 'events';

class Post extends EventEmitter {
	constructor(author, text) {
		super();
		this.author = author;
		this.text = text;
		this.likesQty = 0;
		this.on('likePost', (username) => {
			console.log(`Новый лайк от ${username}`);
		});
		this.on('error', (error) => {
			console.error(error);
		});
	}

	like(username) {
		if (!username) {
			this.emit('error', new Error('Введите имя пользователя для like'));
		} else {
			this.likesQty += 1;
			this.emit('likePost', username);
		}
	}
}

const myPost = new Post('Valery', 'Перый пост');

// console.log(myPost.author);
// console.log(myPost.text);
// console.log(myPost.likesQty);

myPost.like('Василий');
setTimeout(() => myPost.like(), 1000);
setTimeout(() => myPost.like('Зинаида Павловна'), 2000);
// console.log(myPost.likesQty);
