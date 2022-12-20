
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {

	let dialogsElements = props.dialogsPage.dialogs.map(d => <Dialog name={d.name} id={d.id} />); // перебиврает все элементы и добавляет каждому пропсы
	let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} imgSrc={m.imgSrc} />);
	// перебиврает все элементы и добавляет каждому пропсы
	let addMessage = () => {  // функция из пропсов ,которая вызовет экшн криетор,где редьюсер добавит новое сообщение
		props.sendMessage();
	};
	let onMessageChange = (e) => { // колбэк который вызывается при изменении  поля ввода
		let text = e.target.value; // текущее велью в поле ввода которое мы получаем через объект события, что правильно
		props.updateMessage(text);  // функция из пропсов ,которая вызовет экшн криетор,передаст туда велью и дальше редьюсер обновит стейт
	}
	return (
		<div>
			<div className={s.dialogs}>
				<div className={s.dialogs_item}>
					{dialogsElements}
				</div>
				<div className={s.messages}>
					{messagesElements}
					<textarea onChange={onMessageChange} value={props.dialogsPage.newMessageText}></textarea>
					{/*onChange вызывает колбек при каждом изменении поля ввода,то есть на каждый символ. Велью - прошитое поле,еоторое лежит в стейте и меняется на каждый символ */}
					<button onClick={addMessage}>Send message</button>
				</div>
			</div>

		</div>
	)
}
export default Dialogs;