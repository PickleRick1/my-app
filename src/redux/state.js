const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';



let store = {
	_subscriber() {
		console.log('no subscribers (observers)')
	},
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hey, how are you?', likeCounter: 15 },
				{ id: 2, message: "It's me first program", likeCounter: 23 },
				{ id: 3, message: "And it's my first using of props", likeCounter: 1 },
			],
			newPostText: '',
		},
		dialogsPage: {
			dialogs: [
				{ id: 1, name: 'Dyma' },
				{ id: 2, name: 'Lesya' },
				{ id: 3, name: 'Daria' },
				{ id: 4, name: 'Vlad' },
				{ id: 5, name: 'Arthur' },
				{ id: 6, name: 'Sofia' },
			],
			messages: [
				{ id: 1, message: 'Hi', imgSrc: 'https://avatars.mds.yandex.net/i?id=4abb9ac3da700fdce7f32cc58eb14bb598cbe38c-7051630-images-thumbs&n=13&exp=1' },
				{ id: 2, message: 'How are you?', imgSrc: 'https://avatars.mds.yandex.net/i?id=d4b324f1da4a92a4db330db10469c2b8b2f483d6-7106899-images-thumbs&n=13&exp=1' },
				{ id: 3, message: 'Yo', imgSrc: 'https://avatars.mds.yandex.net/i?id=4abb9ac3da700fdce7f32cc58eb14bb598cbe38c-7051630-images-thumbs&n=13&exp=1' },
				{ id: 4, message: 'Yo', imgSrc: 'https://avatars.mds.yandex.net/i?id=d4b324f1da4a92a4db330db10469c2b8b2f483d6-7106899-images-thumbs&n=13&exp=1' },
			],
			newMessageText: '',
		},
		sidebar: {
			paths: [
				{ id: 1, path: '/profile', nameLink: 'Profile' },
				{ id: 2, path: '/dialogs', nameLink: 'Dialogs' },
				{ id: 3, path: '/news', nameLink: 'News' },
				{ id: 4, path: '/music', nameLink: 'Music' },
				{ id: 5, path: '/settings', nameLink: 'Settings' },
			],
			friends: [
				{ id: 1, imgSrc: 'https://avatars.mds.yandex.net/i?id=4abb9ac3da700fdce7f32cc58eb14bb598cbe38c-7051630-images-thumbs&n=13&exp=1', name: 'Dyma' },
				{ id: 2, imgSrc: 'https://avatars.mds.yandex.net/i?id=2f6e1ffd3b455abccb3158f5114c38f20b7596fa-4428480-images-thumbs&n=13&exp=1', name: 'Lesya' },
				{ id: 3, imgSrc: 'https://avatars.mds.yandex.net/i?id=534a19c1077c2f438e9053210a63c1f007beb5de-5648447-images-thumbs&n=13&exp=1', name: 'Daria' },
			]
		}
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._subscriber = observer;
	},
	dispatch(action) {
		switch (action.type) {
			case ADD_POST: {
				let newPost = {
					id: 4,
					message: this._state.profilePage.newPostText,
					likeCounter: 0
				}
				this._state.profilePage.posts.push(newPost);
				this._state.profilePage.newPostText = '';
				this._subscriber();
				break;
			}
			case UPDATE_POST: this._state.profilePage.newPostText = action.newText;
				this._subscriber();
				break;
			case ADD_MESSAGE:
				let newMessage = {
					id: 5,
					message: this._state.dialogsPage.newMessageText,
					imgSrc: 'https://avatars.mds.yandex.net/i?id=4abb9ac3da700fdce7f32cc58eb14bb598cbe38c-7051630-images-thumbs&n=13&exp=1',
				}
				this._state.dialogsPage.messages.push(newMessage);
				this._state.dialogsPage.newMessageText = '';
				this._subscriber();
				break;
			case UPDATE_MESSAGE: this._state.dialogsPage.newMessageText = action.value;
				this._subscriber();
				break;
		}
	},
}

export const addPostActionCreator = () => {
	return {
		type: ADD_POST
	}
}
export const updatePostActionCreator = (text) => {
	return {
		type: UPDATE_POST, newText: text
	}
}
export const addMessageAcrionCreator = () => {
	return {
		type: ADD_MESSAGE
	}
}
export const updateMessageAcrionCreator = (text) => {
	return {
		type: UPDATE_MESSAGE, value: text
	}
}
window.store = store;
export default store;
/*
let state = {
	profilePage: {
		posts: [
			{ id: 1, message: 'Hey, how are you?', likeCounter: 15 },
			{ id: 2, message: "It's me first program", likeCounter: 23 },
			{ id: 3, message: "And it's my first using of props", likeCounter: 1 },
		],
		newPostText: '',
	},
	dialogsPage: {
		dialogs: [
			{ id: 1, name: 'Dyma' },
			{ id: 2, name: 'Lesya' },
			{ id: 3, name: 'Daria' },
			{ id: 4, name: 'Vlad' },
			{ id: 5, name: 'Arthur' },
			{ id: 6, name: 'Sofia' },
		],
		messages: [
			{ id: 1, message: 'Hi', imgSrc: 'https://avatars.mds.yandex.net/i?id=4abb9ac3da700fdce7f32cc58eb14bb598cbe38c-7051630-images-thumbs&n=13&exp=1' },
			{ id: 2, message: 'How are you?', imgSrc: 'https://avatars.mds.yandex.net/i?id=d4b324f1da4a92a4db330db10469c2b8b2f483d6-7106899-images-thumbs&n=13&exp=1' },
			{ id: 3, message: 'Yo', imgSrc: 'https://avatars.mds.yandex.net/i?id=4abb9ac3da700fdce7f32cc58eb14bb598cbe38c-7051630-images-thumbs&n=13&exp=1' },
			{ id: 4, message: 'Yo', imgSrc: 'https://avatars.mds.yandex.net/i?id=d4b324f1da4a92a4db330db10469c2b8b2f483d6-7106899-images-thumbs&n=13&exp=1' },
		],
		newMessageText: '',
	},
	sidebar: {
		paths: [
			{ id: 1, path: '/profile', nameLink: 'Profile' },
			{ id: 2, path: '/dialogs', nameLink: 'Dialogs' },
			{ id: 3, path: '/news', nameLink: 'News' },
			{ id: 4, path: '/music', nameLink: 'Music' },
			{ id: 5, path: '/settings', nameLink: 'Settings' },
		],
		friends: [
			{ id: 1, imgSrc: 'https://avatars.mds.yandex.net/i?id=4abb9ac3da700fdce7f32cc58eb14bb598cbe38c-7051630-images-thumbs&n=13&exp=1', name: 'Dyma' },
			{ id: 2, imgSrc: 'https://avatars.mds.yandex.net/i?id=2f6e1ffd3b455abccb3158f5114c38f20b7596fa-4428480-images-thumbs&n=13&exp=1', name: 'Lesya' },
			{ id: 3, imgSrc: 'https://avatars.mds.yandex.net/i?id=534a19c1077c2f438e9053210a63c1f007beb5de-5648447-images-thumbs&n=13&exp=1', name: 'Daria' },
		]
	}
}
export let addMessage = () => {
	let newMessageObj = {
		id: 5,
		message: state.dialogsPage.messages.newMessageText,
		imgSrc: 'https://avatars.mds.yandex.net/i?id=d4b324f1da4a92a4db330db10469c2b8b2f483d6-7106899-images-thumbs&n=13&exp=1',
	}
	state.dialogsPage.messages.push(newMessageObj);
	state.dialogsPage.messages.newMessageText = '';
	rerenderEntireTree(state);
}
export let updateMessage = (text) => {
	state.dialogsPage.messages.newMessageText = text;
	rerenderEntireTree(state);
}
export let addPost = () => {
	let newPost = {
		id: 4,
		message: state.profilePage.newPostText,
		likeCounter: 0
	}
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
}
export let updatePost = (newText) => {
	state.profilePage.newPostText = newText;
	rerenderEntireTree(state);
}

export const subscribe = (observer) => {
	rerenderEntireTree = observer;
}
export default state;*/