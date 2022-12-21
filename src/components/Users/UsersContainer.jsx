
import React from 'react';
import { connect } from "react-redux";
import Users from "./Users";
import { follow, unfollow, setCurrentPage, getUsers } from "../../redux/Reducer/usersReducer";

import Preloader from '../common/Preloader/Preloader';
class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.pageSize, this.props.currentPage); // отправляем запрос в блл который там санку делает
	}
	onPageChange = (page) => {
		this.props.setCurrentPage(page);
		this.props.getUsers(this.props.pageSize, page); // получаем текущую стр с клика который параметр функции
	}
	render() {
		return (
			<>{this.props.isFetching ? <Preloader /> : null} {/*вызываем крутилку если isFetching = true или нет  */}

				<Users totalCount={this.props.totalCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} onPageChange={this.onPageChange} follow={this.props.follow} unfollow={this.props.unfollow} users={this.props.users} followingInProgress={this.props.followingInProgress} />
				{/*отрисовуем юзеров,передаем пропсы */}
			</>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		currentPage: state.usersPage.currentPage,
		totalCount: state.usersPage.totalCountPage,
		pageSize: state.usersPage.pageSize,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	} // стейт для пропсов,что мы хотим передать в компоненту
}
/*const mapDispatchToProps = (dispatch) => {
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
		},
		setPreloader: (value) => {
			dispatch(setPreloaderAC(value))
		}
	}
}*/
export default connect(mapStateToProps, { follow, unfollow, setCurrentPage, getUsers })(UsersContainer);
				//создание контейнерной компоненты над контейнерной чтоб делать запросы, передаем наш стейт и экшн криеторы