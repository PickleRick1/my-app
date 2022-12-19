import React from 'react';
import axios from "axios";
import s from './../Users.module.css';
import { NavLink } from "react-router-dom";
/*<div>
			<p>{props.country}</p>
			<p>{props.city}</p>
		</div>*/
const User = (props) => {
	debugger
	return (<div className={s.column}>
		<div className={s.blockImg}>
			<NavLink to={'/profile/' + props.id}>
				<img className={s.image} src={props.src} alt="img" />
			</NavLink >

			{props.follow ? <button onClick={
				() => {
					axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/` + props.id, {
						withCredentials: true,
						headers: {
							'API-KEY': '44a9282e-f707-41c4-819b-8a4741c1243e'
						}
					})
						.then(response => {
							if (response.data.resultCode === 0) {
								props.unfollow(props.id)
							}
						})

				}}>Unfollow</button> : <button onClick={
					() => {
						axios.post(`https://social-network.samuraijs.com/api/1.0//follow/` + props.id, {}, {
							withCredentials: true,
							headers: {
								'API-KEY': '44a9282e-f707-41c4-819b-8a4741c1243e'
							}
						})
							.then(response => {
								if (response.data.resultCode === 0) {
									props.followAC(props.id);
								}
							})
					}}>follow</button>}
		</div>
		<div>
			<NavLink to={'/profile/' + props.id}>
				<p>{props.fullname}</p>
				<p>{props.status}</p>
			</NavLink >

		</div>

	</div>)

}
export default User;