
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {

	let dialogsElements = props.dialogsPage.dialogs.map(d => <Dialog name={d.name} id={d.id} />);
	let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} imgSrc={m.imgSrc} />);
	let addMessage = () => {
		props.sendMessage();
	};
	let onMessageChange = (e) => {
		let text = e.target.value;
		props.updateMessage(text);
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
					<button onClick={addMessage}>Send message</button>
				</div>
			</div>

		</div>
	)
}
export default Dialogs;