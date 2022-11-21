
import s from './../Dialogs.module.css';
const Message = (props) => {
	if (props.id % 2) {
		return (
			<div className={s.message}>
				<div><img className={s.message__image} src={props.imgSrc} /></div>
				<p className={s.message__text}>{props.message}</p ></div>
		)
	} else {
		return (
			<div className={s.message}>
				<div><img className={s.message__image} src={props.imgSrc} /></div>
				<p className={s.message__text}>{props.message}</p ></div>
		)
	}

}
export default Message;