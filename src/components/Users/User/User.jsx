import React from 'react';
import s from './../Users.module.css';
import { NavLink } from "react-router-dom";
/*<div>
			<p>{props.country}</p>
			<p>{props.city}</p>
		</div>*/

const User = (props) => {
	return (<div className={s.column}>
		<div className={s.blockImg}>
			<NavLink to={'/profile/' + props.user.id}> {/* Ссылка на которую если щелкнуть - перейдем на профиль юзера*/}
				<img className={s.image} src={props.src} alt="img" />
			</NavLink >
			{props.user.followed ? <button disabled={props.followingInProgress.includes(props.user.id)} onClick={ // проверямем если фоллоу тру - тогда по клику 
				() => {
					props.unfollow(props.user.id) // отписываемся, в редьюсере присвоим фолс
				}}>Unfollow</button> //если фоллоу тру то кнопка будет анфоллоу
				: <button disabled={props.followingInProgress.includes(props.user.id)} onClick={ // если фоллоу фолс  - тогда по клику 
					() => {
						props.follow(props.user.id);  // подписываемся, в редьюсере присвоим тру
					}}>follow</button> //если фоллоу фолс то кнопка будет фоллоу
			}
		</div>
		<div>
			<NavLink to={'/profile/' + props.user.id}> {/* Ссылка на которую если щелкнуть - перейдем на профиль юзера*/}
				<p>{props.user.name}</p>
				<p>{props.user.status}</p>
			</NavLink >

		</div>

	</div>)

}
export default User;