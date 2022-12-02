
let initialState = {
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
};
const sidebarReducer = (state = initialState, action) => {
	return state;
}
export default sidebarReducer;