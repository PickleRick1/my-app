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
	return (
		<div>
			<div className={s.dialogs}>
				<div className={s.dialogs_item}>
					<Dialog name='Dyma' id='1' />
					<Dialog name='Lesya' id='2' />
					<Dialog name='Daria' id='3' />
					<Dialog name='Vlad' id='4' />
					<Dialog name='Arthur' id='5' />
					<Dialog name='Sofia' id='6' />
				</div>
				<div className={s.messages}>
					<Message message='Hi' />
					<Message message='How are you?' />
					<Message message='Yo' />
				</div>
			</div>

		</div>
	)
}
export default Dialogs;