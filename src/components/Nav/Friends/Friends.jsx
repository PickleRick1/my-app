import s from './../Nav.module.css';

const Friends = (props) => {
	return (
		<div className={s.friends__item}>
			<img className={s.friends__image} src={props.imgSrc} alt="friend" />
			<p className={s.friends__name}>{props.name}</p>
		</div>
	)
}
export default Friends;