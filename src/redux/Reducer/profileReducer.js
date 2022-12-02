import { createReducer } from "@reduxjs/toolkit";
const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
let initialState = {
	posts: [
		{ id: 1, message: 'Hey, how are you?', likeCounter: 15 },
		{ id: 2, message: "It's me first program", likeCounter: 23 },
		{ id: 3, message: "And it's my first using of props", likeCounter: 1 },
	],
	newPostText: '',
}
const profileReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(ADD_POST, (state, action) => {
			let newPost = {
				id: 4,
				message: state.newPostText,
				likeCounter: 0
			}
			state.posts.push(newPost);
			state.newPostText = '';
		})
		.addCase(UPDATE_POST, (state, action) => {
			state.newPostText = action.newText;
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

export default profileReducer;