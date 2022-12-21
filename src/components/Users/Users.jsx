
import User from "./User/User";
import React from 'react';

import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png'

const Users = (props) => {
	let pageCount = Math.ceil(props.totalCount) / props.pageSize; // делим общее кол-во пользователей на количество выодимых
	let pages = [];
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i); // запихиваем количество стр с деления в массив
	}
	let pageElements = pages.map((p, i) => { //перебор всех стр
		return (
			<span className=
				{props.currentPage === p ? s.selectedPage : undefined} // если текущая стр - подсветить ее
				onClick={(e) => { props.onPageChange(p) }}>{' ' + p + ' '}</span>) // по клику вызываем функцию onPageChange и передаем стр на какую кликнли

	})
	let userElements = props.users.map(u =>
		<User follow={props.follow} unfollow={props.unfollow} key={u.id} user={u} src={u.photos.small != null ? u.photos.small : userPhoto} followingInProgress={props.followingInProgress}

		/>//если есть срс фотки - отображаем ее, если нет - картинку что лежит в ../../assets/images/user.png
		//перебор всех юзеров и присвоение пропсов

	);
	return (<div>
		<div>{pageElements}</div>
		<div>{userElements}

		</div>
	</div>
	)


}

export default Users;