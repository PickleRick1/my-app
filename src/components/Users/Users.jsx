
import User from "./User/User";
import React from 'react';
import axios from "axios";
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png'

const Users = (props) => {
	let pageCount = Math.ceil(props.totalCount) / props.pageSize;
	let pages = [];
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i);
	}
	let pageElements = pages.map((p, i) => {
		return (<span className={props.currentPage === p ? s.selectedPage : undefined} onClick={(e) => { props.onPageChange(p) }}>{' ' + p + ' '}</span>)

	})
	let userElements = props.users.map(u =>
			<User followAC={props.follow} unfollow={props.unfollow} key={u.id} id={u.id} follow={u.follow} src={u.photos.small != null ? u.photos.small : userPhoto} fullname={u.name} status={u.status}
			/>

	);
	return (<div>
		<div>{pageElements}</div>
		<div>{userElements}

		</div>
	</div>
	)


}

export default Users;