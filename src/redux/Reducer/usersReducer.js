import { createReducer } from "@reduxjs/toolkit";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
let initialState = {
	users: [
		/*{ id: 1, follow: true, avatar: 'https://avatars.mds.yandex.net/i?id=4abb9ac3da700fdce7f32cc58eb14bb598cbe38c-7051630-images-thumbs&n=13&exp=1', fullname: 'Dmitry', status: 'Ok', location: { country: 'Belarus', city: 'Minsk' } },
		{ id: 2, follow: false, avatar: 'https://avatars.mds.yandex.net/i?id=2f6e1ffd3b455abccb3158f5114c38f20b7596fa-4428480-images-thumbs&n=13&exp=1', fullname: 'Elena', status: 'Ok', location: { country: 'Russia', city: 'Simpheropol' } },
		{ id: 3, follow: true, avatar: 'https://avatars.mds.yandex.net/i?id=534a19c1077c2f438e9053210a63c1f007beb5de-5648447-images-thumbs&n=13&exp=1', fullname: 'Lesya', status: 'Ok', location: { country: 'Russia', city: 'Yenakievo' } },*/
	],
	pageSize: 20,
	totalCountPage: 0,
	currentPage: 1
}

const usersReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(FOLLOW, (state, action) => {
			state.users.map(u => {
				if (u.id === action.userId) {
					return u.follow = true;
				}
				return u;
			})

		})
		.addCase(UNFOLLOW, (state, action) => {
			state.users.map(u => {
				if (u.id === action.userId) {
					return u.follow = false;
				}
				return u;
			})
		})
		.addCase(SET_USERS, (state, action) => {
			state.users = action.users;
		})
		.addCase(SET_CURRENT_PAGE, (state, action) => {
			state.currentPage = action.current;
		})
		.addCase(SET_TOTAL_COUNT, (state, action) => {
			state.totalCountPage = action.count;
		});
});
export default usersReducer;

export const followAC = (userId) => {
	return {
		type: FOLLOW, userId
	}
}
export const unfollowAC = (userId) => {
	return {
		type: UNFOLLOW, userId
	}
}
export const setUsersAC = (users) => {
	return {
		type: SET_USERS, users
	}
}
export const setCurrentPageAC = (current) => {
	return {
		type: SET_CURRENT_PAGE, current
	}
}
export const setTotalCountAC = (count) => {
	return {
		type: SET_TOTAL_COUNT, count
	}
}