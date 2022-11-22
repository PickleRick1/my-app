
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {
	let newMessage = React.createRef();
	let sendMessage = () => {
		let text = newMessage.current.value;
		alert(text);
	};
	let dialogsElements = props.dialogsPage.dialogs.map(d => <Dialog name={d.name} id={d.id} />);
	let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} imgSrc={m.imgSrc} />);
	return (
		<div>
			<div className={s.dialogs}>
				<div className={s.dialogs_item}>
					{dialogsElements}
				</div>
				<div className={s.messages}>
					{messagesElements}
					<textarea ref={newMessage}></textarea>
					<button onClick={sendMessage}>Send message</button>
				</div>
			</div>

		</div>
	)
}
export default Dialogs;