import { createReducer } from "@reduxjs/toolkit";
const SET_USER_DATA = 'SET-USER-DATA';
const SET_CURRENT_PROFILE = 'CURRENT-PROFILE';
let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	currentProfile: null
};
const authReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(SET_USER_DATA, (state, action) => {
			return {
				...action.data,
				isAuth: true,
			};
		})
		.addCase(SET_CURRENT_PROFILE, (state, action) => {
			state.currentProfile = action.profile;
		})
		.addDefaultCase((state, action) => { })
});
export const setUserData = (userId, email, login) => {
	return {
		type: SET_USER_DATA, data: { userId, email, login }
	}
}
export const setCurrentProfile = (profile) => {
	return {
		type: SET_CURRENT_PROFILE, profile
	}
}
export default authReducer;