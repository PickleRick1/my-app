import { createReducer } from "@reduxjs/toolkit";
const FOLLOW = 'FOLLOW';  //типы для формирования экшена
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const SET_PRELOADER = 'SET-PRELOADER';
let initialState = {  // изначальные данные в сторе
	users: [ // заполняется профилями с сервера
		/*{ id: 1, follow: true, avatar: 'https://avatars.mds.yandex.net/i?id=4abb9ac3da700fdce7f32cc58eb14bb598cbe38c-7051630-images-thumbs&n=13&exp=1', fullname: 'Dmitry', status: 'Ok', location: { country: 'Belarus', city: 'Minsk' } },
		{ id: 2, follow: false, avatar: 'https://avatars.mds.yandex.net/i?id=2f6e1ffd3b455abccb3158f5114c38f20b7596fa-4428480-images-thumbs&n=13&exp=1', fullname: 'Elena', status: 'Ok', location: { country: 'Russia', city: 'Simpheropol' } },
		{ id: 3, follow: true, avatar: 'https://avatars.mds.yandex.net/i?id=534a19c1077c2f438e9053210a63c1f007beb5de-5648447-images-thumbs&n=13&exp=1', fullname: 'Lesya', status: 'Ok', location: { country: 'Russia', city: 'Yenakievo' } },*/
	],
	pageSize: 20,  // количество сколько придет пользователей с сервака
	totalCountPage: 0, // сколько всего пользоватей на сервере
	currentPage: 1,  // стартовая страничка ответа сервака 
	isFetching: true // отображать ли крутилку загрузки
}

const usersReducer = createReducer(initialState, (builder) => { // создаем редьюсер
	builder
		.addCase(FOLLOW, (state, action) => { // случай когда приходит тип *подписка*
			state.users.map(u => {
				if (u.id === action.userId) { //перебиваем всех юзеров и ищем пришеднший айди
					return u.follow = true; // подписываемся на пришедший с экшн криетора айди
				}
				return u;
			})

		})
		.addCase(UNFOLLOW, (state, action) => {  // случай когда приходит тип *отписка*
			state.users.map(u => {
				if (u.id === action.userId) {//перебиваем всех юзеров и ищем пришеднший айди
					return u.follow = false; // отписываемся на пришедший с экшн криетора айди
				}
				return u;
			})
		})
		.addCase(SET_USERS, (state, action) => { // случай когда приходит тип *доставания юзеров с сервака*
			state.users = action.users;  // добавляем пришедших с экшн криетора юзеров
		})
		.addCase(SET_CURRENT_PAGE, (state, action) => { // случай когда приходит тип *устанавливания текущей стр*
			state.currentPage = action.current; // добавляем пришедшую с экшн криетора текущую стр
		})
		.addCase(SET_TOTAL_COUNT, (state, action) => { // случай когда приходит тип *устанавливания всех пользователей*
			state.totalCountPage = action.count; // присвоение всех пользоватей
		})
		.addCase(SET_PRELOADER, (state, action) => { // случай когда приходит тип *устанавливания крутилки загрузки*
			state.isFetching = action.value; // присваиваем пришедшую с экшн криетора  true/false
		});
});
export default usersReducer;
// экшн криеторы для передачи экшена дальше в редьсер
export const follow = (userId) => { //передает айди юзера для подписки
	return {
		type: FOLLOW, userId
	}
}
export const unfollow = (userId) => { //передает айди юзера для отписки
	return {
		type: UNFOLLOW, userId
	}
}
export const setUsers = (users) => { //передает число всех юзеров
	return {
		type: SET_USERS, users
	}
}
export const setCurrentPage = (current) => {  //передает текущую стр
	return {
		type: SET_CURRENT_PAGE, current
	}
}
export const setTotalCount = (count) => {  //передает всех пользоватей
	return {
		type: SET_TOTAL_COUNT, count
	}
}
export const setPreloader = (value) => { //передает true/false для отображения крутилки
	return {
		type: SET_PRELOADER, value
	}
}