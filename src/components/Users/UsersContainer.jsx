
import React from 'react';
import { connect } from "react-redux";
import Users from "./Users";
import { follow, unfollow, setUsers, setCurrentPage, setTotalCount, setPreloader } from "../../redux/Reducer/usersReducer";
import { usersAPI } from '../../api/api';

import Preloader from '../common/Preloader/Preloader';
class UsersContainer extends React.Component {
	componentDidMount() { // компонента вмонтрировалась, могем делать аякс запросы
		{ this.props.setPreloader(true) } //вызываем крутилку
		usersAPI.getUsers(this.props.pageSize, this.props.currentPage) // запрос на сервак чтоб получить юзеров
			.then(data => {
				this.props.setPreloader(false); //убираем крутилку
				this.props.setUsers(data.items); // добавляем юзеров в наш стор
				this.props.setTotalCount(data.totalCount);// добавляем кол-во пользователей в стор
			})

	}
	onPageChange = (p) => {
		{ this.props.setPreloader(true) } //вызываем крутилку
		this.props.setCurrentPage(p); // получаем текущую стр с клика который параметр функции
		usersAPI.getUsers(this.props.pageSize, p) // запрос на сервак чтоб получить юзеров для этой стр
			.then(data => {
				this.props.setPreloader(false); //вызываем крутилку
				this.props.setUsers(data.items) // добавляем юзеров в наш стор
			});
	}
	render() {
		return (
			<>{this.props.isFetching ? <Preloader /> : null} {/*вызываем крутилку если isFetching = true или нет  */}

				<Users totalCount={this.props.totalCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} onPageChange={this.onPageChange} follow={this.props.follow} unfollow={this.props.unfollow} users={this.props.users} />
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
		isFetching: state.usersPage.isFetching
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
export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalCount, setPreloader })(UsersContainer);
				//создание контейнерной компоненты над контейнерной чтоб делать запросы, передаем наш стейт и экшн криеторы