import axios from "axios";
import User from "./User/User";
import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png'

class UsersC extends React.Component {
	constructor(props) {
		super(props);
		axios.get('https://social-network.samuraijs.com/api/1.0/users')
			.then(response => this.props.setUsers(response.data.items));
	}
	render() {
		let userElements = this.props.users.map(u => <User followAC={this.props.follow} unfollow={this.props.unfollow} key={u.id} id={u.id} follow={u.follow} src={u.photos.small != null ? u.photos.small : userPhoto} fullname={u.name} status={u.status} />);
		return (
			<div>{userElements}</div>
		)
	}
}

export default UsersC;