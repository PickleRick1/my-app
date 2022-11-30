const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';

const profileReducer = (state, action) => {
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
}
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