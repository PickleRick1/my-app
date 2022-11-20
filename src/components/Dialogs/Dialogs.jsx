import { NavLink, Route } from 'react-router-dom';
import s from './Dialogs.module.css';
const Dialog = (props) => {
	let path = '/dialogs/' + props.id;
	return (
		<div className={s.dialog + ' ' + s.active}><NavLink to={path}>{props.name}</NavLink></div>
	)
}
const Message = (props) => {
	return (
		<div className={s.message}>{props.message}</div>
	)
}

const Dialogs = (props) => {
	let dialogs = [
		{ id: 1, name: 'Dyma' },
		{ id: 2, name: 'Lesya' },
		{ id: 3, name: 'Daria' },
		{ id: 4, name: 'Vlad' },
		{ id: 5, name: 'Arthur' },
		{ id: 6, name: 'Sofia' },
	]
	let messages = [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How are you?' },
		{ id: 3, message: 'Yo' },
	]

	let dialogsElements = dialogs.map(d => <Dialog name={d.name} id={d.id} />);
	let messagesElements = messages.map(m => <Message message={m.message} />);
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