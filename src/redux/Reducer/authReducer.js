import { createReducer } from "@reduxjs/toolkit";
import { stopSubmit } from "redux-form";
import { authAPI, profileAPI } from '../../api/api';
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
				/*isAuth: true,*/ // говорим что мы авторизовались
			};
		})
		.addCase(SET_CURRENT_PROFILE, (state, action) => { // устанавливаем профиль текущего пользователя
			state.currentProfile = action.profile;
		})
		.addDefaultCase((state, action) => { })
});

// экшн криеторы для передачи экшена дальше в редьсер
export const setUserData = (userId, email, login, isAuth) => { // присылает данные для установки текущего пользователя
	return {
		type: SET_USER_DATA, data: { userId, email, login, isAuth } // закукоживаем в дату все данные
	}
}
export const setCurrentProfile = (profile) => {  // присылает профиль текущего пользователя
	return {
		type: SET_CURRENT_PROFILE, profile
	}
}

export const getMyProfile = () => { // thunkCrеator который делает связанные мелкие диспатчи и отсылает в дал запрос
	return async (dispatch) => {
		let data = await authAPI.getMyProfile() // делает аякс запрос за моим айди, логином и мейлом посредством куки с апишки сервера
		if (data.resultCode === 0) { // если кука есть и все успешно
			let { id, email, login } = data.data; // то раскукоживаем данные айди логина и мейла с данных сервака
			dispatch(setUserData(id, email, login, true)); // отсылаем наши данные в стейт
			/*profileAPI.getProfileOfUser(id) // делает аякс запрос за моим профилем черех айди для получения фоточек и т.д
				.then(data => {
					dispatch(setCurrentProfile(data)); //передаем мой профиль в стейт
				})*/
		}
	}
}
export const login = (email, password, rememberMe) => { // thunkCrеator который делает связанные мелкие диспатчи и отсылает в дал запрос
	return async (dispatch) => {
		let data = await authAPI.login(email, password, rememberMe) // делает аякс запрос за моим айди, логином и мейлом посредством куки с апишки сервера
				if (data.resultCode === 0) {
					dispatch(getMyProfile())
				} else {
					let message = (data.messages.length > 0) ? data.messages[0] : 'Some error';
					dispatch(stopSubmit('login', ({ _error: message })))
				}
	}
}
export const logout = () => { // thunkCrеator который делает связанные мелкие диспатчи и отсылает в дал запрос
	return async (dispatch) => {
		let data = await authAPI.logout() // делает аякс запрос за моим айди, логином и мейлом посредством куки с апишки сервера
				if (data.resultCode === 0) {
					dispatch(setUserData(null, null, null, false))
				}
	}
}

export default authReducer;