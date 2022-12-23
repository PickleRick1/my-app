import { createReducer } from "@reduxjs/toolkit";
import { profileAPI } from '../../api/api';
const ADD_POST = 'ADD-POST'; //типы для формирования экшена
const UPDATE_POST = 'UPDATE-POST';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';
let initialState = {
	posts: [
		{ id: 1, message: 'Hey, how are you?', likeCounter: 15 },
		{ id: 2, message: "It's me first program", likeCounter: 23 },
		{ id: 3, message: "And it's my first using of props", likeCounter: 1 },
	],
	newPostText: '',
	profile: null,
	status: ''
}
const profileReducer = createReducer(initialState, (builder) => { // создаем редьюсер
	builder
		.addCase(ADD_POST, (state, action) => { // формирует новый пост котрый добавится на стену
			let newPost = {
				id: 4,
				message: state.newPostText, // передаем тест который хранили ранее
				likeCounter: 0
			}
			state.posts.push(newPost); //добавляем пост
			state.newPostText = ''; // очищаем поле для ввода
		})
		.addCase(UPDATE_POST, (state, action) => { // добавляет каждый символ в наше поле для хранения нового текста для поста
			state.newPostText = action.newText;
		})
		.addCase(SET_PROFILE, (state, action) => { // устанавливает профиль с сервака на который мы щелкнули на UI
			state.profile = action.profile;
		})
		.addCase(SET_STATUS, (state, action) => { // устанавливает профиль с сервака на который мы щелкнули на UI
			state.status = action.status;
		});
});
/*const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 4,
				message: state.newPostText,
				likeCounter: 0
			}
			state.posts.push(newPost);
			state.newPostText = '';
			return state;
		}
		case UPDATE_POST: state.newPostText = action.newText;
			return state;
		default: return state;
	}
}*/
// экшн криеторы для передачи экшена дальше в редьсер
export const addPostActionCreator = () => { // добавляет пост на стр
	return {
		type: ADD_POST
	}
}
export const updatePostActionCreator = (text) => { // присылает обновленное слово с инпута
	return {
		type: UPDATE_POST, newText: text
	}
}
export const setProfile = (profile) => { // присылает профиль с сервака
	return {
		type: SET_PROFILE, profile
	}
}
export const setStatus = (status) => { // присылает профиль с сервака
	return {
		type: SET_STATUS, status
	}
}
export const getProfile = (userId) => { // thunkCrеator который делает связанные мелкие диспатчи и отсылает в дал запрос
	return (dispatch) => {
		profileAPI.getProfileOfUser(userId) // получаем профиль юзера по айди
			.then(data => { // получаем ответ
				dispatch(setProfile(data)); // отсылает профиль в стор
			})
	}
}
export const getStatus = (userId) => { // thunkCrеator который делает связанные мелкие диспатчи и отсылает в дал запрос
	return (dispatch) => {
		profileAPI.getStatusOfUser(userId) // получаем профиль юзера по айди
			.then(data => { // получаем ответ
				dispatch(setStatus(data)); // отсылает профиль в стор
			})
	}
}
export const updateStatus = (status) => { // thunkCrеator который делает связанные мелкие диспатчи и отсылает в дал запрос
	return (dispatch) => {
		profileAPI.updateStatusOfUser(status) // получаем профиль юзера по айди
			.then(data => {
				if (data.resultCode === 0) {
					dispatch(setStatus(status));
					debugger
				}// получаем ответ
				// отсылает профиль в стор
			})
	}
}
export default profileReducer;