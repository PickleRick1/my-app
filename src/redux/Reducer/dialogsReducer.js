import { createReducer } from "@reduxjs/toolkit";
//типы для формирования экшена
const ADD_MESSAGE = 'ADD-MESSAGE';
let initialState = {
	dialogs: [ // массив диалогов
		{ id: 1, name: 'Dyma' },
		{ id: 2, name: 'Lesya' },
		{ id: 3, name: 'Daria' },
		{ id: 4, name: 'Vlad' },
		{ id: 5, name: 'Arthur' },
		{ id: 6, name: 'Sofia' },
	],
	messages: [ // массив сообщений 
		{ id: 1, message: 'Hi', imgSrc: 'https://avatars.mds.yandex.net/i?id=4abb9ac3da700fdce7f32cc58eb14bb598cbe38c-7051630-images-thumbs&n=13&exp=1' },
		{ id: 2, message: 'How are you?', imgSrc: 'https://avatars.mds.yandex.net/i?id=d4b324f1da4a92a4db330db10469c2b8b2f483d6-7106899-images-thumbs&n=13&exp=1' },
		{ id: 3, message: 'Yo', imgSrc: 'https://avatars.mds.yandex.net/i?id=4abb9ac3da700fdce7f32cc58eb14bb598cbe38c-7051630-images-thumbs&n=13&exp=1' },
		{ id: 4, message: 'Yo', imgSrc: 'https://avatars.mds.yandex.net/i?id=d4b324f1da4a92a4db330db10469c2b8b2f483d6-7106899-images-thumbs&n=13&exp=1' },
	],
};

const dialogsReducer = createReducer(initialState, (builder) => { // создаем редьюсер
	builder
		.addCase(ADD_MESSAGE, (state, action) => { // формирует новое сообщение котрый добавится на стену
			let newMessage = {
				id: 5,
				message: action.newMessageBody, // передаем тест который хранили ранее
				imgSrc: 'https://avatars.mds.yandex.net/i?id=4abb9ac3da700fdce7f32cc58eb14bb598cbe38c-7051630-images-thumbs&n=13&exp=1',
			}
			state.messages.push(newMessage); //добавляем сообщение
		})
});
/*const dialogsReduce = (state = initialState, action) => {
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
}*/
// экшн криеторы для передачи экшена дальше в редьсер
export const addMessageAcrionCreator = (newMessageBody) => { // добавляет сообщение на стр
	return {
		type: ADD_MESSAGE, newMessageBody
	}
}
export default dialogsReducer;