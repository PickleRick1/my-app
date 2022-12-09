import axios from "axios";
import User from "./User/User";
import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png'

class UsersC extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalCount(response.data.totalCount);
			})

	}
	onPageChange = (p) => {
		this.props.setCurrentPage(p);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`)
			.then(response => this.props.setUsers(response.data.items));
	}
	render() {
		let pageCount = Math.ceil(this.props.totalCount) / this.props.pageSize;
		let pages = [];
		for (let i = 1; i <= pageCount; i++) {
			pages.push(i);
		}
		let pageElements = pages.map((p, i) => {
			return (<span className={this.props.currentPage === p ? s.selectedPage : undefined} onClick={(e) => { this.onPageChange(p) }}>{' ' + p + ' '}</span>)

		})
		let userElements = this.props.users.map(u => <User followAC={this.props.follow} unfollow={this.props.unfollow} key={u.id} id={u.id} follow={u.follow} src={u.photos.small != null ? u.photos.small : userPhoto} fullname={u.name} status={u.status} />);
		return (<div>
			<div>{pageElements}</div>
			<div>{userElements}</div>
		</div>
		)
	}
}

export default UsersC;