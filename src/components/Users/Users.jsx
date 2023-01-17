
import User from "./User/User";
import React from 'react';

import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
import Paginator from "../common/Paginator/Paginator";

const Users = (props) => {
	debugger
	let userElements = props.users.map(u =>
		<User follow={props.follow} unfollow={props.unfollow} key={u.id} user={u} src={u.photos.small != null ? u.photos.small : userPhoto} followingInProgress={props.followingInProgress}

		/>//если есть срс фотки - отображаем ее, если нет - картинку что лежит в ../../assets/images/user.png
		//перебор всех юзеров и присвоение пропсов

	);
	return (<div>
		<div><Paginator totalCount={props.totalCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChange={props.onPageChange} /></div>
		<div>{userElements}

		</div>
	</div>
	)


}

export default Users;