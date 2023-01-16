import { createReducer } from "@reduxjs/toolkit";
import { usersAPI } from '../../api/api';
import { updateObjectInArray } from "../../components/utils/helper";
const FOLLOW = 'FOLLOW';  //типы для формирования экшена
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const SET_PRELOADER = 'SET-PRELOADER';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE-FOLLOWING-IN-PROGRESS';
let initialState = {  // изначальные данные в сторе
	users: [ // заполняется профилями с сервера
		/*{ id: 1, follow: true, avatar: 'https://avatars.mds.yandex.net/i?id=4abb9ac3da700fdce7f32cc58eb14bb598cbe38c-7051630-images-thumbs&n=13&exp=1', fullname: 'Dmitry', status: 'Ok', location: { country: 'Belarus', city: 'Minsk' } },
		{ id: 2, follow: false, avatar: 'https://avatars.mds.yandex.net/i?id=2f6e1ffd3b455abccb3158f5114c38f20b7596fa-4428480-images-thumbs&n=13&exp=1', fullname: 'Elena', status: 'Ok', location: { country: 'Russia', city: 'Simpheropol' } },
		{ id: 3, follow: true, avatar: 'https://avatars.mds.yandex.net/i?id=534a19c1077c2f438e9053210a63c1f007beb5de-5648447-images-thumbs&n=13&exp=1', fullname: 'Lesya', status: 'Ok', location: { country: 'Russia', city: 'Yenakievo' } },*/
	],
	pageSize: 20,  // количество сколько придет пользователей с сервака
	totalCountPage: 0, // сколько всего пользоватей на сервере
	currentPage: 1,  // стартовая страничка ответа сервака 
	isFetching: true, // отображать ли крутилку загрузки
	followingInProgress: [] //массив для айдишек,которые мы фоллвим,для дизейбла кнопки
}

const usersReducer = createReducer(initialState, (builder) => { // создаем редьюсер
	builder
		.addCase(FOLLOW, (state, action) => {
			return {
				users: updateObjectInArray(state.users, action.userId, 'id', { follow: true })
			}// случай когда приходит тип *подписка*
			/*state.users.map(u => {
				if (u.id === action.userId) { //перебиваем всех юзеров и ищем пришеднший айди
					return u.follow = true; // подписываемся на пришедший с экшн криетора айди
				}
				return u;
			})*/

		})
		.addCase(UNFOLLOW, (state, action) => {  // случай когда приходит тип *отписка*
			return {
				users: updateObjectInArray(state.users, action.userId, 'id', { follow: false })
			}
			/*state.users.map(u => {
				if (u.id === action.userId) {//перебиваем всех юзеров и ищем пришеднший айди
					return u.follow = false; // отписываемся на пришедший с экшн криетора айди
				}
				return u;
			})*/
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
			state.isFetching = action.isFetching; // присваиваем пришедшую с экшн криетора  true/false
		})
		.addCase(TOGGLE_FOLLOWING_IN_PROGRESS, (state, action) => { // случай когда приходит тип *устанавливания крутилки загрузки*
			return {
				...state,
				followingInProgress: action.isWorking
					? [...state.followingInProgress, action.id]
					: state.followingInProgress.filter(id => id !== action.id)
			}
			// присваиваем пришедшую с экшн криетора  true/false
		});
});
export default usersReducer;
// экшн криеторы для передачи экшена дальше в редьсер
export const followSuccess = (userId) => { //передает айди юзера для подписки
	return {
		type: FOLLOW, userId
	}
}
export const unfollowSuccess = (userId) => { //передает айди юзера для отписки
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
export const setPreloader = (isFetching) => { //передает true/false для отображения крутилки
	return {
		type: SET_PRELOADER, isFetching
	}
}
export const toggleFollowingInProgress = (isWorking, id) => { //передает true/false для отображения кнопки и айди юзера с этой кнопкой
	return {
		type: TOGGLE_FOLLOWING_IN_PROGRESS, isWorking, id
	}
}
const funcFollowUnwollow = async (dispatch, userId, APImethod, actionCreator) => {
	dispatch(toggleFollowingInProgress(true, userId));
	let responce = await APImethod(userId); // делаем запрос на сервак, передаем айди юзера
	if (responce.data.resultCode === 0) { // если ответ пришел
		dispatch(actionCreator(userId)) //подписываемся, в редьюсере присвоим фолс
	}
	dispatch(toggleFollowingInProgress(false, userId));
}
export const getUsers = (pageSize, currentPage) => { // thunkCrеator который делает связанные мелкие диспатчи и отсылает в дал запрос
	return async (dispatch) => {
		dispatch(setPreloader(true));  //вызываем крутилку
		let data = await usersAPI.getUsers(pageSize, currentPage); // запрос на сервак чтоб получить юзеров
		dispatch(setPreloader(false)); //убираем крутилку
		dispatch(setUsers(data.items)); // добавляем юзеров в наш стор
		dispatch(setTotalCount(data.totalCount));// добавляем кол-во пользователей в стор
	}
}
export const unfollow = (userId) => { // thunkCrеator который делает связанные мелкие диспатчи и отсылает в дал запрос
	return async (dispatch) => {
		funcFollowUnwollow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), unfollowSuccess)
	}
}
export const follow = (userId) => { // thunkCrеator который делает связанные мелкие диспатчи и отсылает в дал запрос
	return async (dispatch) => {
		funcFollowUnwollow(dispatch, userId, usersAPI.followUser.bind(usersAPI), followSuccess)
	}
}

