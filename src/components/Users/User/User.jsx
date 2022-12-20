import React from 'react';
import s from './../Users.module.css';
import { NavLink } from "react-router-dom";
import { usersAPI } from '../../../api/api';
/*<div>
			<p>{props.country}</p>
			<p>{props.city}</p>
		</div>*/
const User = (props) => {
	return (<div className={s.column}>
		<div className={s.blockImg}>
			<NavLink to={'/profile/' + props.id}> {/* Ссылка на которую если щелкнуть - перейдем на профиль юзера*/}
				<img className={s.image} src={props.src} alt="img" />
			</NavLink >

			{props.follow ? <button onClick={ // проверямем если фоллоу тру - тогда по клику 
				() => {
					usersAPI.unfollowUser(props.id) // делаем запрос на сервак, передаем айди юзера
						.then(data => { // получаем ответ
							if (data.resultCode === 0) { // если ответ пришел
								props.unfollow(props.id) // отписываемся, в редьюсере присвоим фолс
							}
						})

				}}>Unfollow</button> //если фоллоу тру то кнопка будет анфоллоу
				: <button onClick={ // если фоллоу фолс  - тогда по клику 
					() => {
						usersAPI.followUser(props.id) // делаем запрос на сервак, передаем айди юзера
							.then(data => { // получаем ответ
								if (data.resultCode === 0) { // если ответ пришел
									props.followAC(props.id);  // подписываемся, в редьюсере присвоим тру
								}
							})
					}}>follow</button> //если фоллоу фолс то кнопка будет фоллоу
				} 
		</div>
		<div>
			<NavLink to={'/profile/' + props.id}> {/* Ссылка на которую если щелкнуть - перейдем на профиль юзера*/}
				<p>{props.fullname}</p>
				<p>{props.status}</p>
			</NavLink >

		</div>

	</div>)

}
export default User;