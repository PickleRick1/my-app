
import React from 'react';
import { connect } from "react-redux";
import { getMyProfile } from '../../redux/Reducer/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
	componentDidMount = () => { // компонента вмонтирована
		this.props.getMyProfile(); // отправляем запрос в блл который там санку делает
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
export default connect(mapStateToProps, { getMyProfile })(HeaderContainer);
//создание контейнерной компоненты над контейнерной чтоб делать запросы, передаем наш стейт и экшн криеторы