
import React from 'react';
import { connect } from "react-redux";
import { setUserData, setCurrentProfile } from '../../redux/Reducer/authReducer';
import Header from './Header';
import { authAPI, profileAPI } from '../../api/api';

class HeaderContainer extends React.Component {
	componentDidMount = () => { // компонента вмонтирована
		authAPI.getMyProfile() // делает аякс запрос за моим айди, логином и мейлом посредством куки с апишки сервера
			.then(data => {
				if (data.resultCode === 0) { // если кука есть и все успешно
					let { id, email, login } = data.data; // то раскукоживаем данные айди логина и мейла с данных сервака
					this.props.setUserData(id, email, login); // отсылаем наши данные в стейт
					profileAPI.getProfileOfUser(id) // делает аякс запрос за моим профилем черех айди для получения фоточек и т.д

						.then(data => {
							this.props.setCurrentProfile(data); //передаем мой профиль в стейт
						})
				}
			})
	}
	render() {

		return <Header {...this.props} /> // рендерим хедер, передаем профиль черех спред чтоб не писать все вручную
	}
}
const mapStateToProps = (state) => {
	return {
		login: state.auth.login,
		isAuth: state.auth.isAuth,
		profile: state.auth.currentProfile
	}// стейт что придет в компоненту
}
export default connect(mapStateToProps, { setUserData, setCurrentProfile })(HeaderContainer);
//создание контейнерной компоненты над контейнерной чтоб делать запросы, передаем наш стейт и экшн криеторы