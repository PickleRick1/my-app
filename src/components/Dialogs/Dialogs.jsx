
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

	let dialogsElements = props.dialogs.map(d => <Dialog name={d.name} id={d.id} />);
	let messagesElements = props.messages.map(m => <Message message={m.message} />);
	return (
		<div>
			<div className={s.dialogs}>
				<div className={s.dialogs_item}>
					{dialogsElements}
				</div>
				<div className={s.messages}>
					{messagesElements}
				</div>
			</div>

		</div>
	)
}
export default Dialogs;