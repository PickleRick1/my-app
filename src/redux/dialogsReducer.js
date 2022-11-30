const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

const dialogsReducer = (state, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let newMessage = {
				id: 5,
				message: state.newMessageText,
				imgSrc: 'https://avatars.mds.yandex.net/i?id=4abb9ac3da700fdce7f32cc58eb14bb598cbe38c-7051630-images-thumbs&n=13&exp=1',
			}
			state.messages.push(newMessage);
			state.newMessageText = '';
			break;
		case UPDATE_MESSAGE: state.newMessageText = action.value;
			break;
		default: return state;
	}
}
export const addMessageAcrionCreator = () => {
	return {
		type: ADD_MESSAGE
	}
}
export const updateMessageAcrionCreator = (text) => {
	return {
		type: UPDATE_MESSAGE, value: text
	}
}
export default dialogsReducer;