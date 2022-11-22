
import s from './../Dialogs.module.css';
const Message = (props) => {
	if (props.id % 2) {
		return (
			<div className={s.message}>
				<div ><img className={s.message__image} src={props.imgSrc} /></div>
				<p className={s.message__text}>{props.message}</p ></div>
		)
	} else {
		return (
			<div className={s.message}>
				<div className={s.message_order}><img className={s.message__image} src={props.imgSrc} /></div>
				<p className={s.message__text + ' ' + s.message__text_right}>{props.message}</p >
				<div className={s.div__null}></div></div>
		)
	}

}
export default Message;