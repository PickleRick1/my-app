import { createReducer } from "@reduxjs/toolkit";
//типы для формирования экшена
const SET_USER_DATA = 'SET-USER-DATA';
const SET_CURRENT_PROFILE = 'CURRENT-PROFILE';
let initialState = {
	userId: null, // будет содержать айди пользователя кука которого авторизована на серваке апишки
	email: null, // будет содержать эмайл пользователя кука которого авторизована на серваке апишки
	login: null, // будет содержать логин пользователя кука которого авторизована на серваке апишки
	isAuth: false, // авторизованы мы или нет
	currentProfile: null // получаем текущий профиль пользователя чтоб можно было дастать фотки и т.д
};
const authReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(SET_USER_DATA, (state, action) => { // устанавливаем пользователя, кука которого пришла с сервака апишки
			return {
				...action.data, // через спред опреатор раскукоживаем пришедшие данные
				isAuth: true, // говорим что мы авторизовались
			};
		})
		.addCase(SET_CURRENT_PROFILE, (state, action) => { // устанавливаем профиль текущего пользователя
			state.currentProfile = action.profile;
		})
		.addDefaultCase((state, action) => { })
});

// экшн криеторы для передачи экшена дальше в редьсер
export const setUserData = (userId, email, login) => { // присылает данные для установки текущего пользователя
	return {
		type: SET_USER_DATA, data: { userId, email, login } // закукоживаем в дату все данные
	}
}
export const setCurrentProfile = (profile) => {  // присылает профиль текущего пользователя
	return {
		type: SET_CURRENT_PROFILE, profile
	}
}
export default authReducer;