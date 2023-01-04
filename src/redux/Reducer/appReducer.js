import { createReducer } from "@reduxjs/toolkit";
import { getMyProfile } from "./authReducer";
//типы для формирования экшена
const INITIALIZD_SUCCESS = 'INITIALIZD-SUCCESS';
let initialState = {
	initialized: false
};
const appReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(INITIALIZD_SUCCESS, (state, action) => { // устанавливаем пользователя, кука которого пришла с сервака апишки
			return {
				initialized: true
			};
		})
		.addDefaultCase((state, action) => { })
});

// экшн криеторы для передачи экшена дальше в редьсер
export const initializeSuccess = () => { // присылает данные для установки текущего пользователя
	return {
		type: INITIALIZD_SUCCESS
	}
}
export const initializeApp = () => { // thunkCrеator который делает связанные мелкие диспатчи и отсылает в дал запрос
	return (dispatch) => {
		let promise = dispatch(getMyProfile());
		promise.then(() => {
			dispatch(initializeSuccess())
		});
	}
}
export default appReducer;