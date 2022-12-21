
import Profile from './Profile';
import React from 'react';
import { connect } from "react-redux";
import { getProfile } from '../../redux/Reducer/profileReducer';
import { useParams } from 'react-router-dom';


export function withRouter(Children) { // функция получения параметра с урла
	return (props) => {

		const match = { params: useParams() }; // присваиваем матчу объект который содержить параматры,в которых лежит айди
		return <Children {...props} match={match} /> // передаем пропсы любой компоненте которая вызвоет эту функцию
	}
}
class ProfileContainer extends React.Component {
	componentDidMount = () => { // компонента вмонтировалась
		let userId = this.props.match.params.userId || 2; // получаем айдишник юзера,по которму мы щелкнули с урла
		this.props.getProfile(userId); // отправляем запрос в блл который там санку делает
	}
	render() {

		return <Profile {...this.props} /> // рендерим профиль, передаем профиль черех спред чтоб не писать все вручную
	}
}
const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		profile: state.profilePage.profile,
		newPostText: state.profilePage.newPostText
	} // стейт что придет в компоненту
}
export default connect(mapStateToProps, { getProfile })(withRouter(ProfileContainer));
//создание контейнерной компоненты над контейнерной чтоб делать запросы, передаем наш стейт и экшн криеторы