import { current } from '@reduxjs/toolkit';
import React from 'react';
import axios from "axios";
import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalCountAC } from "../../redux/Reducer/usersReducer";
class UsersContainer extends React.Component {
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
		return (
			<Users totalCount={this.props.totalCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} onPageChange={this.onPageChange} follow={this.props.follow} unfollow={this.props.unfollow} users={this.props.users} />
		)
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		currentPage: state.usersPage.currentPage,
		totalCount: state.usersPage.totalCountPage,
		pageSize: state.usersPage.pageSize
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId))
		},
		unfollow: (userId) => {
			dispatch(unfollowAC(userId))
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		},
		setCurrentPage: (current) => {
			dispatch(setCurrentPageAC(current))
		},
		setTotalCount: (count) => {
			dispatch(setTotalCountAC(count))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
