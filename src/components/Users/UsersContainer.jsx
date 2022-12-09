import { current } from '@reduxjs/toolkit';
import React from 'react';
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalCountAC } from "../../redux/Reducer/usersReducer";
import UsersC from './UsersC';
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
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);
export default UsersContainer;