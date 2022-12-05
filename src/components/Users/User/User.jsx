import s from './../Users.module.css';

const User = (props) => {
	return (<div className={s.column}>
		<div className={s.blockImg}>
			<img className={s.image} src={props.src} alt="img" />
			{props.follow ? <button onClick={() => { props.unfollow(props.id) }}>Unfollow</button> : <button onClick={() => { props.followAC(props.id) }}>follow</button>}
		</div>
		<div>
			<p>{props.fullname}</p>
			<p>{props.status}</p>
		</div>
		<div>
			<p>{props.country}</p>
			<p>{props.city}</p>
		</div>
	</div>)

}
export default User;